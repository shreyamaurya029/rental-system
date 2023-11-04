import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <div className="papa">
      <div class="container h-100">
      <div class="d-flex justify-content-center h-100">
        <div class="searchbar">
          <input class="search_input" type="text" name="" placeholder="Search..."/>
          <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
        </div>
      </div>
    </div>
      <Slider {...settings} className="hero__slider">
        <div className="slider__item slider__item-01 mt0">
          <Container>
            <div className="slider__content ">
              <h4 className="text-light mb-3">For Rent ₹70 Per Day</h4>
              <h1 className="text-light mb-4">Reserve Now and Get 40% Off</h1>

              <button className="btn reserve__btn mt-4">
                <Link to="/cars">Reserve Now</Link>
              </button>
            </div>
          </Container>
        </div>

        <div className="slider__item slider__item-02 mt0">
          <Container>
            <div className="slider__content ">
              <h4 className="text-light mb-3">Buy A Second hand vehicle</h4>
              <h1 className="text-light mb-4">Get 30% Off</h1>

              <button className="btn reserve__btn mt-4">
                <Link to="/cars">Reserve Now</Link>
              </button>
            </div>
          </Container>
        </div>

        <div className="slider__item slider__item-03 mt0">
          <Container>
            <div className="slider__content ">
              <h4 className="text-light mb-3">Sell your Vehicle on fair Price</h4>
              <h1 className="text-light mb-4">Put your vehicle on Rent</h1>

              <button className="btn reserve__btn mt-4">
                <Link to="/cars">Reserve Now</Link>
              </button>
            </div>
          </Container>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
