import React from "react";

import Gallery from "./Gallery";

class GalleryContainer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <Gallery />;
  }
}

export default GalleryContainer;
