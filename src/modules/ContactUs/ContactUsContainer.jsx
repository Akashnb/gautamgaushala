import React from "react";

import ContactUs from "./ContactUs";
import GoogleMap from "./GoogleMap";

class ConactUsContainer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <ContactUs />
        <GoogleMap />
      </React.Fragment>
    );
  }
}

export default ConactUsContainer;
