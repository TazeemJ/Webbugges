import React, { useEffect } from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Section from "../../Components/Section/Section";
import Section1 from "../../Components/Section1/Section1";
import Services from "../../Components/Services/Services";
import HomeWork from "../../Components/HomeWork/HomeWork";
import Offer from "../../Components/Offer/Offer";
import Review from "../../Components/Review/Review";
import Form from "../../Components/Form/Form";
import CompanySlider from "../../Components/CompanySlider/CompanySlider";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSection />
      <Section />
      <Section1 />
      <Services />
      <HomeWork />
      <Offer />
      <Review />
      <Form />
      <CompanySlider dots={true} />
    </>
  );
};

export default Home;
