import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import circlePic1 from "../images/circle-pic1.jpg";
import testimonial1 from "../images/testimonial1.png";
// import man3 from "../images/man3.png"
import { Pagination } from "swiper/modules";
import "../css/TestimonialSlider.css"; // For custom styling
import { Star } from "./SvgGrabber";

const TestimonialSlider = () => {
  const testimonials = [
    {
      heading: "Lorem Ipsum Dolor",
      name: "~ Olivia James",
      details: `
        "Amet, consectetur adipiscing elit. Cras aliquam lacus a leo iaculis pulvinar. 
        Proin imperdiet sapien a risus feugiat, vitae rutrum tortor convallis."
      `,
      image: testimonial1, // Replace with your image file or URL
    },

    {
      heading: "Eric Cornelius",
      name: "Amazing service",
      details:
        "“Amet, consectetur adipiscing elit. Cras aliquam lacus a leo iaculis pulvinar. Proin imperdiet sapien a risus feugiat, vitae rutrum tortor convallis",
      image: circlePic1, // Replace with your images
    },
    {
      heading: "Rick H",
      name: "Amazing service",
      details:
        "“Amet, consectetur adipiscing elit. Cras aliquam lacus a leo iaculis pulvinar. Proin imperdiet sapien a risus feugiat, vitae rutrum tortor convallis",
      image: testimonial1, // Replace with your images
    },
    {
      heading: "Rick H",
      name: "Amazing service",
      details:
        "“Amet, consectetur adipiscing elit. Cras aliquam lacus a leo iaculis pulvinar. Proin imperdiet sapien a risus feugiat, vitae rutrum tortor convallis",
      image: testimonial1, // Replace with your images
    },
    {
      heading: "Rick H",
      name: "Amazing service",
      details:
        "“Amet, consectetur adipiscing elit. Cras aliquam lacus a leo iaculis pulvinar. Proin imperdiet sapien a risus feugiat, vitae rutrum tortor convallis",
      image: testimonial1, // Replace with your images
    },
  ];
  return (
    <div className="testimonial-slider-container mt-4 mb-4">
      <div class="d-flex justify-content-center align-items-center gap-2 flex-wrap">
        <div className="star-rating gap-2">
          <Star /> <Star /> <Star /> <Star /> <Star />
        </div>
        <div className="ms-2 star-text">Based on 2000+ Happy Customer</div>
        <div className="circle-images">
          <div className="small-circle">
            <img
              className="rounded-circle"
              width="100%"
              height="100%"
              src={circlePic1}
            ></img>
          </div>
          <div className="small-circle">
            <img
              className="rounded-circle"
              width="100%"
              height="100%"
              src={circlePic1}
            ></img>
          </div>
          <div className="small-circle">
            <img
              className="rounded-circle"
              width="100%"
              height="100%"
              src={circlePic1}
            ></img>
          </div>
          <div className="small-circle">
            <img
              className="rounded-circle"
              width="100%"
              height="100%"
              src={circlePic1}
            ></img>
          </div>
        </div>
      </div>
      <h2 className="div-heading mt-2">
        Emotive headline for Testimonials here
      </h2>
      <p className="div-para">
        Lorem ipsum dolor sit amet consectetu. Ipsum sit sed pharetra erat
        massa. Risus ut nibh.
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination]}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-card mt-5">
            <div className="card-content">
              <h5 className="testimonial-name">{testimonial.heading}</h5>
              <p className="testimonial-para">{testimonial.details}</p>
              <div className="stars-div">
                <h4 className="testimonial-subHeading">{testimonial.name}</h4>
                <Star /> <Star /> <Star /> <Star /> <Star />
              </div>

              <div className="user-info"></div>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="user-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
