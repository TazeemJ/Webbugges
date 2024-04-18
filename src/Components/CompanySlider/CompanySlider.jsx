import React, { useRef, useState } from "react";
import "./CompanySlider.css";
import Slider from "react-slick";
import CompanylogoSliderImg from "../../assets/images/CompanylogoSliderImg.png";

const CompanySlider = ({ dots }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null);

  return (
    <section className="our-client-slider-sec ">
      <div className="container our-clint-logos">
        <div className="row">
          <Slider {...settings} ref={sliderRef}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
              (item, index) => {
                return (
                  <div key={index} className="item mb-6">
                    <img src={CompanylogoSliderImg} alt="" />
                  </div>
                );
              }
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CompanySlider;
