import React from "react";
import "./JobHero.css";
import JobsHeroImg from "../../../../assets/images/JobsHeroImg.png";

const JobHero = () => {
  return (
    <header
      className="my-job-header"
      style={{
        backgroundImage: `url("${JobsHeroImg}")`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="header-content-wraper">
              <h1>CAREERS AT WEBBUGGS</h1>
              <h5>
                We at Webbuggs offer a mix of growth prospects, advance
                learning, fair play and amazing work culture.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default JobHero;
