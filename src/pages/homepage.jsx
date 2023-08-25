import Banner from "../components/homepage/banner";
import Slideshow from "../components/homepage/slideshow";

import sanitary from "../assets/sanitary1_c.jpg";
import construction from "../assets/construction1_c.jpg";
import homedecor from "../assets/homeDecor_c.jpg";

export default function Homepage() {

  const bannerData = [
    { titleText: "Sanitary Ware", image: sanitary, body: "Discover a world of elegance, functionality, and convenience with our extensive range of top-quality sanitary ware products. Whether you're revamping your bathroom, upgrading your kitchen, or undertaking a commercial project, we have the perfect solutions to meet your requirements."},
    { titleText: "Construction", image: construction, body: "The heart of our business lies a dedication to creating spaces that stand the test of time. Here we redefine the art of construction. With a commitment to excellence and a passion for innovation, we bring you robust, world-class designs coupled with impeccable safety standards."},
    { titleText: "Ply and Decor", image: homedecor, body: "Your ultimate destination for exceptional design and a comprehensive variety of premium décor solutions. We take pride in offering you the finest selection of plywood and decorative products that redefine spaces with elegance and creativity."}
  ]  
  return (
    <div className="homepage">
      <Slideshow />
      {bannerData.map( (banner, index) => (
        <Banner key={banner.titleText} index={index} titleText={banner.titleText} image={banner.image} body={banner.body} />
      ))
      }
    </div>
  );
}
