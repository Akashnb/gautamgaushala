import React from "react";

import ContactBanner from "../../assets/image/contact.jpg";
import RescueTeam from "../../modules/RescueTeam/RescueTeamContainer";
import PageHolding from "../../shared/components/PageHolding/PageHoldingContainer";

const RescueTeamPage = () => (
  <>
    <PageHolding img={ContactBanner} title="મદદ ટીમ" />
    <RescueTeam />
  </>
);

export default RescueTeamPage;
