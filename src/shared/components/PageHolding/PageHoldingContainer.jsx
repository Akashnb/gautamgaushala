import React from "react";
import PropTypes from "react-dom";

import PageHolding from "./PageHolding";

const PageHoldingContainer = ({ img, title }) => {
  return <PageHolding img={img} title={title} />;
};

PageHoldingContainer.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};

PageHoldingContainer.defaultProps = {
  img: "",
  title: "",
};

export default PageHoldingContainer;
