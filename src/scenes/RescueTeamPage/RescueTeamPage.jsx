import React from "react";

import RescueTeam from "../../modules/RescueTeam/RescueTeamContainer";
import ManinTemplate from "../../shared/templates/MainTemplate/MainTemplateContainer";
import PageHolding from "../../shared/components/PageHolding/PageHoldingContainer";

const RescueTeamPage = () => (
  <ManinTemplate>
    <PageHolding title="મદદ ટીમ" />
    <RescueTeam />
  </ManinTemplate>
);

export default RescueTeamPage;
