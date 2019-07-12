import React from "react";

import Gallery from "./Gallery";
import PageHolding from "../../shared/components/PageHolding/PageHoldingContainer";

const GalleryContainer = () => {
  return (
    <React.Fragment>
      <PageHolding title="Gallery" />
      <Gallery />
    </React.Fragment>
  );
};

export default GalleryContainer;
