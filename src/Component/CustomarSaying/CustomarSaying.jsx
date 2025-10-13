import customerSayingImageHeader from "../../assets/images/customer-top.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import reviewimg from "../../assets/images/reviewQuote.png";
import reviewline from "../../assets/images/Line 8/Line 8@2x.png";
import Rating from "@mui/material/Rating";

const CustomerSaying = () => {
  const [reviews, setreviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setreviews(data));
  }, []);

  return (
    <div className="text-center py-8 px-4 md:mt-28">
      <img
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0"
        src={customerSayingImageHeader}
        alt="Customer Saying Header"
        className="mx-auto mb-6"
      />
      <h1
        data-aos="fade-up"
        data-aos-delay="1300"
        className="md:text-4xl text-2xl font-bold mb-4"
      >
        What our customers are saying
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="1300"
        className="opacity-80 max-w-xl mx-auto"
      >
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with
        ease!
      </p>
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="1300"
        data-aos-offset="0"
        className="md:h-[500px]"
      >
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          freeMode={false}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000, // 3 seconds
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[FreeMode, Autoplay, Navigation]} // Autoplay module must be included
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((reviewcard) => (
            <SwiperSlide key={reviewcard.id}>
              <div className="group p-2">
                <div
                  className="bg-white md:my-20 mt-8 mb-12 md:h-72 rounded-2xl border border-gray-100 shadow-md transition-all duration-500 ease-in-out p-5 md:p-8 flex flex-col justify-between text-center
        group-hover:shadow-2xl group-hover:scale-105 group-hover:border-yellow-400"
                >
                  {/* Top decorative image */}
                  <div className="flex justify-center">
                    <img
                      src={reviewimg}
                      alt="review decoration"
                      className="w-14 sm:w-16 md:w-20"
                    />
                  </div>

                  {/* Review text */}
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed italic max-w-xl mx-auto flex-1">
                    “{reviewcard.review}”
                  </p>

                  {/* Decorative line */}
                  <div className="flex justify-center mt-2">
                    <img
                      src={reviewline}
                      alt="review horizontal line"
                      className="w-32 md:w-60 opacity-70"
                    />
                  </div>

                  {/* User section */}
                  <div className="flex items-center justify-center gap-3 sm:gap-5 mt-3 flex-wrap">
                    <img
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-yellow-400 shadow-sm"
                      src={reviewcard.user_photoURL}
                      alt="profile photo"
                    />
                    <div className="text-left flex flex-col justify-center">
                      <h1 className="text-gray-900 font-semibold text-sm sm:text-base md:text-lg">
                        {reviewcard.userName}
                      </h1>
                      <Rating
                        name="half-rating"
                        defaultValue={reviewcard.ratings}
                        precision={0.5}
                        sx={{ color: "#FFC107" }}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerSaying;
