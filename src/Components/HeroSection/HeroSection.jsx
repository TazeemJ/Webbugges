import React from "react";
import "./HeroSection.css";
import HomeHeroImg from "../../assets/images/HomeHeroImg.png";
import HeroBackImg from "../../assets/images/HeroBackImg.webp";

const HeroSection = ({ img, col }) => {
  return (
    <section
      className="section-hero"
      id="Hero_section"
      style={{
        backgroundImage: `url('${HeroBackImg}')`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className={col ? `col-lg-7` : `col-lg-8`}>
            <div className="hero-text-container">
              <div className="hero-heading-container">
                <h2 className="hero-heading">
                  Ready to Elevate Your <span>Online Presence?</span>
                </h2>
                <p className="hero-heading-description">
                  Let Our Expertise Unleash Your <span>Digital</span> Success!
                </p>
                <a>get a quote</a>
              </div>
            </div>
          </div>
          <div className={col ? `col-lg-${col}` : `col-lg-4`}>
            <div
              className="home-hero-image"
              data-aos-once="true"
              data-aos="zoom-in"
            >
              <img src={img ? img : HomeHeroImg} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
