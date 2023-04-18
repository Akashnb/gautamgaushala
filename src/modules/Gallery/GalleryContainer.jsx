import React, { useEffect } from "react";

import Gallery from "./Gallery";

const GalleryContainer = ()=> {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

    return <Gallery />;
}

export default GalleryContainer;
