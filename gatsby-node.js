const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js');
    resolve(
      graphql(
        `
          {
            allContentfulPost {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create blog posts pages.
        // We define a variable "path" that is equal to our blogpost slug.
        _.each(result.data.allContentfulPost.edges, edge => {
          createPage({
            path: edge.node.slug,
            component: blogPost,
            context: {
              path: edge.node.slug
            }
          });
        });
      })
    );
  });
};
