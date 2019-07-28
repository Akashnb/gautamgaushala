import React from "react";

import GautamGaushala2 from "../../../assets/image/gautamgaushala2.jpg";

const AboutDescriptionSection1 = () => (
  <div className="aboutus-part paddingub">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-lg-6">
          <p className="desc-p">
            આમ લોકો નૌ સતત સહકાર મળતો રહ્યો અને કામગીરી પણ વધતી અને બીમાર ગાયો
            ને રાખવા મા પ્રોબ્લેમ આવવાલાગી જગ્યા ટૂંકી પડવા લાગી એને પોહંચી વળવા
            નગર પાલિકા ને વાત કરી કે તમે કઈ જગ્યા નૌ સહકાર આપો તો અમે કામગીરી
            કરી શકીએ નગર પાલિકા એ એક પડતર જગ્યા હતી તે અમને બતાવી એ જગ્યા રોડ થી
            ત્રીસ ફૂટ ઊંડો ખાડો હતૉ એ જગ્યા પર ગૌશાળા ઊભી કરવા નિર્ણય ક્ર્યો.
          </p>
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

export default AboutDescriptionSection1;
