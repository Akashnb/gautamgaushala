import React from "react";

import TeamPerson1 from "../../assets/image/team-img1.jpg";
import TeamPerson2 from "../../assets/image/team-img2.jpg";
import TeamPerson3 from "../../assets/image/team-img3.jpg";
import TeamPerson4 from "../../assets/image/team-img4.jpg";
import TeamPerson5 from "../../assets/image/team-img5.jpg";
import TeamPerson6 from "../../assets/image/team-img6.jpg";

const RescueTeam = () => (
  <div className="team-detail paddingub mob-py-50">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-lg-3 img-box">
          <div className="teamhover teamzoom">
            <img src={TeamPerson1} alt="team" />
          </div>
          <div className="team-data">
            <h2 className="team-head-two">
              John Doe <span>- Field Worker</span>
            </h2>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-lg-3 img-box">
          <div className="teamhover teamzoom">
            <img src={TeamPerson2} alt="team" />
          </div>
          <div className="team-data">
            <h2 className="team-head-two">
              John Doe <span>- Field Worker</span>
            </h2>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-lg-3 img-box">
          <div className="teamhover teamzoom">
            <img src={TeamPerson3} alt="team" />
          </div>
          <div className="team-data">
            <h2 className="team-head-two">
              John Doe <span>- Field Worker</span>
            </h2>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-lg-3 img-box">
          <div className="teamhover teamzoom">
            <img src={TeamPerson4} alt="team" />
          </div>
          <div className="team-data">
            <h2 className="team-head-two">
              John Doe <span>- Field Worker</span>
            </h2>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-lg-3 img-box">
          <div className="teamhover teamzoom">
            <img src={TeamPerson5} alt="team" />
          </div>
          <div className="team-data">
            <h2 className="team-head-two">
              John Doe <span>- Field Worker</span>
            </h2>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-lg-3 img-box">
          <div className="teamhover teamzoom">
            <img src={TeamPerson6} alt="team" />
          </div>
          <div className="team-data mb-0">
            <h2 className="team-head-two">
              John Doe <span>- Field Worker</span>
            </h2>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-lg-3 img-box">
          <div className="teamhover teamzoom">
            <img src={TeamPerson6} alt="team" />
          </div>
          <div className="team-data mb-0">
            <h2 className="team-head-two">
              John Doe <span>- Field Worker</span>
            </h2>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-lg-3 img-box">
          <div className="teamhover teamzoom">
            <img src={TeamPerson6} alt="team" />
          </div>
          <div className="team-data mb-0">
            <h2 className="team-head-two">
              John Doe <span>- Field Worker</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RescueTeam;
