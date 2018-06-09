import React, { Component } from "react";
import Link from "gatsby-link";

import Sidebar from '../components/Sidebar';

export default class Frontpage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { docs, sidebar } = this.props.data;

    let docList = docs.edges.map((doc) => (
      doc.node.frontmatter.title
    ));

    return (
      <div className="Frontpage">
        <Sidebar data={ sidebar.edges } />
        <div className="MainContent">
          <div className="ui page">

            <section className="ui cta padded gray">
              <h1 className="ui header">Welcome</h1>
              <h2 className="ui header">Start here to learn how to use the Kushy platform.</h2>
              <a href="#" className="ui button">
                <i className="icon github"></i>
                Edit on Github
              </a>
              <a href="#" className="ui button">
                <i className="icon gitter"></i>
                Discuss on Gitter.im
              </a>
            </section>

            <section className="cta white padded">
              <section className="ui three column grid">
              
                <aside className="column">
                  <h3 className="ui icon header">
                    <i className="settings icon"></i>
                    <div className="content">
                      Fundamentals
                      <p className="sub header">Pre-adoption topics for ensuring a smooth ride into production</p>
                      <Link to={'/'}>Start preparing ⟫</Link>
                    </div>
                  </h3>
                </aside>
              
                <aside className="column">
                  <h3 className="ui icon header">
                    <i className="settings icon"></i>
                    <div className="content">
                      Guides
                      <p className="sub header">Implementation guides covering all the best-practices from schema to style</p>
                      <Link to={'/'}>Follow the guides ⟫</Link>
                    </div>
                  </h3>
                </aside>
              
                <aside className="column">
                  <h3 className="ui icon header">
                    <i className="settings icon"></i>
                    <div className="content">
                      Tutorials
                      <p className="sub header">Get started quickly with the Kushy API with step-by-step instructions</p>
                      <Link to={'/'}>Browse our tutorials ⟫</Link>
                    </div>
                  </h3>
                </aside>


              </section>
            </section>

            <section className="ui cta padded gray">
              <h1 className="ui header">Build danker apps with Kushy</h1>
              <section className="ui two column stackable grid">
                <div className="column">
                  <img src="https://kushy.net/img/Developers/StrainsAccess.png" />
                </div>
                <div className="column">
                  <h2 className="ui header">Access over 10,000 strains</h2>
                  <p>From THC to CBN and every terpene in between, find any strain you need and all the associated data.</p>
                </div>
                <div className="column">
                  <h2 className="ui header">Find cannabis shops</h2>
                  <p>Browse by location, access live product menus, and discover deals from dispensaries and headshops.</p>
                </div>
                <div className="column">
                  <img src="https://kushy.net/img/Developers/ShopsMarkerFind.png" />
                </div>
              </section>
            </section>

            <section className="ui basic clearing segment two column grid">
              <section className="column">
              </section>
              <section className="column">
                <Link className="ui card" style={{float:'right'}}>
                  <div className="right aligned content">
                    <aside className="meta">
                      <span>Next</span>
                    </aside>
                    <h4 className="header">The Kushy Platform</h4>
                  </div>
                </Link>
              </section>
            </section>

          </div>
        </div>
      </div>
    );
  }
};

export const query = graphql`
  query IndexQuery {
    docs: allMarkdownRemark(
      sort: {fields: [frontmatter___last_updated], order: DESC}, 
      limit: 3
      filter:{fields:{section:{eq: "docs"}}}
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
            section
            category
          }
          excerpt
        }
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
    }
  }
`;