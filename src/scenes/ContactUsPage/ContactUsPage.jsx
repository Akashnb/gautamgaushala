import React from "react";

import ContactBanner from "../../assets/image/contact.jpg";
import ContactUs from "../../modules/ContactUs/ContactUsContainer";
import PageHolding from "../../shared/components/PageHolding/PageHoldingContainer";

import { useTranslation } from 'react-i18next';

const ContactUsPage = () => {
  const { t } = useTranslation();

  return (
  <>
    <PageHolding img={ContactBanner} title={t("contactUs")} />
    <ContactUs />
  </>
)
  };

export default ContactUsPage;
