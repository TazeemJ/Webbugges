import React, { useState, useEffect } from "react";
import { ServicesImg } from "../../Constant/Const";
import HeroSection from "../../Components/HeroSection/HeroSection";
import OurValue from "./Components/OurValue/OurValue";
import Section1 from "../../Components/Section1/Section1";
import OurWebInfo from "./Components/OurWebInfo/OurWebInfo";
import CompanySlider from "../../Components/CompanySlider/CompanySlider";
import AboutHeroImg from "../../assets/images/AboutHeroImg.png";

import "./About.css";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection img={AboutHeroImg} col={5} />
      <OurValue />
      <Section1 />
      <OurWebInfo />

      <section className="about-sec">
        <div className="container">
          <div className="row">
            {[33, 100, 299, 66677].map(
              (
                time,
                index // added index for unique keys
              ) => (
                <Counter key={index} stopValue={time} /> // returning Counter component with key prop
              )
            )}
          </div>
        </div>
      </section>

      <CompanySlider />
    </div>
  );
};
export default About;

function Counter({ stopValue }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = stopValue / 100; // Calculate the increment based on stopValue and the number of steps
    let timer;

    const updateCount = () => {
      setCount((prevCount) => {
        const nextCount = prevCount + increment;
        return nextCount >= stopValue ? stopValue : nextCount; // Stop when reaching stopValue
      });
    };

    timer = setInterval(updateCount, 10); // Adjust the interval for smoother animation if needed

    return () => clearInterval(timer);
  }, [stopValue]);

  return (
    <div className="col-lg-3 col-md-6">
      <div className="about-wrap">
        <h3>
          <span className="counter">{Math.floor(count)}</span>+
        </h3>
        <p>Projects completed</p>
      </div>
    </div>
  );
}
