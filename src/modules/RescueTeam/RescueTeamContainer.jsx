import React, { useEffect } from "react";

import RescueTeam from "./RescueTeam";

const RescueTeamContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return <RescueTeam />;
}

export default RescueTeamContainer;
