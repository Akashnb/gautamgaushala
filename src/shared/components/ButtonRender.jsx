import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import routes from "../../Routes";

const ButtonRender = ({ title, link, className }) => (
  <Link className={`donate_comman_button ${className}`} to={link}>
    {title}
  </Link>
);

ButtonRender.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
};

ButtonRender.defaultProps = {
  title: "Donate",
  link: routes.DONATE,
};

export default ButtonRender;
