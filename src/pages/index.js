const config = require("../utils/siteConfig");

import Helmet from "react-helmet";
import Link from "gatsby-link";
import React from "react";
import get from "lodash/get";
import styled from "styled-components";

class BlogIndex extends React.Component {
  componentWillMount() {
    const posts = get(this, "props.data.allMarkdownRemark.edges");
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "MMMM DD, YYYY")
            title
            subTitle
            cover {
              children {
                ... on ImageSharp {
                  sizes(maxWidth: 240) {
                    ...GatsbyImageSharpSizes_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
