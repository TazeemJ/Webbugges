import React from "react";
import "./HeroSecBlog.css";
import BlogHeroImg from "../../../assets/images/BlogHeroImg.webp";

const HeroSecBlog = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url("${BlogHeroImg}")` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="hero-left-content-wraper">
              <h1>
                <span></span>Blog
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSecBlog;
