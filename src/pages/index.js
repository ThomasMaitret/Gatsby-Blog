const config = require("../utils/siteConfig");

import Helmet from "react-helmet";
import Link from "gatsby-link";
import React from "react";
import get from "lodash/get";
import styled from "styled-components";

class BlogIndex extends React.Component {
  componentWillMount() {
    const posts = get(this, "props.data.allContentfulPost.edges");
    this.props.updatePostsData(posts);
    this.props.updateNavigatorIsAside(false);
  }

  render() {
    return <Helmet title={config.siteTitle} />;
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    allContentfulPost {
      edges {
        node {
          title {
            title
          }
          date
          slug
          body {
            body
          }
          featuredImage {
            resolutions(width: 175, height: 175) {
              width
              height
              src
              ...GatsbyContentfulResolutions
            }
          }
        }
      }
    }
  }
`;
