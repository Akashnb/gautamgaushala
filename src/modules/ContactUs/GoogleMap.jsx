import React from "react";

const GoogleMap = () => (
  <div className="add-map">
    <iframe
      title="gauttamgaushala-map"
      src="https://maps.google.com/maps?q=gausala%20of%20bantwa&t=k&z=17&ie=UTF8&iwloc=&output=embed"
      height={500}
      style={{ border: 0, width: "100%" }}
      allowFullScreen
    />
  </div>
);

export default GoogleMap;
