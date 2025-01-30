import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { AddToBookmark } from "./SvgGrabber";
import service1 from "../images/service1.png";
import "../css/ServiceSlider.css";
import { Pagination } from "swiper/modules";

const ServiceSlider = () => {
  const cardData = Array(12).fill({
    title: "Abdominal Ultrasound",
    description: "Long-term success is ensured by the implant.",
    price: "$40-$44",
    rating: 5,
    reviews: 16,
    image: service1,
  });

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4 service-slider-heading">More Services</h2>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="service-card border-0 mb-5">
              <img
                src={card.image}
                className="card-img-top"
                alt={card.title}
              />
              <div className="service-body">
                <div className="d-flex align-items-center mb-2">
                  <div className="text-warning me-2">
                    {"★".repeat(card.rating)}
                  </div>
                  <span className="text-muted">({card.reviews})</span>
                </div>
                <h5 className="service-title">{card.title}</h5>
                <p className="service-text text-muted">{card.description}</p>
                <p className="service-price">{card.price}</p>
              </div>
              <div className="position-absolute top-0 end-0 m-2">
                <button className="btn btn-light p-1 rounded-circle">
                  <AddToBookmark />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    <div className="see-all-btn-div"> 
    <button className="see-all-service-btn">See all</button>
    </div>
    </div>
  );
};

export default ServiceSlider;
