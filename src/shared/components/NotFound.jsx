import React from "react";
import { Link } from "react-router-dom";

import routes from '../../Routes'
import Bgimg from "../../assets/images/Not-Found/404-bg.png";
import Img404 from "../../assets/images/Not-Found/404.png";

const NotFound = () => (
  <section className="bg-404" style={{ backgroundImage: `url(${Bgimg})` }}>
    <div className="container">
      <div className="not-found-content">
        <img src={Img404} alt="404-not-found" />
        <p>
          You've been tricked into click on link that can't be found. Please
          check the url or go to&nbsp;
          <Link to={routes.DASHBOARD}>main page.</Link>
        </p>
      </div>
    </div>
  </section>
);

export default NotFound;
