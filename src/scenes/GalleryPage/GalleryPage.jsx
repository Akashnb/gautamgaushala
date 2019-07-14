import React from "react";

import Gallery from "../../modules/Gallery/GalleryContainer";
import ManinTemplate from "../../shared/templates/MainTemplate/MainTemplateContainer";
import PageHolding from "../../shared/components/PageHolding/PageHoldingContainer";

const GalleryPage = () => (
  <ManinTemplate>
    <PageHolding title="ગેલેરી" />
    <Gallery />
  </ManinTemplate>
);

export default GalleryPage;
