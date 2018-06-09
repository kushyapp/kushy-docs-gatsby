import React, { Component } from "react";

import 'prismjs/themes/prism-okaidia.css';

import Sidebar from '../components/Sidebar';
import SEO from '../components/SEO';

export default class BlogPost extends Component {

  constructor(props) {
    super(props);
    
  }

  langSwitch(lang) {
    let codeBlocks = document.getElementsByClassName('gatsby-highlight');
    console.log(codeBlocks);
    for(let codeBlock of codeBlocks) {
      for(let syntax of codeBlock.children)
      {
        if (syntax.className.includes(lang))
        {
          codeBlock.classList.toggle("hidden");
        } else {
          // Check here if element is not hidden
          // And make sure we don't hide JSON results
          // Hide if necessary
          if (!codeBlock.className.includes('hidden') && syntax.className.includes('json') == false) {
            codeBlock.classList.toggle("hidden");
          }
        }
      }
    }
  }

  componentDidMount()
  {
    /**
     * Hide all the code blocks
     */
    let codeBlocks = document.getElementsByClassName('gatsby-highlight');
    for (let codeBlock of codeBlocks) {
      for (let syntax of codeBlock.children) {
        if (syntax.className.includes('shell') || syntax.className.includes('javascript')) {
          if (codeBlock.classList) {
            codeBlock.classList.toggle("hidden");
          } else {
            // For IE9
            var classes = codeBlock.className.split(" ");
            var i = classes.indexOf("hidden");

            if (i >= 0)
              classes.splice(i, 1);
            else
              classes.push("hidden");
            codeBlock.className = classes.join(" ");
          }
        }
      }
    }
  }


  render() {


    const skip = false;
    const { page, sidebar } = this.props.data;

    const currentDate = new Date();
    let postDate = new Date(page.frontmatter.last_updated);

    return (
        <div className="Blog">
          <Sidebar data={ sidebar.edges } />
          <div className="MainContent">
            {/*----- Reading progress only on blog -----*/}
            <SEO 
              key={`seo-${page.fields.slug}`}
              postData={page}
              isBlogPost
            />
            <article className="Page ui container">
              {/*----- Post content -----*/}
              <section className="content">
                <h1 className="Title">{page.frontmatter.title}</h1>

                <div dangerouslySetInnerHTML={{ __html: page.html }} />

              </section>
          </article>

          
          </div>
        </div>
    );
  }
};

export const query = graphql`
  query PageQuery($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        route
      }
      fields {
        slug
        section
        category
      }
    },
    sidebar: allMarkdownRemark(
      sort: {
        fields: [fields___category],
        order: DESC
      },
      filter: {
        fields: {
          section: {
            eq: "docs"
          }
        }
      }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            method
            route
          }
          fields {
            slug
            category
          }
        }
      }
    },
  }
`;