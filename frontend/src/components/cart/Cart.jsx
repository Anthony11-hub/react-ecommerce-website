import "./Cart.scss";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";

import propTypes from "prop-types";

const Cart = ({ onClose }) => {
  return (
    <div className="cartContainer">
      <div className="cart">
        <div className="cart-header">
          <div className="cart-title">
            <p className="section-title">
              Cart <span>4</span>
            </p>
          </div>
          <CloseIcon
            style={{
              fontSize: "20px",
              cursor: "pointer",
            }}
            onClick={onClose}
          />
        </div>
        <div className="item">
          <div className="actual-cart">
            <div className="img-box">
              <img src="/img/products/p_img2_1.png" alt="" />
            </div>
            <div className="details">
              <p className="section-title">
                Men Round Neck Pure Cotton T-shirt
              </p>
              <div className="section-text">1 x ksh 200</div>
              <div className="preference">Men / Topwear / XL</div>
            </div>
          </div>
          <div className="actions">
            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 0, width: "5ch" } }}
              noValidate
              autoComplete="off">
              <TextField id="outlined-basic" variant="outlined" />
            </Box>
            <p>Remove</p>
          </div>
        </div>
        <div className="total">
          <span>TOTAL</span>
          <span>Ksh 200</span>
        </div>
        <button className="checkout">Proceed to Checkout</button>
      </div>
    </div>
  );
};

Cart.propTypes = {
  onClose: propTypes.func.isRequired,
};

export default Cart;
