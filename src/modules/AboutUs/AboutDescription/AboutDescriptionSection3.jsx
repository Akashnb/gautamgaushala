import React from "react";

import GautamGaushala2 from "../../../assets/image/gautamgaushala2.jpg";
import { useTranslation } from "react-i18next";

const AboutDescriptionSection1 = () => {
  const { t } = useTranslation();

  return (
    <div className="aboutus-part paddingub">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <p className="desc-p">{t("aboutUsPara3")}</p>
          </div>
          <div className="col-xs-12 col-lg-6 text-right img-box text-sm-center">
            <img
              src={GautamGaushala2}
              className="img-box"
              alt="gauttamgaushala-section3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDescriptionSection1;
