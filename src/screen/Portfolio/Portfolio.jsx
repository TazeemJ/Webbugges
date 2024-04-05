import React from "react";
import { ServicesImg } from "../../Constant/Const";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Section1 from "../../Components/Section1/Section1";
import ContentUs from "../../Components/Form/Form";
import Welcome from "./Components/Welcome/Welcome";

const Jobs = () => {
  return (
    <div>
      <HeroSection
        img={"https://webbuggs.com/wp-content/uploads/2023/07/Group-10220.png"}
        col={5}
      />
      <div className="mx-auto h-50 w-50">
        <img src={ServicesImg} alt="error" />
      </div>
      <Welcome />
      <Section1 />
      <ContentUs />
    </div>
  );
};

export default Jobs;
