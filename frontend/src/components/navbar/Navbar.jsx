import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import ReactCountryFlag from "react-country-flag";

import Badge from "@mui/material/Badge";

import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";
import Cart from "../cart/Cart";
import Favourite from "../favourite/Favourite";
import Search from "../search/Search";

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const [openFavourites, setOpenFavourites] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        {/* left */}
        <div className="left">
          <div className="item">
            <ReactCountryFlag countryCode="KE" svg />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            Ksh
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to={"/products/men"}>
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={"/products/women"}>
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={"/products/children"}>
              Children
            </Link>
          </div>
        </div>
        {/* center */}
        <div className="center">
          <Link className="link" to={"/"}>
            <div className="img-box">
              <img src="/img/logo.png" alt="" />
            </div>
          </Link>
        </div>
        {/* right */}
        <div className="right">
          <div className="item">
            <Link className="link" to={"/"}>
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={"/about"}>
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={"/contact"}>
              Contact
            </Link>
          </div>
          <div className="icons">
            <SearchIcon
              style={{ fontSize: "20px" }}
              onClick={() => setOpenSearch(!openSearch)}
            />
            <Badge
              badgeContent={1}
              color="primary"
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: "10px",
                },
              }}>
              <FavoriteBorderOutlinedIcon
                style={{ fontSize: "20px" }}
                onClick={() => setOpenFavourites(!openFavourites)}
              />
            </Badge>
            <Badge
              badgeContent={1}
              color="primary"
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: "10px",
                },
              }}>
              <ShoppingCartOutlinedIcon
                style={{ fontSize: "20px" }}
                onClick={() => setOpenCart(!openCart)}
              />
            </Badge>
          </div>
        </div>
        <div className="menu-icon">
          <div className="item">
            <MenuIcon style={{ fontSize: "20px", cursor: "pointer" }} />
          </div>
        </div>
      </div>
      {openCart && <Cart onClose={() => setOpenCart(false)} />}
      {openFavourites && <Favourite onClose={() => setOpenFavourites(false)} />}
      {openSearch && <Search onClose={() => setOpenSearch(false)} />}
    </div>
  );
};

export default Navbar;
