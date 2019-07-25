import React from "react";

import Button from "../../../shared/components/ButtonRender";
import Slider1 from "../../../assets/image/site/slider/slider1.png";
import Slider2 from "../../../assets/image/site/slider/slider2.png";
import Slider3 from "../../../assets/image/site/slider/slider3.png";
import MobileSlider1 from "../../../assets/image/site/slider/mobileslider1.png";
import MobileSlider2 from "../../../assets/image/site/slider/mobileslider2.png";
import MobileSlider3 from "../../../assets/image/site/slider/mobileslider3.png";
const Banner = () => (
  <div
    id="carouselExampleIndicators"
    className="carousel slide"
    data-ride="carousel"
  >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          className="d-block w-100 web-slider"
          src={Slider2}
          alt="First slide"
        />
        <img
          className="d-block w-100 mobile-slider"
          src={MobileSlider2}
          alt="First slide"
        />
        <div className="banner-detail text-center">
          <h3 className="banner-title">
            <span className="text-overlay">ગોમાતા રાષ્ટ્રમાતા</span>
          </h3>
          <span className="heading-span inline">
            <span className="text-overlay">
              અમારા વારસોને સુરક્ષિત કરવામાં સહાય કરો
            </span>
          </span>
          <Button title="Donate Now" link="donate" />
        </div>
      </div>
      <div className="carousel-item">
        <img
          className="d-block w-100 web-slider"
          src={Slider1}
          alt="Second slide"
        />
        <img
          className="d-block w-100 mobile-slider"
          src={MobileSlider1}
          alt="Second slide"
        />
        <div className="banner-detail text-center">
          <h3 className="banner-title">
            <span className="text-overlay">ગો-રક્ષા પરમ ધર્મ</span>
          </h3>
          <span className="heading-span inline">
            <span className="text-overlay">
              અમારા વારસોને સુરક્ષિત કરવામાં સહાય કરો
            </span>
          </span>
          <Button title="Donate Now" link="donate" />
        </div>
      </div>
      <div className="carousel-item">
        <img
          className="d-block w-100 web-slider"
          src={Slider3}
          alt="Third slide"
        />
        <img
          className="d-block w-100 mobile-slider"
          src={MobileSlider3}
          alt="Third slide"
        />
        <div className="banner-detail text-center">
          <h3 className="banner-title">
            <span className="text-overlay">સ્વર્ગનો ખુલ્લો દરવાજો</span>
          </h3>
          <span className="heading-span inline">
            <span className="text-overlay">
              અમારા વારસોને સુરક્ષિત કરવામાં સહાય કરો
            </span>
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
