const config = require("../utils/siteConfig");

import styled, { keyframes } from "styled-components";

import Article from "../components/Article/Article";
import Helmet from "react-helmet";
import React from "react";
import get from "lodash/get";

const wrapperShowUp = keyframes`
  0% {
    opacity: 0.00001;
  }
  10% {
    opacity: 1;
  }
`;

const Wrapper = styled.main`
  background: ${props => props.theme.post.backgrounds.wrapper};
  bottom: 0;
  left: 0;
  opacity: 1;
  margin-top: ${props => props.theme.topBar.sizes.height}px;
  overflow: auto;
  padding: 1.5em 1.5em 5.5em;
  position: absolute;
  right: 0;
  top: 0;

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.M}) {
    animation-name: ${wrapperShowUp};
    animation-duration: 3s;
    padding: 3em 3.5em 6em;
  }
  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    left: ${props =>
      props.navigatorIsActive ? props.theme.navigator.sizes.asideWidth : 0};
    padding: 3.5em 3.5em 3em;
  }
`;

class BlogPostTemplate extends React.Component {
  componentWillMount() {
    const posts = get(this, "props.data.allContentfulPost");
  }

  render() {
    const post = this.props.data.allContentfulPost;

    return (
      <Wrapper navigatorIsActive={this.props.navigatorIsActive}>
        <Helmet title={`${post.title} | ${config.siteTitle}`} />
        <Article post={post} />
      </Wrapper>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath {
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
