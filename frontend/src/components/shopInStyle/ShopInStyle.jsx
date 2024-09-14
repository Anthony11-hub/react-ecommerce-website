import { Link } from "react-router-dom";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ShopInStyle = () => {
  return (
    <div className="shopByCategory section">
      <div className="container">
        <div className="section-header">
          <h1 className="h1">Shop In Style</h1>
        </div>
        <div className="categories">
          <div className="card">
            <div className="img-box">
              <img src="/img/products/p_img2_2.png" alt="" />
            </div>
            <Link className="card-content" to={"/shop"}>
              <div className="icon">
                <ArrowForwardIosIcon />
              </div>
              <p className="section-title">Blank Tees</p>
            </Link>
          </div>
          <div className="card">
            <div className="img-box">
              <img src="/img/products/p_img1.png" alt="" />
            </div>
            <Link className="card-content" to={"/shop"}>
              <div className="icon">
                <ArrowForwardIosIcon />
              </div>
              <p className="section-title">Women Tops</p>
            </Link>
          </div>
          <div className="card">
            <div className="img-box">
              <img src="/img/products/p_img6.png" alt="" />
            </div>
            <Link className="card-content" to={"/shop"}>
              <div className="icon">
                <ArrowForwardIosIcon />
              </div>
              <p className="section-title">Kid Tops</p>
            </Link>
          </div>
          <div className="card">
            <div className="img-box">
              <img src="/img/products/p_img7.png" alt="" />
            </div>
            <Link className="card-content" to={"/shop"}>
              <div className="icon">
                <ArrowForwardIosIcon />
              </div>
              <p className="section-title">Trousers</p>
            </Link>
          </div>
          <div className="card">
            <div className="img-box">
              <img src="/img/products/p_img8.png" alt="" />
            </div>
            <Link className="card-content" to={"/shop"}>
              <div className="icon">
                <ArrowForwardIosIcon />
              </div>
              <p className="section-title">Long Sleeve</p>
            </Link>
          </div>
          <div className="card">
            <div className="img-box">
              <img src="/img/products/p_img4.png" alt="" />
            </div>
            <Link className="card-content" to={"/shop"}>
              <div className="icon">
                <ArrowForwardIosIcon />
              </div>
              <p className="section-title">Classic Tees</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopInStyle;
