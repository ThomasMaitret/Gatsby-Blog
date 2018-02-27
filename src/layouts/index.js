import 'normalize.css';

import styled, { ThemeProvider } from 'styled-components';

import BottomBarContainer from '../components/BottomBar/BottomBarContainer';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import PostsNavigatorContainer from '../components/Navigator/PostsNavigatorContainer';
import React from 'react';
import TopBarContainer from '../components/TopBar/TopBarContainer';
import globals from '../styles/global';
import styles from '../styles/base';
import theme from '../styles/theme';

//import whatInput from "what-input";

const Container = styled.div`
  ${styles.baseStyles};
  min-height: 100vh;
`;

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.updatePostsData = this.updatePostsData.bind(this);
    this.navigatorLinkOnClik = this.navigatorLinkOnClik.bind(this);
    this.updateNavigatorIsAside = this.updateNavigatorIsAside.bind(this);
    this.state = {
      posts: [],
      appInit: true,
      navigatorIsAside: false,
      navigatorInTransition: false
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  updatePostsData(posts, top) {
    this.setState(() => ({
      posts: posts
    }));
  }

  updateNavigatorIsAside(val) {
    this.setState(prevState => ({
      navigatorIsAside: val,
      navigatorInTransition: prevState.appInit ? false : true
    }));
    this.endNavigatorTransition();
  }

  navigatorLinkOnClik(e) {
    if (!this.state.navigatorIsAside) {
      this.setState(() => ({
        navigatorIsAside: true,
        navigatorInTransition: true,
        appInit: false
      }));
      this.endNavigatorTransition(true);
    }
  }

  endNavigatorTransition(hidden) {
    let isWideScreen =
      typeof window !== 'undefined'
        ? document.documentElement.clientWidth > 776
        : false;
    setTimeout(() => {
      this.setState(() => ({
        navigatorInTransition: false
      }));
    }, 300);
  }

  render() {
    const { location, children } = this.props;
    const updatePostsData = this.updatePostsData;
    const updateNavigatorIsAside = this.updateNavigatorIsAside;
    const navigatorIsActive = this.state.posts.length;

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Helmet>
            <html lang="en" />
          </Helmet>
          <TopBarContainer
            navigatorIsAside={this.state.navigatorIsAside}
            navigatorIsActive={this.state.posts.length}
          />

          {children({
            ...this.props,
            updatePostsData,
            updateNavigatorIsAside,
            navigatorIsActive
          })}
          {!!this.state.posts.length &&
            !this.state.appInitialState && (
              <PostsNavigatorContainer
                location={location.pathname}
                posts={this.state.posts}
                linkOnClick={this.navigatorLinkOnClik}
                isAside={this.state.navigatorIsAside}
                inTransition={this.state.navigatorInTransition}
                isHidden={this.state.navigatorIsHidden}
              />
            )}
          {this.state.navigatorIsAside && <BottomBarContainer />}
        </Container>
      </ThemeProvider>
    );
  }
}

export default Template;
