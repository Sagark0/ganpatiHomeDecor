import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="sec aboutus">
          <h2>About Us</h2>
          <p>
          Welcome to Ganpati Ply and Decor, your premier destination for a wide range of products and services that elevate your spaces to new heights of elegance and functionality. Whether you're embarking on a construction project, seeking top-quality sanitary ware, or in need of exceptional plywood and decor solutions, we have you covered.
          </p>
          <ul className="sci">
            <li>
              <a href="#">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a href="#">
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className="sec quickLinks">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="sec contact">
          <h2>Contact Info</h2>
          <ul className="info">
            <li>
              <span>
                <RoomIcon />
              </span>
              <span>
                NH-33 BIT More <br /> Ranchi-835217 <br /> Jharkhand
              </span>
            </li>
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
                <WhatsAppIcon />
              </span>
              <p>
                <a href="https://wa.me/917992256255?text=Hii">
                  Say Hi! On WhatsApp
                </a>
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
          </ul>
        </div>
      </div>
      <div className="copyrightText">
        <p>Copyright © 2023 Ganpati Ply & Decor. All Rights Reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;