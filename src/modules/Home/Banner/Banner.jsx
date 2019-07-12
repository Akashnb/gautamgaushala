import React from "react";

import Button from "../../../shared/components/button";
import MainBanner from "../../../assets/image/main-banner.jpg";
import Slider1 from "../../../assets/image/site/slider1.jpg";
import Slider2 from "../../../assets/image/site/slider2.jpg";

const Banner = () => (
  <div
    id="carouselExampleIndicators"
    className="carousel slide"
    data-ride="carousel"
  >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src={MainBanner} alt="First slide" />
        <div className="banner-detail text-center">
          <h3 className="banner-title">Save The Cow</h3>
          <span className="heading-span inline">
            Cow AND POOR PEOPLE ARE AT HIGH RISK OF SEVERE MALNUTRITION &amp; NO
            EDUCATION
          </span>
          <Button title="Donate Now" link="donate" />
        </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={Slider1} alt="Second slide" />
        <div className="banner-detail text-center">
          <h3 className="banner-title">Save The Cow</h3>
          <span className="heading-span inline">
            Cow AND POOR PEOPLE ARE AT HIGH RISK OF SEVERE MALNUTRITION &amp; NO
            EDUCATION
          </span>
          <Button title="Donate Now" link="donate" />
        </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={Slider2} alt="Third slide" />
        <div className="banner-detail text-center">
          <h3 className="banner-title">Save The Cow</h3>
          <span className="heading-span inline">
            Cow AND POOR PEOPLE ARE AT HIGH RISK OF SEVERE MALNUTRITION &amp; NO
            EDUCATION
          </span>
          <Button title="Donate Now" link="donate" />
        </div>
      </div>
    </div>
    <a
      className="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
);

export default Banner;
