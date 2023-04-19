import React, { Suspense, lazy } from "react";

const Home = lazy(() => import("../../modules/Home/HomeContainer"));

const HomePage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Home />
  </Suspense>
);

export default HomePage;
