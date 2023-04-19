import React, { Suspense, lazy } from "react";

const NotFoundPage = lazy(() => import("../shared/components/NotFound"));

const NotFound = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <NotFoundPage />
  </Suspense>
);

export default NotFound;
