import React from "react";

import AboutBanner from "../../assets/image/aboutus.jpg";
import Gallery from "../../modules/Gallery/GalleryContainer";
import PageHolding from "../../shared/components/PageHolding/PageHoldingContainer";

import { useTranslation } from "react-i18next";

const GalleryPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHolding img={AboutBanner} title={t("Gallery")} />
      <Gallery />
    </>
  );
};

export default GalleryPage;
