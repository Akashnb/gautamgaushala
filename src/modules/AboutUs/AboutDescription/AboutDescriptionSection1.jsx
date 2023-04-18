import React from "react";

import AboutRightSection1 from "../../../assets/image/gaushalacow2.jpg";
import { useTranslation } from 'react-i18next';

const AboutDescriptionSection1 = () => {
  const { t } = useTranslation();

  return (
  <div className="aboutus-part paddingub">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-lg-6">
          <h2 className="title-head-two">
            જો તમને ખબર ન હોય તો,
            <br />
            અહીં<span> અમારા વિશે</span> થોડી માહિતી છે.
          </h2>
          <p className="desc-p">
            {t("aboutUsPara1")}
          </p>
        </div>
        <div className="col-xs-12 col-lg-6 text-right img-box text-sm-center">
          <img
            src={AboutRightSection1}
            className="img-box"
            alt="gauttamgaushala-section1"
          />
        </div>
      </div>
    </div>
  </div>
)};

export default AboutDescriptionSection1;
