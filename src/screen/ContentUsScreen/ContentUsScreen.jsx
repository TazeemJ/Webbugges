import React, { useEffect } from "react";
import { ServicesImg } from "../../Constant/Const";

import HeroSection from "../../Components/HeroSection/HeroSection";
import ContentUs from "../../Components/Form/Form";
import ContentHeroImg from "../../assets/images/ContentHeroImg.png";

const ContentUsScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection img={ContentHeroImg} />
      <ContentUs />
    </div>
  );
};

export default ContentUsScreen;
