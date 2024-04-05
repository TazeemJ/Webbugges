import React from "react";
import { ServicesImg } from "../../Constant/Const";
import HeroSection from "../../Components/HeroSection/HeroSection";
import "./Products.css";
import Webdevelopment from "./Components/Webdevelopment/Webdevelopment";
const Product = () => {
  return (
    <div>
      <HeroSection
        col={5}
        img={"https://webbuggs.com/wp-content/uploads/2023/10/Group-10236.png"}
      />
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
      <Webdevelopment Data={{ Direction: true }} />
      <Webdevelopment Data={{ Direction: false }} />
      <Webdevelopment Data={{ Direction: true }} />
      <Webdevelopment Data={{ Direction: false }} />
      <Webdevelopment Data={{ Direction: true }} />
      <div className="mx-auto h-50 w-50">
        <img src={ServicesImg} alt="error" />
      </div>
    </div>
  );
};

export default Product;
