import "./FunThings.scss";

import { Link } from "react-router-dom";

const FunThings = () => {
  return (
    <div className="funThings section">
      <div className="container">
        <h1 className="h1">Fun Things</h1>
        <div className="categories">
          <div className="card card-1">
            <div className="img-box">
              <img
                src="https://ik.imagekit.io/2ofxhdt8w8/tr:w-800/react-website/marissa-grootes-D4jRahaUaIc-unsplash.jpg?updatedAt=1725954107216"
                alt=""
              />
            </div>
            <Link className="card-content" to={"/shop"}>
              <div className="icon"></div>
              <p className="section-title">Bags</p>
            </Link>
          </div>
          <div className="card card-2">
            <div className="img-box">
              <img
                src="https://ik.imagekit.io/2ofxhdt8w8/tr:w-600/react-website/milad-hariri-0oL1NISsdt0-unsplash.jpg?updatedAt=1725954116253"
                alt=""
              />
            </div>
            <Link className="card-content" to={"/shop"}>
              <div className="icon"></div>
              <p className="section-title">Rugs</p>
            </Link>
          </div>
          <div className="card card-3">
            <div className="img-box">
              <img
                src="https://ik.imagekit.io/2ofxhdt8w8/tr:w-800/react-website/vincent-branciforti-TBJtG8edlCg-unsplash.jpg?updatedAt=1725954114952"
                alt=""
              />
            </div>
            <Link className="card-content" to={"/shop"}>
              <div className="icon"></div>
              <p className="section-title">Socks</p>
            </Link>
          </div>
          <div className="card card-4">
            <div className="img-box">
              <img
                src="https://ik.imagekit.io/2ofxhdt8w8/tr:w-800/react-website/gil-ribeiro-ZgwwmNyt7KM-unsplash.jpg?updatedAt=1725954110606"
                alt=""
              />
            </div>
            <Link className="card-content" to={"/shop"}>
              <div className="icon"></div>
              <p className="section-title">Shorts</p>
            </Link>
          </div>
          <div className="card card-5">
            <div className="img-box">
              <img
                src="https://ik.imagekit.io/2ofxhdt8w8/tr:w-800/react-website/chris-scott-NEc3YEN1FFw-unsplash.jpg?updatedAt=1725954115341"
                alt=""
              />
            </div>
            <Link className="card-content" to={"/shop"}>
              <div className="icon"></div>
              <p className="section-title">Mugs</p>
            </Link>
          </div>
          <div className="card card-6">
            <div className="img-box">
              <img
                src="https://ik.imagekit.io/2ofxhdt8w8/tr:w-1200/react-website/george-pagan-iii-PsifAN6_z-k-unsplash.jpg?updatedAt=1725954115461"
                alt=""
              />
            </div>
            <Link className="card-content" to={"/shop"}>
              <div className="icon"></div>
              <p className="section-title">Wall Art</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunThings;
