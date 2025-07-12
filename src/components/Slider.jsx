// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './Slider.css'
import One from "../images/one.jpg";
import Two from "../images/two.jpg";
import Three from "../images/three.jpg";
import Four from "../images/four.jpg";
import Five from "../images/five.jpg";
import Six from "../images/six.jpg";
import Seven from "../images/seven.png";
import Eight from "../images/eight.png";

import { EffectCoverflow, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <div className="mt-10 px-5 text-center text-xl">
        <div className="mb-2">
          
        </div>
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
            dynamicBullets: true, // This is key for the 3D effect on pagination
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="h-[250px] w-full" src={One} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[250px] w-full" src={Two} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[250px] w-full" src={Three} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[250px] w-full" src={Four} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[250px] w-full" src={Five} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[250px] w-full" src={Six} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[250px] w-full" src={Seven} />
          </SwiperSlide>
          <SwiperSlide>
            <img className="h-[250px] w-full" src={Eight} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;