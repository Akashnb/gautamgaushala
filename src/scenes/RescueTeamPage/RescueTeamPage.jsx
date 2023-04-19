import React, { Suspense, lazy } from "react";

import ContactBanner from "../../assets/image/contact.jpg";
const PageHolding = lazy(() =>
  import("../../shared/components/PageHolding/PageHoldingContainer")
);
const RescueTeam = lazy(() =>
  import("../../modules/RescueTeam/RescueTeamContainer")
);

const RescueTeamPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <PageHolding img={ContactBanner} title="મદદ ટીમ" />
    <RescueTeam />
  </Suspense>
);

export default RescueTeamPage;
