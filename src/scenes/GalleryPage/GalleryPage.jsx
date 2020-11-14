import React from "react";

import AboutBanner from "../../assets/image/aboutus.jpg";
import Gallery from "../../modules/Gallery/GalleryContainer";
import PageHolding from "../../shared/components/PageHolding/PageHoldingContainer";

const GalleryPage = () => (
  <>
    <PageHolding img={AboutBanner} title="ગેલેરી" />
    <Gallery />
  </>
);

export default GalleryPage;
