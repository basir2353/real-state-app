import React from "react";
import "./residence.css";                     
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../utils/slider.json";
import { sliderSettings } from "../utils/common";

function Residences() {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart"> 
          <span className="orangeText">Best Choice</span>
          <span className="primaryText"> Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span className="">{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondayText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Residences;
const SliderButton = () => {
  let swiper = useSwiper();
  return (
    <div className="flexCenter r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slidePrev()}>&gt;</button>
    </div>
  );
};
