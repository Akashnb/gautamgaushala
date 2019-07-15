import React from "react";

import Donation from "./Donation";

class DonationContainer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <Donation />;
  }
}

export default DonationContainer;
