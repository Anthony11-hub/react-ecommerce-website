import "./Shop.scss";

import { useState } from "react";

import "@fontsource/inter";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import TuneIcon from "@mui/icons-material/Tune";
import CategoryFilter from "../../components/categoryFilter/CategoryFilter";
import ShopProducts from "../../components/shopProducts/ShopProducts";

const Shop = () => {
  const [sortBy, setSortBy] = useState("");

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="shop">
      <div className="container">
        <div className="section-header">
          <h1 className="h1">Shop</h1>
          <Stack direction="row" spacing={1}>
            <Chip label="New" variant="outlined" className="pill" />
            <Chip label="Funny" variant="outlined" className="pill" />
            <Chip label="Alternative" variant="outlined" className="pill" />
            <Chip label="Retro" variant="outlined" className="pill" />
            <Chip label="Anime" variant="outlined" className="pill" />
          </Stack>
        </div>
        <div className="shop-container">
          <div className="top">
            <div className="filter-icon">
              <TuneIcon style={{ fontSize: "20px" }} />
              <p className="section-text">Filter</p>
            </div>
            <div className="sort">
              <FormControl variant="standard" sx={{ m: 0, minWidth: 120 }}>
                <InputLabel
                  id="demo-simple-select-standard-label"
                  className="sort-input">
                  Sort By
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={sortBy}
                  onChange={handleChange}
                  label="trending"
                  className="sort-input">
                  <MenuItem value="">
                    <em>default</em>
                  </MenuItem>
                  <MenuItem value={"new"}>New Stuff</MenuItem>
                  <MenuItem value={"trending"}>Trending</MenuItem>
                  <MenuItem value={"lowest"}>Cheapest</MenuItem>
                  <MenuItem value={"highest"}>Most Expensive</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <CategoryFilter />
            </div>
            <div className="right">
              <ShopProducts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
