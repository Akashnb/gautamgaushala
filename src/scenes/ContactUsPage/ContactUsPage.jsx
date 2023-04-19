import React, { Suspense, lazy } from "react";

import ContactBanner from "../../assets/image/contact.jpg";
const PageHolding = lazy(() =>
  import("../../shared/components/PageHolding/PageHoldingContainer")
);
const ContactUs = lazy(() =>
  import("../../modules/ContactUs/ContactUsContainer")
);

const ContactUsPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <PageHolding img={ContactBanner} title="સંપર્ક કરો" />
    <ContactUs />
  </Suspense>
);

export default ContactUsPage;
