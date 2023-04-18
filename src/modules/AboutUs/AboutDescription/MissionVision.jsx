import React from "react";

import { useTranslation } from "react-i18next";

const AboutDescriptionSection1 = () => {
  const { t } = useTranslation();
  return (
    <div className="aboutus-part">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <h2 className="title-head-two">Our Mission</h2>
            <p className="desc-p">{t("missionPara")}</p>
          </div>
          <div className="col-xs-12 col-lg-6">
            <h2 className="title-head-two">Our Vision</h2>
            <p className="desc-p">{t("visionPara")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDescriptionSection1;
