import React, { useRef, useState } from "react";
import "./Services.css";
import Slider from "react-slick";

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section className="section-6 services-slider" id="our-services">
      <div className="container">
        <div className="row section-6-row-1">
          <div className="col">
            <div className="section-heading">
              <h3>
                our <span className="clr">services</span>
              </h3>
            </div>
            <div className="section-desc">
              <p>
                We help companies focus on their business while we take care of
                their tech needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row services-row">
          <Slider ref={sliderRef} {...settings}>
            {[1, 2, 3, 4].map((item, index) => {
              return (
                <div key={index} className="item mb-6">
                  <div
                    className="serives-wraper"
                    style={{
                      backgroundImage: `url("https://webbuggs.com/wp-content/uploads/2022/10/Rectangle-1111.png")`,
                    }}
                  >
                    <img
                      src="https://webbuggs.com/wp-content/uploads/2022/10/Group-10204.svg"
                      alt=""
                    />
                    <h4>App Development </h4>
                  </div>
                </div>
              );
            })}
          </Slider>

          <div>
            <button onClick={goToPrevSlide}>Previous</button>
            <button onClick={goToNextSlide}>Next</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
