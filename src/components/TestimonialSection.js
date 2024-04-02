import React from 'react'
import Heading from './common/Heading'
import TestimonialCard from './TestimonialCard'
import Styles from "../styles/testimonial.module.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function TestimonialSection({testimonialData}) {
  return (
    <div className="w-full my-20 lg:px-28 md:px-16 sm:px-8 px-5">
        <Heading name={"Testimonials."} />
        <Swiper
        slidesPerView={2}
        breakpoints={{
          // When screen width is 640px or more
          640: {
            slidesPerView: 1,
          },
          // When screen width is 768px or more
          768: {
            slidesPerView: 1,
          },
          // When screen width is 1024px or more
          1024: {
            slidesPerView: 1,
          },
          // When screen width is 1280px or more
          1280: {
            slidesPerView: 2,
          },
          // When screen width is 1536px or more
          1536: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={30}
        navigation={true}
        pagination={{
            clickable: true,
          }}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Navigation, Pagination, Autoplay]}
        className="pt-6"
      >
        {testimonialData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <TestimonialCard
                enabled={item.enabled}
                name={item.name}
                img={item.image.url}
                quote={item.review}
                position={item.position}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
        {/* {
            testimonialData.map((item, index)=>{
                return(
                    
                )
            })
        } */}
    </div>
  )
}

export default TestimonialSection