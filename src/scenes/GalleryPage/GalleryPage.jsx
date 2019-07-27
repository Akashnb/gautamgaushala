import React from "react";

import AboutBanner from "../../assets/image/aboutus.jpg";
import Gallery from "../../modules/Gallery/GalleryContainer";
import ManinTemplate from "../../shared/templates/MainTemplate/MainTemplateContainer";
import PageHolding from "../../shared/components/PageHolding/PageHoldingContainer";

const GalleryPage = () => (
  <ManinTemplate>
    <PageHolding img={AboutBanner} title="ગેલેરી" />
    <Gallery />
  </ManinTemplate>
);

export default GalleryPage;
