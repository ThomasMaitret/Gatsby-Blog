import PostsNavigator from "./PostsNavigator";
import React from "react";

class PostsNavigatorContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PostsNavigator
        location={this.props.location}
        posts={this.props.posts}
        linkOnClick={this.props.linkOnClick}
        isAside={this.props.isAside}
        inTransition={this.props.inTransition}
        isHidden={this.props.isHidden}
      />
    );
  }
}

export default PostsNavigatorContainer;
