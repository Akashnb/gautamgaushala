import React from "react";

import AboutBanner from "../../assets/image/site/aboutus.jpg";
import AboutUs from "../../modules/AboutUs/AboutUsContainer";
import ManinTemplate from "../../shared/templates/MainTemplate/MainTemplateContainer";
import PageHolding from "../../shared/components/PageHolding/PageHoldingContainer";

const AboutPage = () => (
  <ManinTemplate>
    <PageHolding img={AboutBanner} title="અમારા વિશે માહિતી" />
    <AboutUs />
  </ManinTemplate>
);

export default AboutPage;
