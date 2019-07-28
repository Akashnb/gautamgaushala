import React, { Fragment } from "react";

import AboutDescriptionSection1 from "./AboutDescriptionSection1";
import AboutDescriptionSection2 from "./AboutDescriptionSection2";
import AboutDescriptionSection3 from "./AboutDescriptionSection3";
import MissionVision from "./MissionVision";

const AboutDescriptionContainer = () => (
  <Fragment>
    <AboutDescriptionSection1 />
    <AboutDescriptionSection2 />
    <AboutDescriptionSection3 />
    <MissionVision />
  </Fragment>
);

export default AboutDescriptionContainer;
