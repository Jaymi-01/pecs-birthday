// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import One from '../images/One.jpg';


import { EffectCoverflow, Pagination } from 'swiper/modules';


const Slider = () => {
  return (
   <>
   <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
          <img className='h-[250px] w-full'   src={One} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[250px] w-full'    src={One} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[250px] w-full'    src={One} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[250px] w-full'    src={One} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[250px] w-full'   src={One} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[250px] w-full'   src={One} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[250px] w-full'   src={One} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[250px] w-full'   src={One} />
        </SwiperSlide>
      </Swiper>
   </>
  )
}

export default Slider