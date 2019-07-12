import React from "react";
import PropTypes from "prop-types";

import Header from "../../components/AppHeader/AppHeaderContainer";
import Footer from "../../components/AppFooter/AppFooterContainer";

const MainTemplate = ({ children }) => (
  <div className="main">
    <Header />
    {children}
    <Footer />
  </div>
);

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

MainTemplate.defaultProps = {
  children: <div />
};

export default MainTemplate;
