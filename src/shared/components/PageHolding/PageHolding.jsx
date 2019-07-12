import React from "react";
import PropTypes from "react-dom";

import AboutBanner from "../../../assets/image/aboutus-banner.jpg";

const PageHolding = ({ img, title }) => (
  <div
    className="aboutus-banner text-left"
    style={{ backgroundImage: `url(${AboutBanner})` }}
  >
    <div className="banner-content">
      <div className="container pl-0">
        <h1 className="heading-three">{title}</h1>
      </div>
    </div>
  </div>
);

PageHolding.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string
};

PageHolding.defaultProps = {
  img: "",
  title: ""
};

export default PageHolding;
