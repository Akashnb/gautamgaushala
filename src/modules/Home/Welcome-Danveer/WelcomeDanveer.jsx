import React from "react";

import HelpIcon from "../../../assets/image/help-icon.png";
import VolunteerIcon from "../../../assets/image/volunteer-icon.png";
import EducationIcon from "../../../assets/image/education-icon.png";
import DonationIcon from "../../../assets/image/donation-icon.png";

const WelcomeDanveer = () => (
  <div className="intro text-center">
    <div className="container">
      <div className="row">
        <h1 className="head-one inline">દાતા આપનું સ્વાગત છે</h1>
        <span className="intro-span inline">
          ગોશાળાઓ ભારતની ગાયો માટે રક્ષણાત્મક આશ્રયસ્થાનો છે.ગોશાળાઓ ગાયની સારી
          સારવાર માટે ધ્યાન કેન્દ્રિત કરે છે
        </span>
        <p className="detail-p">
          હિન્દુ ધર્મમાં ગાયો માટે ધાર્મિક મહત્વ છે.ગાયો એ આપણો સાંસ્કૃતિક વારસો
          છે તેથી અમે ગાયોના રક્ષણ માટે દરેક શક્ય પ્રયાસો કરી રહ્યા છીએ. જો કે,
          આ ઉમદા હેતુ સાથે ચાલુ રાખવા માટે અમને તમારા યોગદાન જરૂર છે. તમે કરેલા
          દરેક દાનનો ઉપયોગ ગાયોને રહેવા માટેના વાતાવરણને પ્રદાન કરવા માટે છે. આ
          તમારો વારો છે કે તમે પરિવર્તન થશો, ફાળો આપો અને આ મિશનને ચાલુ રાખવામાં
          અમારી સહાય કરો.
        </p>
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
              <h2 className="sub-head-two inline">એક દિવસ ના દાતા</h2>
              <p className="intro-detail-p mb-0">
                જન્મ દિવસ, લગન ની સાલ ગિરા, પુણ્ય તિથિ પર યોગદાન આપી ને યાદગાર
                બનાવો.
              </p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 intro-grp-detail">
              <img
                src={VolunteerIcon}
                className="mb-2 mb-lg-4"
                alt="gauttamgaushala-volunteer-icon"
              />
              <h2 className="sub-head-two inline">માસિક દાતા</h2>
              <p className="intro-detail-p mb-0">
                અગિયારસ, પુનમ, અમાસ જેવી આપે સુચવેલ તારીખ તિથિ પર યોગદાન કરો.
              </p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 intro-grp-detail">
              <img
                src={DonationIcon}
                className="mb-2 mb-lg-4"
                alt="gauttamgaushala-education-icon"
              />
              <h2 className="sub-head-two inline">વાર્ષિક દાતા</h2>
              <p className="intro-detail-p mb-0">
                આપની આવક માથી અમુક અંશ ગાયો ની મદદ માટે દાન કરો.
              </p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 intro-grp-detail">
              <img
                src={EducationIcon}
                className="mb-2 mb-lg-4"
                alt="gauttamgaushala-donation-icon"
              />
              <h2 className="sub-head-two inline">સ્વયંસેવક બનો</h2>
              <p className="intro-detail-p mb-0">
                એક સ્વયંસેવક તે છે જે કોઈ ચોક્કસ કાર્ય કરવાની ફરજ પાડ્યા વિના
                તેને કરવાનું ધ્યેય કરે છે.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WelcomeDanveer;
