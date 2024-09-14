import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

import "./Slider.scss";
// import { Link } from "react-router-dom";

const Slider = () => {
  const data = [
    "https://ik.imagekit.io/2ofxhdt8w8/home%20images/phone-2.jpg?updatedAt=1716340618493/w=800",
    "https://ik.imagekit.io/2ofxhdt8w8/home%20images/shoe-store.jpg?updatedAt=1716105062304/w=800",
    "https://ik.imagekit.io/2ofxhdt8w8/blackm/hero.jpg?updatedAt=1721999497729/w=800",
  ];

  return (
    <div className="slider">
      <div className="image-container">
        <img src={data[2]} alt="" />
      </div>
      {/* <div className="slider-content">
        <p className="section-title">Your One Stop Shop</p>
        <Link className="link" to={"/products/women"}>
          <p className="section-title">Shop trending designs</p>
        </Link>
      </div> */}
      <div className="icons">
        <div className="icon">
          <WestOutlinedIcon />
        </div>
        <div className="icon">
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
