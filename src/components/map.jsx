import React from "react";
import './contactUs.css';
const Map = () => {
  return (
    <div className="map">
      <iframe
        width="100%"
        height="400"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Ganpati%20Ply%20and%20Decor,%20Dumardagga%20Ranchi+(Ganpati%20Ply%20and%20Decor)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
};

export default Map;
