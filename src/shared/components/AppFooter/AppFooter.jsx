import React from "react";
import { Link } from "react-router-dom";

import FooterCowImg from "../../../assets/image/cowfooter.png";
import Logo from "../../../assets/image/logo-new.png";
import Location from "../../../assets/image/location.png";
import Phone from "../../../assets/image/phone.png";
import Facebook from "../../../assets/image/facebook.png";
import Instagram from "../../../assets/image/instagram.png";

const Footer = () => (
  <React.Fragment>
    <img
      src={FooterCowImg}
      alt="gauttamgaushala-cowbanner"
      style={{ width: "100%" }}
    />
    <footer className="footer-part">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <Link to="/">
              <img
                className="footer-logo"
                src={Logo}
                alt="gauttamgaushala-logo"
              />
            </Link>
            <ul className="footer-detail pl-0">
              <li>
                <img src={Location} alt="gauttamgaushala-locationicon" />
                <span className="company-detail">
                  ગૌતમ ગૌશાળા બાંટવા, ત્રીકોણ બાગ માણાવદર રોડ,
                  <br />
                  માણાવદર-362620, જિલ્લો જૂનાગઢ ગુજરાત
                </span>
              </li>
              <li>
                <img src={Phone} alt="gauttamgaushala-phone" />
                <a href="tel:+911234567890" className="company-detail">
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
                <Link to="/about">Our Mission</Link>
              </li>
              <li>
                <Link to="/about">Our Vision</Link>
              </li>
              <li>
                <Link to="/rescue">Rescue Team</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 footer-links">
            <h3 className="heading-five">Get in Touch</h3>
            <iframe
              title="gauttamgaushala-footermap"
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
                  rel="noopener noreferrer"
                >
                  Akash Bambhaniya
                </a>
              </p>
            </div>
            <div className="social-icon ml-auto mr-3 d-flex align-items-center">
              <a
                href="https://www.facebook.com/gautamgaushala/"
                target="_blank"
                title="Follow on Facebook"
                rel="noopener noreferrer"
              >
                <img src={Facebook} alt="facebook" className="mr-1" />
              </a>
              <a
                href="https://www.instagram.com/gautamgausha/"
                target="_blank"
                title="Follow on Facebook"
                rel="noopener noreferrer"
              >
                <img src={Instagram} alt="instagram" className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </React.Fragment>
);

export default Footer;
