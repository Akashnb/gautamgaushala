import React, { useEffect } from "react";

import ContactUs from "./ContactUs";
import GoogleMap from "./GoogleMap";

const ContactUsContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <ContactUs />
      <GoogleMap />
    </React.Fragment>
  );
};

export default ContactUsContainer;
