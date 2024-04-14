import React, { useRef, useState } from "react";
import "./HomeWork.css";
import Slider from "react-slick";

const HomeWork = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className="how-work-sec">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section-heading">
              <h3>
                How Does <span>It Work?</span>
              </h3>
            </div>
            <div className="section-desc how-work">
              <p>
                We take care of your projects with proven agile methods that are
                designed to get all stakeholders in alignment. Our workflow
                amplifies collaboration and faster turnarounds to achieve even
                the most ambitious goals.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="how-work-img">
              <img
                src="https://webbuggs.com/wp-content/uploads/2023/03/Group-10060@2x-2.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 how-work-col">
            <Slider {...settings}>
              {[1, 2, 3, 4, 5].map((item, index) => {
                return (
                  <div className="how-work-wrpaer" key={index}>
                    <div className="how-slider-content">
                      <h3>
                        <span>{index}. </span>Intro Call
                      </h3>
                      <div className="section-desc">
                        <p>
                          We would like to get to know your business. Together
                          we look at the state of your current website. We
                          discuss the objective of the new website and what
                          needs to be done.
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWork;
