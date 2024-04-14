import React, { useRef, useState } from "react";
import "./CompanySlider.css";
import Slider from "react-slick";

const CompanySlider = ({ dots }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
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

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index * settings.slidesToScroll);
  };

  const renderCustomDots = () => {
    const dotsArray = [];
    const totalSlides = 8; // Assuming total slides are 8
    const startIndex = Math.max(0, currentSlide - 1);
    const endIndex = Math.min(startIndex + 2, totalSlides - 1);

    for (let i = startIndex; i <= endIndex; i++) {
      dotsArray.push(
        <li
          key={i}
          className={i === currentSlide ? "slick-active" : ""}
          onClick={() => handleDotClick(i)}
        ></li>
      );
    }
    return dots && dotsArray;
  };

  const sliderRef = useRef(null);

  return (
    <section className="our-client-slider-sec ">
      <div className="container our-clint-logos">
        <div className="row">
          <Slider {...settings} ref={sliderRef}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
              return (
                <div key={index} className="item mb-6">
                  <img
                    src="https://webbuggs.com/wp-content/uploads/2022/03/Asset-149.png"
                    alt=""
                  />
                </div>
              );
            })}
          </Slider>
          <ul className="custom-dots">{renderCustomDots()}</ul>
        </div>
      </div>
    </section>
  );
};

export default CompanySlider;
