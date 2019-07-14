import React from "react";

import RescueTeam from "../../modules/RescueTeam/RescueTeamContainer";
import ManinTemplate from "../../shared/templates/MainTemplate/MainTemplateContainer";
import PageHolding from "../../shared/components/PageHolding/PageHoldingContainer";

const RescueTeamPage = () => (
  <ManinTemplate>
    <PageHolding title="Rescue Team" />
    <RescueTeam />
  </ManinTemplate>
);

export default RescueTeamPage;
