import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import routes from "./";
import MainTemplate from "../shared/templates/MainTemplate/MainTemplateContainer";

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Redirect to={routes.DASHBOARD} />}
        />
        <Route path="/app" component={MainTemplate} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
