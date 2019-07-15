import React from "react";

import Home from "./Home";

class HomeContainer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <Home />;
  }
}

export default HomeContainer;
