import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Section1 from "../../Components/Section1/Section1";
import ContentUs from "../../Components/Form/Form";
import Welcome from "./Components/Welcome/Welcome";
import PortfolioFilterTAb from "./Components/PortfolioFilterTAb/PortFolioFilterTAb";
const Jobs = () => {
  return (
    <div>
      <HeroSection
        img={"https://webbuggs.com/wp-content/uploads/2023/07/Group-10220.png"}
        col={5}
      />
      <PortfolioFilterTAb />

      <Welcome />
      <Section1 />
      <ContentUs />
    </div>
  );
};

export default Jobs;
