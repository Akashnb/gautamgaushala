import React from "react";

import HelpIcon from "../../../assets/image/help-icon.png";
import VolunteerIcon from "../../../assets/image/volunteer-icon.png";
import EducationIcon from "../../../assets/image/education-icon.png";
import DonationIcon from "../../../assets/image/donation-icon.png";

import { useTranslation } from "react-i18next";

const WelcomeDanveer = () => {
  const { t } = useTranslation();

  return (
    <div className="intro text-center">
      <div className="container">
        <div className="row">
          <h1 className="head-one inline">{t("donorWelcome")}</h1>
          <span className="intro-span inline">{t("goshalaDefinition")}</span>
          <p className="detail-p">{t("importanceOfCowsInIndianCulture")}</p>
        </div>
        <div className="intro-group">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 intro-grp-detail">
                <img
                  src={HelpIcon}
                  className="mb-2 mb-lg-4"
                  alt="gauttamgaushala-help-icon"
                />
                <h2 className="sub-head-two inline">{t("donorOfADay")}</h2>
                <p className="intro-detail-p mb-0">{t("donorOfADayPara")}</p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 intro-grp-detail">
                <img
                  src={VolunteerIcon}
                  className="mb-2 mb-lg-4"
                  alt="gauttamgaushala-volunteer-icon"
                />
                <h2 className="sub-head-two inline">{t("monthlyDonor")}</h2>
                <p className="intro-detail-p mb-0">{t("monthlyDonorPara")}</p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 intro-grp-detail">
                <img
                  src={DonationIcon}
                  className="mb-2 mb-lg-4"
                  alt="gauttamgaushala-education-icon"
                />
                <h2 className="sub-head-two inline">{t("annualDonor")}</h2>
                <p className="intro-detail-p mb-0">{t("annualDonorPara")}</p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 intro-grp-detail">
                <img
                  src={EducationIcon}
                  className="mb-2 mb-lg-4"
                  alt="gauttamgaushala-donation-icon"
                />
                <h2 className="sub-head-two inline">{t("becomeVolunteer")}</h2>
                <p className="intro-detail-p mb-0">
                  {t("becomeVolunteerPara")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeDanveer;
