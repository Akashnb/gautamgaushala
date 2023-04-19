import React, { Suspense, lazy } from "react";

import AboutBanner from "../../assets/image/aboutus.jpg";
const PageHolding = lazy(() =>
  import("../../shared/components/PageHolding/PageHoldingContainer")
);
const AboutUs = lazy(() => import("../../modules/AboutUs/AboutUsContainer"));

const AboutPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <PageHolding img={AboutBanner} title="અમારા વિશે માહિતી" />
    <AboutUs />
  </Suspense>
);

export default AboutPage;
