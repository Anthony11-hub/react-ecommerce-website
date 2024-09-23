import Card from "../../components/card/Card";
import useFetch from "../../hooks/useFetch";
import "./NewArrivals.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

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
          {products && (
            <Swiper
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={2}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 5,
                },
                1200: {
                  slidesPerView: 6,
                },
              }}>
              {products.slice(0, 10).map((product) => (
                <SwiperSlide key={product.id}>
                  <Card product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
        <div className="icons">
          <div className="icon custom-prev">
            <WestOutlinedIcon />
          </div>
          <div className="icon custom-next">
            <EastOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
