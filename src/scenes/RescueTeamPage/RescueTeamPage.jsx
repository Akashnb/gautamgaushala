import React from "react";

import ContactBanner from "../../assets/image/contact.jpg";
import RescueTeam from "../../modules/RescueTeam/RescueTeamContainer";
import PageHolding from "../../shared/components/PageHolding/PageHoldingContainer";
import { useTranslation } from 'react-i18next';

const RescueTeamPage = () => {
  const { t } = useTranslation();

  return (
  <>
    <PageHolding img={ContactBanner} title={t("helpTeam")} />
    <RescueTeam />
  </>
)
  };

export default RescueTeamPage;
