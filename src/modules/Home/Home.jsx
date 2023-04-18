import React from "react";

import Banner from "./Banner/BannerContainer";
import WelcomeDanveer from "./Welcome-Danveer/WelcomeDanveerContainer";
import AboutSection from "./About-Section/AboutSectionContainer";
import CounterBar from "./CounterBar/CounterBarContainer";
import TotalCost from "./TotalCost/TotalCostContainer";

import "../../i18n";

const Home = () => (
  <React.Fragment>
    <Banner />
    <WelcomeDanveer />
    <AboutSection />
    <CounterBar />
    <TotalCost />
  </React.Fragment>
);

export default Home;
