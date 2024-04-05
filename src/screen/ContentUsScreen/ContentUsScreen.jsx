import React from "react";
import { ServicesImg } from "../../Constant/Const";

import HeroSection from "../../Components/HeroSection/HeroSection";
import ContentUs from "../../Components/Form/Form";

const ContentUsScreen = () => {
  return (
    <div>
      <HeroSection
        img={"https://webbuggs.com/wp-content/uploads/2023/07/Group-10216.png"}
      />
      <ContentUs />
    </div>
  );
};

export default ContentUsScreen;
