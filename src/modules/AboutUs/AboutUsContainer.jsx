import React, { useEffect } from "react";
import AboutUs from "./AboutUs";

const AboutUsContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return <AboutUs />;
}

export default AboutUsContainer;
