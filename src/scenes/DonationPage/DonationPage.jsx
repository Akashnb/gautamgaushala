import React from "react";

import AboutBanner from "../../assets/image/aboutus.jpg";
import Donation from "../../modules/Donation/DonationContainer";
import PageHolding from "../../shared/components/PageHolding/PageHoldingContainer";

const DonationPage = () => (
  <>
    <PageHolding img={AboutBanner} title="યોગદાન" />
    <Donation />
  </>
);

export default DonationPage;
