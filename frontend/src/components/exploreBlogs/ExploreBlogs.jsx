import "./ExploreBlogs.scss";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Link } from "react-router-dom";

const ExploreBlogs = () => {
  return (
    <div className="exploreBlogs section">
      <div className="container">
        <div className="top">
          <h1 className="h1">Explore Blogs</h1>
          <Link to={"/shop"} className="link-btn">
            <p className="section-text">View All</p>
            <div className="icon">
              <ArrowForwardIosIcon />
            </div>
          </Link>
        </div>
        <div className="grid-list-col-4">
          <div className="blog-card">
            <div className="img-box">
              <img
                src="https://ik.imagekit.io/2ofxhdt8w8/tr:w-600/react-website/andrew-neel-ute2XAFQU2I-unsplash.jpg?updatedAt=1725955206812"
                alt=""
              />
            </div>
            <div className="card-content">
              <p className="section-title">Community Forum</p>
              <p className="section-text">
                Join our community forum to share your thoughts, ideas, and
                discover new products.
              </p>
            </div>
          </div>
          <div className="blog-card">
            <div className="img-box">
              <img
                src="https://ik.imagekit.io/2ofxhdt8w8/tr:w-600/react-website/jess-bailey-94Ld_MtIUf0-unsplash.jpg?updatedAt=1725955206403"
                alt=""
              />
            </div>
            <div className="card-content">
              <p className="section-title">Community Forum</p>
              <p className="section-text">
                Join our community forum to share your thoughts, ideas, and
                discover new products.
              </p>
            </div>
          </div>
          <div className="blog-card">
            <div className="img-box">
              <img
                src="https://ik.imagekit.io/2ofxhdt8w8/tr:w-600/react-website/jared-rice-NTyBbu66_SI-unsplash.jpg?updatedAt=1725955205557"
                alt=""
              />
            </div>
            <div className="card-content">
              <p className="section-title">Community Forum</p>
              <p className="section-text">
                Join our community forum to share your thoughts, ideas, and
                discover new products.
              </p>
            </div>
          </div>
          <div className="blog-card">
            <div className="img-box">
              <img
                src="https://ik.imagekit.io/2ofxhdt8w8/tr:w-600/react-website/toa-heftiba-yz4VF6x0W3M-unsplash.jpg?updatedAt=1725955201480"
                alt=""
              />
            </div>
            <div className="card-content">
              <p className="section-title">Community Forum</p>
              <p className="section-text">
                Join our community forum to share your thoughts, ideas, and
                discover new products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreBlogs;
