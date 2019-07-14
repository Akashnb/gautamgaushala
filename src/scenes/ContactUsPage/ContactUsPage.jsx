import React from "react";

import ContactUs from "../../modules/ContactUs/ContactUsContainer";
import ManinTemplate from "../../shared/templates/MainTemplate/MainTemplateContainer";
import PageHolding from "../../shared/components/PageHolding/PageHoldingContainer";

const ContactUsPage = () => (
  <ManinTemplate>
    <PageHolding title="સંપર્ક કરો" />
    <ContactUs />
  </ManinTemplate>
);

export default ContactUsPage;
