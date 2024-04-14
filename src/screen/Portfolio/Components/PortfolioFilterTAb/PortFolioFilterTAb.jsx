// App.js

import React, { useState } from "react";
import "./PortfolioFilterTAb.css";

const PortfolioFilterTAb = () => {
  const images = [
    {
      category: "people",
      source:
        "http://timesofindia.indiatimes.com/thumb/msid-50354079,width-400,resizemode-4/50354079.jpg",
    },
    {
      category: "people",
      source:
        "http://timesofindia.indiatimes.com/thumb/msid-50354079,width-400,resizemode-4/50354079.jpg",
    },
    {
      category: "people",
      source:
        "http://timesofindia.indiatimes.com/thumb/msid-50354079,width-400,resizemode-4/50354079.jpg",
    },
    {
      category: "people",
      source:
        "http://timesofindia.indiatimes.com/thumb/msid-50354079,width-400,resizemode-4/50354079.jpg",
    },
    {
      category: "people",
      source:
        "http://timesofindia.indiatimes.com/thumb/msid-50354079,width-400,resizemode-4/50354079.jpg",
    },
    {
      category: "people",
      source:
        "http://timesofindia.indiatimes.com/thumb/msid-50354079,width-400,resizemode-4/50354079.jpg",
    },
    {
      category: "places",
      source:
        "https://upload.wikimedia.org/wikipedia/commons/5/5e/Budapest_place_heros.jpg",
    },
    {
      category: "food",
      source:
        "http://www.langtonsmithhealth.com/wp-content/uploads/food-sugars.jpg",
    },
    {
      category: "objects",
      source:
        "https://imgct1.aeplcdn.com/img/400/cars/generic/Maruti-Suzuki-Alto-K10-Top-10-Small-Automatic-Cars-In-India.png",
    },
    // Add more images and categories as needed
  ];
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredImages =
    selectedCategory === "All Categories"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (
    <div className="container">
      <div className="portfolioFilter">
        <ul className="portfolio-filter text-center">
          <li>
            <a
          
              onClick={() => handleCategoryChange("All Categories")}
              className={
                selectedCategory === "All Categories"
                  ? "current effect2"
                  : "effect2"
              }
            >
              All Categories
            </a>
          </li>
          <li>
            <a
             
              onClick={() => handleCategoryChange("people")}
              className={
                selectedCategory === "people" ? "current effect2" : "effect2"
              }
            >
              People
            </a>
          </li>
          <li>
            <a
             
              onClick={() => handleCategoryChange("places")}
              className={
                selectedCategory === "places" ? "current effect2" : "effect2"
              }
            >
              Places
            </a>
          </li>
          <li>
            <a
             
              onClick={() => handleCategoryChange("food")}
              className={
                selectedCategory === "food" ? "current effect2" : "effect2"
              }
            >
              Food
            </a>
          </li>
          <li>
            <a
             
              onClick={() => handleCategoryChange("objects")}
              className={
                selectedCategory === "objects" ? "current effect2" : "effect2"
              }
            >
              Objects
            </a>
          </li>
        </ul>
      </div>
      <div className="portfolioContainer">
        {filteredImages.map((image, index) => (
          <div key={index} className={`portfolio-item ${image.category}`}>
            <img className="img-responsive" src={image.source} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioFilterTAb;
