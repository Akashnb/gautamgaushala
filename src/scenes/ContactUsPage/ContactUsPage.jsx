import React from "react";

import ContactBanner from "../../assets/image/contact.jpg";
import ContactUs from "../../modules/ContactUs/ContactUsContainer";
import PageHolding from "../../shared/components/PageHolding/PageHoldingContainer";

const ContactUsPage = () => (
  <>
    <PageHolding img={ContactBanner} title="સંપર્ક કરો" />
    <ContactUs />
  </>
);

export default ContactUsPage;
