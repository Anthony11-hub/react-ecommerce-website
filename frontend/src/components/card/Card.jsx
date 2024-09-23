import "./Card.scss";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Card = ({ product, products }) => {
  // Handle either a single product or an array of products
  const renderProduct = (item) => {
    const secondImgExists = item.image.length > 1;

    return (
      <div className="card" key={item.id}>
        <div className="img-box">
          <span className="likeIcon">
            <FavoriteBorderOutlinedIcon className="heart-icon" />
          </span>
          {secondImgExists ? (
            <>
              <span className="soldOutIcon">
                <p className="small">Sold out</p>
              </span>
              <img src={item.image[0]} alt="" className="mainImg" />
              <img src={item.image[1]} alt="" className="secondImg" />
            </>
          ) : (
            <img src={item.image[0]} alt="" />
          )}
        </div>
        <Link to={`/products/${item.id}`} className="link">
          <div className="card-content">
            <p className="section-title">{item.name}</p>
            <p className="section-text">Ksh {item.price}</p>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <>
      {/* Render a single product or map through products array */}
      {product
        ? renderProduct(product)
        : products && products.map((item) => renderProduct(item))}
    </>
  );
};

Card.propTypes = {
  product: propTypes.shape({
    id: propTypes.string,
    image: propTypes.array,
    name: propTypes.string,
    price: propTypes.number,
  }),
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
