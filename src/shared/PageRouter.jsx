import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../scenes/HomePage/HomePage";
import About from "../scenes/AboutPage/AboutPage";
import ContactUs from "../scenes/ContactUsPage/ContactUsPage";
import Gallery from "../scenes/GalleryPage/GalleryPage";
import Donation from "../scenes/DonationPage/DonationPage";
import RescueTeam from "../scenes/RescueTeamPage/RescueTeamPage";

const PageRouter = () => (
    <Switch>
        <Route exact path="/app/dashboard" component={Home} />
        <Route exact path="/app/about" component={About} />
        <Route exact path="/app/contact-us" component={ContactUs} />
        <Route exact path="/app/gallery" component={Gallery} />
        <Route exact path="/app/donate" component={Donation} />
        <Route exact path="/app/rescue" component={RescueTeam} />
    </Switch>
);

export default PageRouter;
