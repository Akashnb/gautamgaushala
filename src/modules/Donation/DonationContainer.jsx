import React, { useEffect } from "react";

import Donation from "./Donation";

const DonationContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <Donation />;
};

export default DonationContainer;
