import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import "./Search.scss";

import propTypes from "prop-types";

const Search = ({ onClose }) => {
  return (
    <div className="searchContainer">
      <div className="search">
        <form>
          <input type="text" placeholder="Search..." />
          <button type="submit">
            <SearchIcon style={{ fontSize: "20px" }} />
          </button>
        </form>
        <CloseIcon
          className="close-icon"
          style={{ fontSize: "20px", cursor: "pointer" }}
          onClick={onClose}
        />
      </div>
    </div>
  );
};

Search.propTypes = {
  onClose: propTypes.func.isRequired,
};

export default Search;
