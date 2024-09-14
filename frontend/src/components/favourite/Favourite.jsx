import "./Favourite.scss";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CloseIcon from "@mui/icons-material/Close";

import propTypes from "prop-types";

const Favourite = ({ onClose }) => {
  return (
    <div className="favouriteContainer">
      <div className="favourite">
        <div className="favs-header">
          <p className="title">Favourites</p>
          <CloseIcon
            style={{
              fontSize: "20px",
              cursor: "pointer",
            }}
            onClick={onClose}
          />
        </div>
        <div className="item">
          <div className="img-box">
            <img src="/img/products/p_img2_1.png" alt="" />
          </div>
          <div className="details">
            <p className="section-title">Men Round Neck Pure Cotton T-shirt</p>
            <div className="section-text">ksh 200</div>
            <div className="actions">
              <button className="btn btn-primary">Add to Cart</button>
              <DeleteOutlineIcon className="delete" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Favourite.propTypes = {
  onClose: propTypes.func.isRequired,
};

export default Favourite;
