import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../../assets/banner/banner1.png";
import img2 from "../../assets/banner/banner2.png";
import img3 from "../../assets/banner/banner3.png";

const Banner = () => {
  const bannerimg = [img1, img2, img3];
  return (
    <div className="banner-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {bannerimg.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Banner ${index + 1}`}
              className=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
