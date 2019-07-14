import React from "react";

import Donation from "../../modules/Donation/DonationContainer";
import ManinTemplate from "../../shared/templates/MainTemplate/MainTemplateContainer";
import PageHolding from "../../shared/components/PageHolding/PageHoldingContainer";

const DonationPage = () => (
  <ManinTemplate>
    <PageHolding title="યોગદાન" />
    <Donation />
  </ManinTemplate>
);

export default DonationPage;
