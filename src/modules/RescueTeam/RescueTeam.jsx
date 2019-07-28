import React from "react";

import RescueTeam1 from "../../assets/image/rescueTeam/rescueTeam1.jpg";
import RescueTeam2 from "../../assets/image/rescueTeam/rescueTeam2.jpg";
import RescueTeam3 from "../../assets/image/rescueTeam/rescueTeam3.jpg";
import RescueTeam4 from "../../assets/image/rescueTeam/rescueTeam4.jpg";
import RescueTeam5 from "../../assets/image/rescueTeam/rescueTeam5.jpg";
import RescueTeam6 from "../../assets/image/rescueTeam/rescueTeam6.jpg";

const RescueTeam = () => (
  <div className="container">
    <div style={{ paddingTop: "5%" }} />
    <div className="row">
      <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
        <img
          src={RescueTeam1}
          className="img-responsive"
          alt="gauttamgaushala-rescue1"
        />
      </div>
      <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
        <img
          src={RescueTeam2}
          className="img-responsive"
          alt="gauttamgaushala-rescue2"
        />
      </div>
      <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
        <img
          src={RescueTeam3}
          className="img-responsive"
          alt="gauttamgaushala-rescue3"
        />
      </div>
      <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
        <img
          src={RescueTeam4}
          className="img-responsive"
          alt="gauttamgaushala-rescue4"
        />
      </div>
      <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
        <img
          src={RescueTeam5}
          className="img-responsive"
          alt="gauttamgaushala-rescue5"
        />
      </div>
      <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6">
        <img
          src={RescueTeam6}
          className="img-responsive"
          alt="gauttamgaushala-rescue6"
        />
      </div>
    </div>
  </div>
);

export default RescueTeam;
