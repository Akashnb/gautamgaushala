import React from "react";

import ContactUs from "./ContactUs";
import GoogleMap from "./GoogleMap";
import PageHolding from "../../shared/components/PageHolding/PageHoldingContainer";

const ConactUsContainer = () => {
  return (
    <React.Fragment>
      <PageHolding title="CONTACT US" />
      <ContactUs />
      <GoogleMap />
    </React.Fragment>
  );
};

export default ConactUsContainer;
