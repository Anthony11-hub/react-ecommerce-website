import "./ZoomImage.scss";
import CloseIcon from "@mui/icons-material/Close";
import propTypes from "prop-types";
import { useState } from "react";

const ZoomImage = ({ imgSrc, onClose }) => {
  const [zoomStyle, setZoomStyle] = useState({});
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: `scale(2)`, // Controls the zoom level, adjust as necessary
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transform: `scale(1)`,
      transformOrigin: "center center",
    });
  };
  return (
    <div className="zoomImageContainer" onClick={onClose}>
      <div className="zoomImage" onClick={(e) => e.stopPropagation()}>
        <CloseIcon
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "10px",
            right: "20px",
            zIndex: 10,
          }}
          onClick={onClose}
          className="custom-icon"
        />
        <div className="zoomWrapper">
          <img
            src={imgSrc}
            alt="Zoomed In"
            style={zoomStyle}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </div>
  );
};

ZoomImage.propTypes = {
  imgSrc: propTypes.string.isRequired,
  onClose: propTypes.func.isRequired,
};

export default ZoomImage;
