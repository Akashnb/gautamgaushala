import React from "react";

import ContactBanner from "../../assets/image/contact.jpg";
import RescueTeam from "../../modules/RescueTeam/RescueTeamContainer";
import ManinTemplate from "../../shared/templates/MainTemplate/MainTemplateContainer";
import PageHolding from "../../shared/components/PageHolding/PageHoldingContainer";

const RescueTeamPage = () => (
  <ManinTemplate>
    <PageHolding img={ContactBanner} title="મદદ ટીમ" />
    <RescueTeam />
  </ManinTemplate>
);

export default RescueTeamPage;
