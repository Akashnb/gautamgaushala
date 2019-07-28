import React from "react";

import Button from "../../../shared/components/ButtonRender";
import Cost1 from "../../../assets/image/cost1.jpg";
import Cost2 from "../../../assets/image/cost2.jpg";
import Cost3 from "../../../assets/image/cost3.jpg";
import Cost4 from "../../../assets/image/cost4.jpg";

const TotalCost = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-6 col-xs-12 d-flex justify-content-center align-items-start mb-5">
        <div className="card">
          <div className="banner">
            <div
              className="avatar"
              style={{ backgroundImage: `url(${Cost1})` }}
            />
          </div>
          <h2>
            એક દિવસ નો ગાયો
            <br /> માટે ચારોં
          </h2>
          <h5>1501</h5>
          <Button title="દાન કરો" link="donate" className="donate-btn" />
        </div>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12 d-flex justify-content-center align-items-start mb-5">
        <div className="card">
          <div className="banner">
            <div
              className="avatar"
              style={{ backgroundImage: `url(${Cost2})` }}
            />
          </div>
          <h2>
            મંથલી એક ગાય <br /> માટે ચારોં
          </h2>
          <h5>5100</h5>
          <Button title="દાન કરો" link="donate" className="donate-btn" />
        </div>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12 d-flex justify-content-center align-items-start mb-5">
        <div className="card">
          <div className="banner">
            <div
              className="avatar"
              style={{ backgroundImage: `url(${Cost3})` }}
            />
          </div>
          <h2>એક મહિના નો તબીબી[Medical] ખર્ચ</h2>
          <h5>7000</h5>
          <Button title="દાન કરો" link="donate" className="donate-btn" />
        </div>
      </div>
      <div className="col-md-3 col-sm-6 col-xs-12 d-flex justify-content-center align-items-start mb-5">
        <div className="card">
          <div className="banner">
            <div
              className="avatar"
              style={{ backgroundImage: `url(${Cost4})` }}
            />
          </div>
          <h2>ગૌશાળા નો એક મહિના માટે જાળવણી ખર્ચ</h2>
          <h5>25000</h5>
          <Button title="દાન કરો" link="donate" className="donate-btn" />
        </div>
      </div>
    </div>
  </div>
);

export default TotalCost;
