import React from "react";

import img from "../../../assets/image/portfolio-masonry8.jpg";

const CowServices = () => (
  <div className="intro text-center">
    <div className="intro-group">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 intro-grp-detail">
            <img
              src="image/help-icon.png"
              className="mb-2 mb-lg-4"
              alt="help-icon"
            />
            <h2 className="sub-head-two inline">Help The Children</h2>
            <p className="intro-detail-p mb-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              voluptatem
            </p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 intro-grp-detail">
            <img
              src="image/volunteer-icon.png"
              className="mb-2 mb-lg-4"
              alt="volunteer-icon"
            />
            <h2 className="sub-head-two inline">Become a Volunteer</h2>
            <p className="intro-detail-p mb-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              voluptatem
            </p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 intro-grp-detail">
            <img
              src="image/education-icon.png"
              className="mb-2 mb-lg-4"
              alt="education-icon"
            />
            <h2 className="sub-head-two inline">Child Education</h2>
            <p className="intro-detail-p mb-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              voluptatem
            </p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 intro-grp-detail">
            <img
              src="image/donation-icon.png"
              className="mb-2 mb-lg-4"
              alt="donation-icon"
            />
            <h2 className="sub-head-two inline">Give Donation</h2>
            <p className="intro-detail-p mb-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              voluptatem
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CowServices;
