// App.js

import React, { useState } from "react";
import "./PortfolioFilterTAb.css";
import { images } from "../../../../Constant/Const";
const PortfolioFilterTAb = () => {
  const [selectedCategory, setSelectedCategory] = useState("App Development");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredImages =
    selectedCategory === "All Categories"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (
    <div className="tabs-list">
      <div className="container">
        <div className="row"></div>
        <div className="col">
          <div className="tabs-list-top-content">
            <h3>
              500 <sup>+</sup>
            </h3>
            <h4>Delievered Projects</h4>
            <p>
              Check out our recent projects to see how we’ve helped businesses
              like yours grow and take things to the next level.
            </p>
          </div>
        </div>
        <div className="portfolioFilter">
          <ul className="portfolio-filter text-center">
            <li>
              <a
                onClick={() => handleCategoryChange("App Development")}
                className={
                  selectedCategory === "App Development"
                    ? "current effect2"
                    : "effect2"
                }
              >
                App Development
              </a>
            </li>
            <li>
              <a
                onClick={() => handleCategoryChange("Design")}
                className={
                  selectedCategory === "Design" ? "current effect2" : "effect2"
                }
              >
                Design
              </a>
            </li>
            <li>
              <a
                onClick={() => handleCategoryChange("Social Media")}
                className={
                  selectedCategory === "Social Media"
                    ? "current effect2"
                    : "effect2"
                }
              >
                Social Media
              </a>
            </li>
            <li>
              <a
                onClick={() => handleCategoryChange("Web Development")}
                className={
                  selectedCategory === "Web Development"
                    ? "current effect2"
                    : "effect2 "
                }
              >
                Web Development
              </a>
            </li>
          </ul>
        </div>
        <div className="portfolioContainer ">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="portfolio-item col-md-6 col-lg-4 col-xl-4 mb-4"
            >
              <div className={`post-wraper  ${image.category}`}>
                <div className="post-img">
                  <img className="img-responsive" src={image.source} alt="" />
                </div>
                <div className="post-content">
                  <div className="post-content-overlay">
                    <div className="post-title">
                      <h3>running</h3>
                    </div>
                    <div className="post-descrption">
                      <p>Website Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioFilterTAb;
