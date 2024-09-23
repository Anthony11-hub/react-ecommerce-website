import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./Slider.scss";

import { Navigation } from "swiper/modules";

const Slider = () => {
  const data = [
    "https://ik.imagekit.io/2ofxhdt8w8/home%20images/phone-2.jpg?updatedAt=1716340618493/w=800",
    "https://ik.imagekit.io/2ofxhdt8w8/home%20images/shoe-store.jpg?updatedAt=1716105062304/w=800",
    "https://ik.imagekit.io/2ofxhdt8w8/blackm/hero.jpg?updatedAt=1721999497729/w=800",
  ];

  return (
    <div className="slider">
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop={true}>
        {data.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index}`} className="slide-image" />
          </SwiperSlide>
        ))}
        {/* Custom Icons for Swiper navigation */}
        <div className="icons">
          <div className="icon custom-prev">
            <WestOutlinedIcon />
          </div>
          <div className="icon custom-next">
            <EastOutlinedIcon />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
