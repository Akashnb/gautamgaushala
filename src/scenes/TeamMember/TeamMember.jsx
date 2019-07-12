import React from "react";

import TeamMembers from "../../modules/TeamMembers/TeamMembersContainer";
import ManinTemplate from "../../shared/templates/MainTemplate/MainTemplateContainer";
import PageHolding from "../../shared/components/PageHolding/PageHoldingContainer";

const TeamMember = () => (
  <ManinTemplate>
    <PageHolding title="Our Team" />
    <TeamMembers />
  </ManinTemplate>
);

export default TeamMember;
