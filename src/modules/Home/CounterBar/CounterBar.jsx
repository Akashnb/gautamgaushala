import React from "react";

import CowSvg from "../../../assets/image/site/svg/cow.svg";
import SuccessRescued from "../../../assets/image/site/svg/success-resue.svg";
import VolunteerSvg from "../../../assets/image/site/svg/volunteer.svg";
import YearsSvg from "../../../assets/image/site/svg/years.svg";

const CounterBar = () => (
  <div className="service-part">
    <div className="container">
      <div className="row" id="counter">
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 service-info">
          <div className="img-box float-sm-left mr-2">
            <img src={CowSvg} alt="donation-icon" />
          </div>
          <div className="service-detail float-sm-left mr-3">
            <h5 className="head-five">Cow</h5>
            <span className="service-span">90</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 service-info">
          <div className="img-box float-sm-left mr-2">
            <img src={YearsSvg} alt="volunteer-icon" />
          </div>
          <div className="service-detail float-sm-left">
            <h5 className="head-five">Years</h5>
            <span className="service-span">22</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 service-info">
          <div className="img-box float-sm-left mr-2">
            <img src={SuccessRescued} alt="success-icon" />
          </div>
          <div className="service-detail float-sm-left">
            <h5 className="head-five">Success Cow resued</h5>
            <span className="service-span">400 +</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 service-info">
          <div className="img-box float-sm-left mr-2">
            <img src={VolunteerSvg} alt="globalization-icon" />
          </div>
          <div className="service-detail float-sm-left">
            <h5 className="head-five">Volunteer</h5>
            <span className="service-span">25</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CounterBar;
