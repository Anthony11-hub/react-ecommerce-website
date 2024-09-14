import Card from "../../components/card/Card";
import useFetch from "../../hooks/useFetch";
import "./NewArrivals.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Link } from "react-router-dom";

const NewArrivals = () => {
  const {
    data: products,
    error,
    isPending,
  } = useFetch("http://localhost:8000/products");

  return (
    <div className="newArrivals section">
      <div className="container">
        <div className="top">
          <h1 className="h1">New Arrivals</h1>
          <Link to={"/shop"} className="link-btn">
            <p className="section-text">View All</p>
            <div className="icon">
              <ArrowForwardIosIcon />
            </div>
          </Link>
        </div>
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        <div className="grid-list">
          {products && <Card products={products.slice(0, 5)} />}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
