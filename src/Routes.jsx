import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import NotFound from "./scenes/NotFound";
import Home from "./scenes/HomePage/HomePage";
import About from "./scenes/AboutPage/AboutPage";
import ContactUs from "./scenes/ContactUsPage/ContactUsPage";
import Gallery from "./scenes/GalleryPage/GalleryPage";
import Donation from "./scenes/DonationPage/DonationPage";
import Cowservices from "./shared/components/CowServices/CowServicesContainer";
import RescueTeam from "./scenes/RescueTeamPage/RescueTeamPage";

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        {/* <Route path="*" component={NotFound} /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/demo" component={Cowservices} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/donate" component={Donation} />
        <Route exact path="/rescue" component={RescueTeam} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
