import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ title, link }) => (
  <Link className="donate_comman_button" to={`/${link}`}>
    {title}
  </Link>
);

Button.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string
};

Button.defaultProps = {
  title: "Donate",
  link: "/donate"
};

export default Button;
