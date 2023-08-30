import React from "react";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import whatsappImg from "../assets/WhatsAppButtonGreenLarge.png";
const ContactUs = () => {
  return (
    <div className="contact_wrapper">
      <a href="https://wa.me/917992256255?text=Hii">
        <img src={whatsappImg} />
      </a>
      <ul>
        <li>
          <span>
            <LocalPhoneIcon />
          </span>
          <p>
            <a href="tel:06512912339">0651-2912339</a>
            <br />
            <a href="tel:7992256255">7992256255</a>
          </p>
        </li>
        <li>
          <span>
            <EmailIcon />
          </span>
          <p>
            <a href="mailto:ganpatiplydecor@gmail.com">
              ganpatiplydecor@gmail.com
            </a>
          </p>
        </li>
        <li>
          <span>
            <RoomIcon />
          </span>
          <p>
            <span>
              NH-33 BIT More <br /> Ranchi-835217 <br /> Jharkhand
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ContactUs;
