import React from "react";

import AboutBanner from "../../assets/image/aboutus.jpg";
import AboutUs from "../../modules/AboutUs/AboutUsContainer";
import PageHolding from "../../shared/components/PageHolding/PageHoldingContainer";

import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageHolding img={AboutBanner} title={t("informationAboutUs")} />
      <AboutUs />
    </>
  );
};

export default AboutPage;
