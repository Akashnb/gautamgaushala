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
          Bring to the table win-win survival strategies to ensure proactive
          domination.
        </span>
        <p className="detail-p">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem.
        </p>
      </div>
      <div className="intro-group">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 intro-grp-detail">
              <img src={HelpIcon} className="mb-2 mb-lg-4" alt="help-icon" />
              <h2 className="sub-head-two inline">એક દિવસ ના દાતા</h2>
              <p className="intro-detail-p mb-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                voluptatem
              </p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 intro-grp-detail">
              <img
                src={VolunteerIcon}
                className="mb-2 mb-lg-4"
                alt="volunteer-icon"
              />
              <h2 className="sub-head-two inline">માસિક દાતા</h2>
              <p className="intro-detail-p mb-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                voluptatem
              </p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 intro-grp-detail">
              <img
                src={EducationIcon}
                className="mb-2 mb-lg-4"
                alt="education-icon"
              />
              <h2 className="sub-head-two inline">વાર્ષિક દાતા</h2>
              <p className="intro-detail-p mb-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                voluptatem
              </p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 intro-grp-detail">
              <img
                src={DonationIcon}
                className="mb-2 mb-lg-4"
                alt="donation-icon"
              />
              <h2 className="sub-head-two inline">સ્વયંસેવક બનો</h2>
              <p className="intro-detail-p mb-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                voluptatem
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WelcomeDanveer;
