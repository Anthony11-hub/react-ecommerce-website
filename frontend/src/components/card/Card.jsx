import "./Card.scss";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Card = ({ products }) => {
  return (
    <>
      {products.map((data) => {
        const secondImgExists = data.image.length > 1;
        return (
          <div className="card" key={data.id}>
            {secondImgExists ? (
              <div className="img-box">
                <span className="likeIcon">
                  <FavoriteBorderOutlinedIcon className="heart-icon" />
                </span>
                <span className="soldOutIcon">
                  <p className="small">Sold out</p>
                </span>
                <img src={data.image[0]} alt="" className="mainImg" />
                <img src={data.image[1]} alt="" className="secondImg" />
              </div>
            ) : (
              <div className="img-box">
                <span className="likeIcon">
                  <FavoriteBorderOutlinedIcon className="heart-icon" />
                </span>
                <img src={data.image[0]} alt="" />
              </div>
            )}
            <Link to={`/products/${data.id}`} className="link">
              <div className="card-content">
                <p className="section-title">{data.name.slice(0, 25)}</p>
                <p className="section-text">Ksh {data.price}</p>
                {/* <div className="colors">
                  <span></span>
                  <span></span>
                  <span></span>
                </div> */}
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

Card.propTypes = {
  products: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      image: propTypes.array,
      name: propTypes.string,
      price: propTypes.number,
    })
  ),
};

export default Card;
