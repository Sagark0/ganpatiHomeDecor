import AppBar from "../components/appbar";
import Sanitary from "../components/homepage/sanitary";
import Slideshow from "../components/homepage/slideshow";

export default function Homepage() {
  return (
    <div className="homepage">
      <AppBar />
      <Slideshow />
      <Sanitary />
    </div>
  );
}
