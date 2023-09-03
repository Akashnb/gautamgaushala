import React from "react";
import { Analytics } from "@vercel/analytics/react";

import Routes from "./Routes/Routes";

import "./assets/css/layout.css";
import "./assets/css/danveer.css";
import "./assets/styles/app.scss";

const App = () => (
  <div className="App">
    <Routes />
    <Analytics />
  </div>
);

export default App;
