import React, { Suspense, lazy } from "react";

import AboutBanner from "../../assets/image/aboutus.jpg";
const Donation = lazy(() => import("../../modules/Donation/DonationContainer"));
const PageHolding = lazy(() =>
  import("../../shared/components/PageHolding/PageHoldingContainer")
);

const DonationPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <PageHolding img={AboutBanner} title="યોગદાન" />
    <Donation />
  </Suspense>
);

export default DonationPage;
