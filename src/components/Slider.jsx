// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// Import Autoplay CSS if you have specific styles for it, though often not strictly necessary for basic functionality
// import "swiper/css/autoplay";

import One from "../images/one.jpg";
import Two from "../images/two.jpg";
import Three from "../images/three.jpg";
import Four from "../images/four.jpg";
import Five from "../images/five.jpg";
import Six from "../images/six.jpg";
import Seven from "../images/seven.png";
import Eight from "../images/eight.png";

// Import Autoplay module
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <div className="mt-10 px-5 text-center text-xl">
        {/* <div className="mb-2">
          I did not want to tip you off, so I picked pictures of you I liked
          from the internet and made this
        </div> */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, 
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]} 
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="h-[300px] w-full" src={One} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[300px] w-full" src={Two} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[300px] w-full" src={Three} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[300px] w-full" src={Four} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[300px] w-full" src={Five} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[300px] w-full" src={Six} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[300px] w-full" src={Seven} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[300px] w-full" src={Eight} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;