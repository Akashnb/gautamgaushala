import React from "react";
import { Provider } from "react-redux";

import "./assets/css/layout.css";
import "./assets/css/danveer.css";

import "./assets/styles/app.scss";
import reduxStore from "./store";
import Routes from "./Routes";

const App = () => (
  <Provider store={reduxStore}>
    <div className="App">
      <Routes />
    </div>
  </Provider>
);

export default App;
