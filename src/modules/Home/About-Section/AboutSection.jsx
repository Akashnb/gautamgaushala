import React from "react";

import routes from "../../../Routes";
import Button from "../../../shared/components/ButtonRender";
import cow from "../../../assets/image/little2cow.jpg";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <div className="about-part">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12 col-lg-6 order-md-2 order-lg-1">
            <div className="img-cont">
              <img src={cow} className="img-fluid" alt="gauttamgaushala-cow" />
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12 col-lg-6 about-detail order-md-1 order-lg-1">
            <h2 className="section-title">
              {t("IfYouDontKnow")},
              <br />
              {t("Here")}
              <span className="about-head-span"> અમારા વિશે</span> થોડી માહિતી
              છે.
            </h2>
            <p className="section-detail">{t("aboutUsPara1")}</p>
            <Button title={t("readMore")} link={routes.ABOUT_US} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
