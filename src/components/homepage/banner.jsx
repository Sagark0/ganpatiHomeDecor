import "./banner.css";
export default function Banner({index, titleText, image, body}) {
  const customStyle = {
    flexDirection: index%2==0 ? 'row': 'row-reverse'
  }
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
          <button>Know More</button>
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
