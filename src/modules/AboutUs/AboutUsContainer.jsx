import React from "react";

import AboutUs from "./AboutUs";

class AboutUsContainer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <AboutUs />;
  }
}

export default AboutUsContainer;
