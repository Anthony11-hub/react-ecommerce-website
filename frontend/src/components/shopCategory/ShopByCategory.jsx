import "./ShopByCategory.scss";
import { Link } from "react-router-dom";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ShopByCategory = () => {
  return (
    <div className="shopByCategory section">
      <div className="container">
        <div className="section-header">
          <h1 className="h1">Browse Category</h1>
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
              <p className="section-title">Men</p>
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
              <p className="section-title">Women</p>
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
              <p className="section-title">Kids</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
