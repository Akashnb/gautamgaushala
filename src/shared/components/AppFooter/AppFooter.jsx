import React from "react";
import { Link } from "react-router-dom";

import FooterCowImg from "../../../assets/image/cowfooter.png";
import Logo from "../../../assets/image/logo-new.png";
import Location from "../../../assets/image/location.png";
import Phone from "../../../assets/image/phone.png";

const Footer = () => (
  <React.Fragment>
    <img src={FooterCowImg} alt style={{ width: "100%" }} />
    <footer className="footer-part">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <Link to="/">
              <img className="footer-logo" src={Logo} alt="footer-logo" />
            </Link>
            <ul className="footer-detail pl-0">
              <li>
                <img src={Location} className alt="address" />
                <span className="company-detail">
                  ગૌતમ ગૌશાળા બાંટવા, ત્રીકોણ બાગ માણાવદર રોડ,
                  <br />
                  માણાવદર-362620, જિલ્લો જૂનાગઢ ગુજરાત
                </span>
              </li>
              <li>
                <img src={Phone} class="" alt="phone" />
                <a href="tel:+911234567890" class="company-detail">
                  +91 90 333 95 800
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-6 col-xs-12 footer-links">
            <h3 className="heading-five">Quick Links</h3>
            <ul className="footer-menu p-0">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/donate">Donate</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-6 col-xs-12 footer-links">
            <h3 className="heading-five">About Us</h3>
            <ul className="footer-menu p-0">
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/">Our Mission</Link>
              </li>
              <li>
                <Link to="/">Our Vision</Link>
              </li>
              <li>
                <Link to="/rescue">Rescue Team</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 footer-links">
            <h3 className="heading-five">Get in Touch</h3>
            <iframe
              src="https://maps.google.com/maps?q=gausala%20of%20bantwa&t=k&z=17&ie=UTF8&iwloc=&output=embed"
              height={200}
              style={{ border: 0, width: "100%" }}
              allowFullScreen
            />
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="copyright">
              <p className="pl-3">
                Designed by{" "}
                <a
                  href="https://www.linkedin.com/in/akash-bambhaniya-15b877137/"
                  target="_blank"
                >
                  Akash Bambhaniya
                </a>
              </p>
            </div>
            <div className="social-icon ml-auto mr-3">
              <a
                href="https://www.facebook.com/gautamgaushala/"
                target="_blank"
                title="Follow on Facebook"
              >
                <i className="fa fa-facebook" />
              </a>
              <a href="#" title="Follow on twitter">
                <i className="fa fa-twitter" />
              </a>
              <a href="#" title="Follow on google-plus">
                <i className="fa fa-linkedin" />
              </a>
              <a href="#" title="Follow on instagram">
                <i className="fa fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </React.Fragment>
);

export default Footer;
