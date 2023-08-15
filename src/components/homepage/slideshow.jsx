import "./slideshow.css";
import "./brandlogo.css";
import link from "../../assets/BrandLogos/link.png";
import century from "../../assets/BrandLogos/century.png";
import dorset from "../../assets/BrandLogos/dorset.svg";
import ebco from "../../assets/BrandLogos/ebco.webp";
import godrej from "../../assets/BrandLogos/godrej.png";
import greenply from "../../assets/BrandLogos/greenply.png";
import hettich from "../../assets/BrandLogos/hettich.png";
import kaff from "../../assets/BrandLogos/kaff.png";
import kurlon from "../../assets/BrandLogos/kurlon.png";
import kutchina from "../../assets/BrandLogos/kutchina.jpeg";
function Slideshow() {
  return (
    <section className="slideshow" id="slideshow">
      <h2>One Stop For Home Decor</h2>
      <p>
        Building Dreams, Enhancing Spaces: Your Premier Destination for
        Construction, Sanitary Ware, Home Decor, and Interior Design Solutions
      </p>
      <button>Explore</button>
      <div className="brandLogo">
        <img src={link}></img>
        <img src={century}></img>
        <img src={dorset}></img>
        <img src={ebco}></img>
        <img src={godrej}></img>
        <img src={greenply}></img>
        <img src={hettich}></img>
        <img src={kaff}></img>
        <img src={kurlon}></img>
        <img src={kutchina}></img>
      </div>
    </section>
  );
}

export default Slideshow;
