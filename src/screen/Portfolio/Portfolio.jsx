import React, { useEffect } from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Section1 from "../../Components/Section1/Section1";
import ContentUs from "../../Components/Form/Form";
import Welcome from "./Components/Welcome/Welcome";
import PortfolioFilterTAb from "./Components/PortfolioFilterTAb/PortFolioFilterTAb";

import PortFolioHeroImg from "../../assets/images/PortFolioHeroImg.png";

const Jobs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection img={PortFolioHeroImg} col={5} />

      <PortfolioFilterTAb />
      <Welcome />
      <Section1 />
      <ContentUs />
    </div>
  );
};

export default Jobs;
