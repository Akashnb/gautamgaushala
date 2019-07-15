import React from "react";

import RescueTeam from "./RescueTeam";

class RescueTeamContainer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <RescueTeam />;
  }
}

export default RescueTeamContainer;
