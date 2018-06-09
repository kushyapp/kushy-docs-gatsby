/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const slugify = require(`slugify`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const createPaginatedPages = require("gatsby-paginate");

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators
    
    if (node.internal.type === `MarkdownRemark`) { // Grab file relative path
        const fileNode = getNode(node.parent);
        
        /**
         * Grab the file path so we can use it later
         * Helps for determining post type (docs, page, etc)
         * Or generating categories based on file path
         */
        const parsedFilePath = path.parse(fileNode.relativePath);

        /**
         * Add a section field to let the UI know this is docs 
         * (vs a page, blog, etc)
         */
        if (parsedFilePath.dir.includes('docs/')) {
            createNodeField({
                node,
                name: `section`,
                value: 'docs',
            })
        }

        /**
         * Create a category based on the Markdown file's parent folder
         * so "/shops/get-all-shops.md" will be the "shops" category
         */
        let category = parsedFilePath.dir.replace('docs/', '');
        if (category.indexOf('/') !== -1)
        {
            // Remove everything after the first / to isolate the "section"
            category = category.substring(0, category.indexOf('/'));
        }
        createNodeField({
            node,
            name: `category`,
            value: category,
        })

        /**
         * Create a slug field
         * First by default creates a slug based on the file path
         * If it's an API route, makes slug based on method + route in frontmatter
         * If it's an page route, makes slug based on route only in frontmatter
         * 
         * Then finally creates the node with whatever slug we ended up with
         */
        let cleanRoute = node.frontmatter.route.replace(':', '-');
        let slug = createFilePath({
            node,
            getNode,
            basePath: `pages`
        });
        if (node.frontmatter.section === 'api' && node.frontmatter.route && node.frontmatter.method)
        {
            slug = slugify(`${node.frontmatter.method}-${cleanRoute}`)
        }
        if (node.frontmatter.section === 'page')
        {
            slug = cleanRoute;
        }

        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
};


/**
 *  Pagination for /docs/ page
 */
function createDocsPagination(graphql, createPage) {
        graphql(`
      {
        allMarkdownRemark(
            filter:{fields:{section:{eq: "docs"}}}
        ) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        last_updated(formatString: "DD MMMM, YYYY")
                    }
                    fields {
                        slug
                        section
                        category
                    }
                }
            }
        }
      }
    `).then(result => {

                createPaginatedPages({
                    edges: result.data.allMarkdownRemark.edges,
                    createPage: createPage,
                    pageTemplate: "src/templates/blog-archive.js",
                    pageLength: 6,
                    pathPrefix: "blog",
                    buildPath: (index, pathPrefix) => index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}` // This is optional and this is the default
                });

            })
}


/**
 *  Create slug pages for markdown files
 *  Create pages for each tag
 */
exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
        graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
                excerpt
                frontmatter {
                    title
                    page_type
                    last_updated(formatString: "DD MMMM, YYYY")
                }
                fields {
                    slug
                    section
                    category
                }
            }
          }
        }
      }
    `).then(result => {
                /**
                 * Create blog posts based on slugs
                 */
                result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                    if(node.frontmatter.page_type === 'api')
                    {
                        createPage({
                            path: node.fields.slug,
                            component: path.resolve(`./src/templates/doc-post.js`),
                            context: {
                                slug: node.fields.slug,
                                category: node.fields.category,
                            },
                        })
                    } else {
                        createPage({
                            path: node.fields.slug,
                            component: path.resolve(`./src/templates/page-post.js`),
                            context: {
                                slug: node.fields.slug,
                                category: node.fields.category,
                            },
                        })
                    }
                    
                });


                resolve()
            })
        createDocsPagination(graphql, createPage);
    })
};