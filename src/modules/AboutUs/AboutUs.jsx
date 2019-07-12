import React from "react";

import PageHolding from "../../shared/components/PageHolding/PageHoldingContainer";
import AboutDescription from "./AboutDescription/AboutDescriptionContainer";
import AboutCommentForm from "./AboutCommentForm/AboutCommentFormContainer";

const AboutUs = () => (
  <React.Fragment>
    <PageHolding title="ABOUT US" />
    <AboutDescription />
    <AboutCommentForm />
  </React.Fragment>
);

export default AboutUs;
