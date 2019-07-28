import React from "react";

import Button from "../../../shared/components/ButtonRender";
import cow from "../../../assets/image/little2cow.jpg";

const AboutSection = () => (
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
            જો તમને ખબર ન હોય તો,
            <br />
            અહીં<span className="about-head-span"> અમારા વિશે</span> થોડી માહિતી
            છે.
          </h2>
          <p className="section-detail">
            ગૌતમ ગૌશાળા ની શરૂઆત 1995મા એક દિવસ એક બીમાર ગાય જોઈ એની હાલાત જોઈ
            ને એમ થયું કે આ ગાય ને સારવાર ની સખત જરૂરીયાત છે એ જોયા પછી મનમા
            એવું થયું કે આપણા થી બનતી કોશિશ કરી આ ના માટે કઈ કરવું જોઈ એ મારા એક
            મિત્ર ને મેં વાત કરી એમણે મનેં કહ્યું મારા પાસે એક ડેલો ખાલી છે
            ત્યાં આ ગાય ને લઈ જઈ એ આ રીતે ત્યાં ગાય ને લઈ જઈ ને સારવાર કરી ત્યાં
            થી શુભ શરૂઆત થય.
          </p>
          <Button title="વધુ વાંચો" link="about" />
        </div>
      </div>
    </div>
  </div>
);

export default AboutSection;
