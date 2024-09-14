import "./Product.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useState } from "react";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import ZoomInIcon from "@mui/icons-material/ZoomIn";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Recommend from "../../components/recommendations/Recommend";
import ZoomImage from "../../components/zoomImage/ZoomImage";

const Product = () => {
  const { id } = useParams();
  const {
    data: product,
    error,
    isPending,
  } = useFetch(`http://localhost:8000/products/${id}`);

  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [openZoom, setOpenZoom] = useState(false);

  const handleChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <div className="product">
      <div className="top">
        <div className="container">
          {isPending && <div>Loading...</div>}
          {error && <div>{error}</div>}
          <div className="images">
            <div className="secondaryImages">
              {product &&
                product.image[0] &&
                product.image.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Secondary ${idx}`}
                    onClick={() => setSelectedImg(idx)}
                  />
                ))}
            </div>
            {product && product.image && (
              <div className="mainImg">
                <span className="zoomIcon">
                  <ZoomInIcon
                    style={{ fontSize: "24px" }}
                    onClick={() => setOpenZoom(!openZoom)}
                  />
                </span>
                <span className="likeIcon">
                  <FavoriteBorderOutlinedIcon style={{ fontSize: "24px" }} />
                </span>
                <img src={product.image[selectedImg]} alt="Main" />
              </div>
            )}
          </div>
          <div className="details">
            <p className="section-text">{product && product.subCategory}</p>
            <p className="section-title">{product && product.name}</p>
            <div className="ratings">
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                  style={{ fontSize: "20px" }}
                />
              </Stack>
              <p className="section-text">300 reviews</p>
            </div>
            <p className="section-title">Ksh {product && product.price}</p>
            <FormControl
              component="fieldset"
              sx={{ margin: "10px 0", width: "100%" }}>
              <FormLabel component="legend">
                <p className="section-text">Choose Size:</p>
              </FormLabel>
              <RadioGroup
                aria-label="size"
                name="product-size"
                value={selectedSize}
                onChange={handleChange}
                sx={{
                  display: "flex",
                  flexDirection: "row", // Make radio buttons appear in a row
                  alignItems: "center",
                }}>
                {product &&
                  product.sizes.map((size) => (
                    <FormControlLabel
                      key={size}
                      value={size}
                      control={<Radio sx={{ margin: "10px 0" }} />}
                      label={size}
                      // sx={{ fontSize: "13px" }}
                      componentsProps={{
                        typography: { fontSize: "13px" }, // Ensures label has larger font size
                      }}
                    />
                  ))}
              </RadioGroup>
            </FormControl>
            {/* <p className="section-text">
            Size:{" "}
            {product &&
              product.sizes.map((size) => <span key={size}>{size}</span>)}
          </p> */}
            <p className="section-text">{product && product.description}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
      <Recommend />
      {openZoom && (
        <ZoomImage
          imgSrc={product.image[selectedImg]} // Pass the current image URL to ZoomImage
          onClose={() => setOpenZoom(false)} // Function to close the zoom
        />
      )}
    </div>
    // recommended products component
  );
};

export default Product;
