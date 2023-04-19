import React, { Suspense, lazy } from "react";

import AboutBanner from "../../assets/image/aboutus.jpg";
const Gallery = lazy(() => import("../../modules/Gallery/GalleryContainer"));
const PageHolding = lazy(() =>
  import("../../shared/components/PageHolding/PageHoldingContainer")
);

const GalleryPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <PageHolding img={AboutBanner} title="ગેલેરી" />
    <Gallery />
  </Suspense>
);

export default GalleryPage;
