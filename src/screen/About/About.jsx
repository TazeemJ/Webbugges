import React from "react";
import { ServicesImg } from "../../Constant/Const";
import HeroSection from "../../Components/HeroSection/HeroSection";
import OurValue from "./Components/OurValue/OurValue";
import Section1 from "../../Components/Section1/Section1";
import OurWebInfo from "./Components/OurWebInfo/OurWebInfo";

const About = () => {
  return (
    <div>
      <HeroSection
        img={
          "https://webbuggs.com/wp-content/uploads/2023/07/teambusinessmeeting-copy-1.png"
        }
        col={5}
      />
      <OurValue />
      <Section1 />
      <OurWebInfo />
      <div>
        <div className="mx-auto h-50 w-50">
          <img src={ServicesImg} alt="error" />
        </div>
      </div>
    </div>
  );
};

export default About;
