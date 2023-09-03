import React, { useEffect } from "react";

import Home from "./Home";

const HomeContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Home />;
};

export default HomeContainer;
