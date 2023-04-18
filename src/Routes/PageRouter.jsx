import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../scenes/HomePage/HomePage";
import About from "../scenes/AboutPage/AboutPage";
import ContactUs from "../scenes/ContactUsPage/ContactUsPage";
import Gallery from "../scenes/GalleryPage/GalleryPage";
import Donation from "../scenes/DonationPage/DonationPage";
import RescueTeam from "../scenes/RescueTeamPage/RescueTeamPage";
import routes from "./";

const PageRouter = () => (
  <Switch>
    <Route exact path={routes.DASHBOARD} component={Home} />
    <Route exact path={routes.ABOUT_US} component={About} />
    <Route exact path={routes.CONTACT_US} component={ContactUs} />
    <Route exact path={routes.GALLERY} component={Gallery} />
    <Route exact path={routes.DONATE} component={Donation} />
    <Route exact path={routes.RESCUE_TEAM} component={RescueTeam} />
  </Switch>
);

export default PageRouter;
