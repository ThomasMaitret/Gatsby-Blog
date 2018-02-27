const config = require('../../utils/siteConfig');

import styled, { keyframes } from 'styled-components';

import Icon from '../Other/Icon.jsx';
import Link from 'gatsby-link';
import React from 'react';
import logo from '../../images/logo-top.svg';

const Wrapper = styled.header`
  align-items: center;
  background: ${props =>
    props.navigatorIsAside || !props.navigatorIsActive
      ? props => props.theme.topBar.backgrounds.wrapperPost
      : props => props.theme.topBar.backgrounds.wrapper};
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  height: ${props => props.theme.topBar.sizes.height}px;
  justify-content: space-between;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: all 0.1s ease;
  z-index: 100;

  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.M}) {
    height: ${props => props.theme.topBar.sizes.height + 12}px;
  }
  @media screen and (min-width: ${props => props.theme.mediaQueryTresholds.L}) {
    left: ${props =>
      props.navigatorIsAside
        ? props => props.theme.navigator.sizes.asideWidth
        : '0'};
  }
`;

const Logo = styled.span`
  width: auto;
  display: block;
  font-size: 1em;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  margin: 0.2em 0 0 1em;
`;

class TopBar extends React.Component {
  render() {
    return (
      <Wrapper
        navigatorIsAside={this.props.navigatorIsAside}
        navigatorIsActive={this.props.navigatorIsActive}
      >
        <Logo navigatorIsAside={this.props.navigatorIsAside}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </Logo>
      </Wrapper>
    );
  }
}

export default TopBar;
