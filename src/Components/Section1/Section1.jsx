import React from "react";
import "./Section1.css";
import Section1BackImg from "../../assets/images/Section1BackImg.png";

const Section1 = () => {
  return (
    <section
      className="section-1"
      style={{
        backgroundImage: `url('${Section1BackImg}')`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col section-1-col">
            <div className="global-video-wraper">
              <div className="section-1-text-container ">
                <p className="section-1-text " data-aos="zoom-in">
                  Get Online, Get Noticed
                  <span>Your Complete Digital Journey Starts Here!</span>
                </p>
              </div>
              <div className="global-video-wraper-btn">
                <a className="section-1-button">Get started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
