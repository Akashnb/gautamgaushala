import React from "react";
import { Link } from "react-router-dom";

import Marker from "../../assets/image/marker-icon.png";
import Mail from "../../assets/image/mail-icon.png";
import Phone from "../../assets/image/phone-icon.png";

const ConactUs = () => (
  <div className="contact-part paddingub">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-4 col-lg-3">
          <div className="contact-detail">
            <div className="data">
              <img src={Marker} alt="marker" />
              <div className="contact-info">
                <h2 className="contact-head-two">સરનામું</h2>
                <p className="contact-p">
                  ગૌતમ ગૌશાળા બાંટવા, ત્રીકોણ બાગ માણાવદર રોડ, માણાવદર-362620,
                  જિલ્લો જૂનાગઢ ગુજરાત
                </p>
              </div>
            </div>
            <div className="data">
              <img src={Mail} alt="mail" />
              <div className="contact-info">
                <h2 className="contact-head-two">Email Address</h2>
                <a href="#" className="contact-p">
                  abc@gmail.com
                </a>
              </div>
            </div>
            <div className="data">
              <img src={Phone} alt="phone" />
              <div className="contact-info">
                <h2 className="contact-head-two">સંપર્ક નંબર</h2>
                <a className="contact-p mb-0" href="tel:+919033395800">
                  +91 90 333 95 800
                </a>
              </div>
            </div>
          </div>
          <div className="social-icon">
            <a href="#" title="Follow on Facebook">
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
        <div className="col-xs-12 col-lg-9 col-md-8">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6 pr-lg-3 pr-md-2 pr-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group col-md-6 pl-lg-3 pl-md-1 pl-1">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                rows={4}
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <a href="#" className="contact-submit">
              SUBMIT
            </a>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default ConactUs;
