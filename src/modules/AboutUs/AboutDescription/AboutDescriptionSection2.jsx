import React from "react";

import GautamGaushala1 from "../../../assets/image/gautamgaushala1.jpg";

import { useTranslation } from "react-i18next";

const AboutDescriptionSection2 = () => {
  const { t } = useTranslation();
  return (
    <div className="about-service aboutus-part paddingub">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-6 text-right img-box text-sm-center">
            <img
              src={GautamGaushala1}
              className="img-box"
              alt="gauttamgaushala-section2"
            />
          </div>
          <div className="col-xs-12 col-lg-6">
            <p className="desc-p">{t("aboutUsPara2")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDescriptionSection2;
