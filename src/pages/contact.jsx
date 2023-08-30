import React from "react";
import Map from "../components/map";

import ContactUs from "../components/contactUs";
const Contact = () => {
  return (
    <>
      <div className="page"></div>
      <div className="contactUs">
        <ContactUs />
        <Map />
      </div>
    </>
  );
};

export default Contact;
