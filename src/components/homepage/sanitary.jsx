import "./sanitary.css";
import sanitary from "../../assets/sanitary1.jpg";
export default function Sanitary() {
  return (
    <section className="sectionHomepage" id="section">
      <div className="row">
        <div className="col50">
          <div className="titleText">
            <span>S</span>anitary Ware
          </div>
          <p>
            Discover a world of elegance, functionality, and convenience with
            our extensive range of top-quality sanitary ware products. Whether
            you're revamping your bathroom, upgrading your kitchen, or
            undertaking a commercial project, we have the perfect solutions to
            meet your requirements.
          </p>
          <button>Know More</button>
        </div>
        <div className="col50">
          <div className="imgBox">
            <img src={sanitary} />
          </div>
        </div>
      </div>
    </section>
  );
}
