import AppBar from "../components/appbar";
import Banner from "../components/homepage/Banner";
import Slideshow from "../components/homepage/slideshow";

import sanitary from "../assets/sanitary1.jpg";
import construction from "../assets/construction1.jpg";
import homedecor from "../assets/homeDecor.jpg";
export default function Homepage() {

  const bannerData = [
    { titleText: "Sanitary Ware", image: sanitary, body: "Discover a world of elegance, functionality, and convenience with our extensive range of top-quality sanitary ware products. Whether you're revamping your bathroom, upgrading your kitchen, or undertaking a commercial project, we have the perfect solutions to meet your requirements."},
    { titleText: "Construction", image: construction, body: "Discover a world of elegance, functionality, and convenience with our extensive range of top-quality sanitary ware products. Whether you're revamping your bathroom, upgrading your kitchen, or undertaking a commercial project, we have the perfect solutions to meet your requirements."},
    { titleText: "Home Decorations", image: homedecor, body: "Discover a world of elegance, functionality, and convenience with our extensive range of top-quality sanitary ware products. Whether you're revamping your bathroom, upgrading your kitchen, or undertaking a commercial project, we have the perfect solutions to meet your requirements."}
  ]  
  return (
    <div className="homepage">
      <AppBar />
      <Slideshow />
      {bannerData.map( (banner, index) => (
        <Banner key={banner.titleText} index={index} titleText={banner.titleText} image={banner.image} body={banner.body} />
      ))
      }

    </div>
  );
}
