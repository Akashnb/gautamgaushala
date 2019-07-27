import React from "react";

import AboutBanner from "../../assets/image/aboutus.jpg";
import Donation from "../../modules/Donation/DonationContainer";
import ManinTemplate from "../../shared/templates/MainTemplate/MainTemplateContainer";
import PageHolding from "../../shared/components/PageHolding/PageHoldingContainer";

const DonationPage = () => (
  <ManinTemplate>
    <PageHolding img={AboutBanner} title="યોગદાન" />
    <Donation />
  </ManinTemplate>
);

export default DonationPage;
