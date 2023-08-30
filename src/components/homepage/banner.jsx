import "./banner.css";
import { Link } from "react-router-dom";
export default function Banner({index, titleText, image, body, toLink}) {
  const customStyle = {
    flexDirection: index%2==0 ? 'row': 'row-reverse'
  }
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <section className="sectionHomepage" id="section">
      <div className="row" style={customStyle}>
        <div className="col50">
          <div className="titleText">
            <span>{titleText[0]}</span>{titleText.slice(1)}
          </div>
          <p>
            {body}
          </p>
          <Link to={toLink} className="button" onClick={scrollToTop}>Know More</Link>
        </div>
        <div className="col50">
          <div className="imgBox">
            <img src={image} />
          </div>
        </div>
      </div>
    </section>
  );
}
