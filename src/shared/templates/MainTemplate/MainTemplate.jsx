import React from "react";

import Header from "../../components/AppHeader/AppHeaderContainer";
import Footer from "../../components/AppFooter/AppFooterContainer";
import PageRouter from "../../../Routes/PageRouter";

const MainTemplate = () => (
  <div className="main">
    <Header />
    <aside>
      <PageRouter />
    </aside>
    <Footer />
  </div>
);

export default MainTemplate;
