import React, { Component } from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import nicetime from '../helpers/nicetime';

import kebabCase from "lodash/kebabCase";
import 'prismjs/themes/prism-okaidia.css';

import Sidebar from '../components/Sidebar';
import SEO from '../components/SEO';
import PostLoop from '../components/PostLoop';
import Twitter from '../components/icons/Twitter'
import Tumblr from '../components/icons/Tumblr'
import ryosukeAvatar from '../assets/img/ryosuke-avatar-128.png'

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
    const { post, sidebar, pagination } = this.props.data;

    /**
     * Grab previous and next pages using pagination query
     * We check if "next" node = current slug, which means it's the previous page
     */
    let prevPage = pagination.edges.find((page) => {
      if (page.next)
        if (page.node.fields.slug !== post.fields.slug)
        return page.next.fields.slug = post.fields.slug;
    });

    let nextPage = pagination.edges.find((page) => {
      // Does it exist?
      if (page.previous)
        // Dont use the current page
        if (page.node.fields.slug !== post.fields.slug)
          return page.previous.fields.slug = post.fields.slug;
    });

    const currentDate = new Date();
    let postDate = new Date(post.frontmatter.last_updated);

    return (
        <div className="Blog">
          <Sidebar data={ sidebar.edges } />
          <div className="MainContent">
            {/*----- Reading progress only on blog -----*/}
            <SEO 
              key={`seo-${post.fields.slug}`}
              postData={post}
              isBlogPost
            />
            <article className="DocPost" id="Article">
              {/*----- Post content -----*/}
              <div className="dark-box"></div>

              {/*----- Post content -----*/}
              <section className="content">
                <nav className="syntax-menu">
                  <div className="ui menu inverted">
                    <button className="ui link button item" onClick={(e) => this.langSwitch('php')}>PHP</button>
                    <button className="ui link button item" onClick={(e) => this.langSwitch('javascript')}>JS</button>
                    <button className="ui link button item" onClick={(e) => this.langSwitch('shell')}>Shell</button>
                  </div>
                </nav>
                <h1 className="Title">{post.frontmatter.title}</h1>

                <div dangerouslySetInnerHTML={{ __html: post.html }} />

              </section>
          </article>

          <nav className="Pagination ui basic segment two column grid">
            <section className="column">
              {
                prevPage ?
                <Link to={ prevPage.node.fields.slug } className="ui card">
                  <div className="content">
                    <aside className="meta">
                      <span>&larr; Prev</span>
                    </aside>
                    <h4 className="header">{ prevPage.node.frontmatter.title }</h4>
                  </div>
                </Link>
                : ''
              }
            </section>

            <section className="column">
              {
                nextPage ? 
                <Link to={ nextPage.node.fields.slug } className="ui card" style={{float:'right'}}>
                  <div className="right aligned content">
                    <aside className="meta">
                      <span>Next &rarr;</span>
                    </aside>
                    <h4 className="header">{ nextPage.node.frontmatter.title }</h4>
                  </div>
                </Link>
              : ''
              }
            </section>
          </nav>
          </div>
        </div>
    );
  }
};

export const query = graphql`
  query BlogPostQuery($slug: String!, $category: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        method
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
    pagination: allMarkdownRemark(
      filter: {
        fields: {
          category: {
            eq: $category
          }
        }
      }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
        next {
          fields {
            slug
          }
        }
        previous {
          fields {
            slug
          }
        }
      }
    },
  }
`;