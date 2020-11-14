import React from "react";

import AboutBanner from "../../assets/image/aboutus.jpg";
import AboutUs from "../../modules/AboutUs/AboutUsContainer";
import PageHolding from "../../shared/components/PageHolding/PageHoldingContainer";

const AboutPage = () => (
  <>
    <PageHolding img={AboutBanner} title="અમારા વિશે માહિતી" />
    <AboutUs />
  </>
);

export default AboutPage;
