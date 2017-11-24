import React from "react";
import TopBar from "./TopBar";

class TopBarContainer extends React.Component {
  render() {
    return <TopBar navigatorIsActive={this.props.navigatorIsActive} />;
  }
}

export default TopBarContainer;
