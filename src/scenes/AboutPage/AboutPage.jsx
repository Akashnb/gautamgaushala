import React from "react";

import AboutUs from "../../modules/AboutUs/AboutUsContainer";
import ManinTemplate from "../../shared/templates/MainTemplate/MainTemplateContainer";
import PageHolding from "../../shared/components/PageHolding/PageHoldingContainer";

const AboutPage = () => (
  <ManinTemplate>
    <PageHolding title="અમારા વિશે માહિતી" />
    <AboutUs />
  </ManinTemplate>
);

export default AboutPage;
