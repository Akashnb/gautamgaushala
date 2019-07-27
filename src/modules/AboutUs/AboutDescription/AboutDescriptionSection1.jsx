import React from "react";

import AboutRightSection1 from "../../../assets/image/gaushalacow2.jpg";

const AboutDescriptionSection1 = () => (
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
            ગૌતમ ગૌશાળા ની શરૂઆત 1995મા એક દિવસ એક બીમાર ગાય જોઈ એની હાલાત જોઈ
            ને એમ થયું કે આ ગાય ને સારવાર ની સખત જરૂરીયાત છે એ જોયા પછી મનમા
            એવું થયું કે આપણા થી બનતી કોશિશ કરી આ ના માટે કઈ કરવું જોઈ એ મારા એક
            મિત્ર ને મેં વાત કરી એમણે મનેં કહ્યું મારા પાસે એક ડેલો ખાલી છે
            ત્યાં આ ગાય ને લઈ જઈ એ આ રીતે ત્યાં ગાય ને લઈ જઈ ને સારવાર કરી ત્યાં
            થી શુભ શરૂઆત થય.
          </p>
        </div>
        <div className="col-xs-12 col-lg-6 text-right img-box text-sm-center">
          <img
            src={AboutRightSection1}
            className="img-box"
            alt="about-detail-img"
          />
        </div>
      </div>
    </div>
  </div>
);

export default AboutDescriptionSection1;
