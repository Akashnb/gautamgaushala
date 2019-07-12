import React from "react";

import AppHeader from "./AppHeader";
import MenuItems from "../../data/MenuItems.json";

const AppHeaderContainer = () => {
  return <AppHeader MenuItems={MenuItems} />;
};

export default AppHeaderContainer;
