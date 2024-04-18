import React, { useEffect } from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import WebDevServices from "./Components/WebDevServices/WebDevServices";
import HomeWork from "../../Components/HomeWork/HomeWork";
import CompanySlider from "../../Components/CompanySlider/CompanySlider";
import ServicesHeroImg from "../../assets/images/ServicesHeroImg.png";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection img={ServicesHeroImg} col={5} />
      <section className="help-sec" id="secHeading">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="help-content-wraper">
                <div className="section-heading">
                  <h3
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className="aos-init aos-animate"
                  >
                    WHAT WE <span>DO</span>
                  </h3>
                </div>
                <i
                  data-aos="fade-up"
                  data-aos-duration="600"
                  className="fa-solid fa-caret-down aos-init aos-animate"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WebDevServices direction={true} />
      <WebDevServices direction={false} />
      <WebDevServices direction={true} />
      <WebDevServices direction={false} />
      <WebDevServices direction={true} />
      <HomeWork />
      <CompanySlider dots={true} />
    </div>
  );
};

export default Services;
