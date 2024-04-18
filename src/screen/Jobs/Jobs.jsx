import React, { useEffect } from "react";
import { ServicesImg } from "../../Constant/Const";
import JobHero from "./Components/JobHero/JobHero";
import "./Jobs.css";

const Jobs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <JobHero />
      <div className="jobOfferSection">
        <div className="container">
          <div className="row">
            <h3 className="job-opening-heading HeadingForJob">
              <span>3</span> JOB <span>OPENINGS</span>
              <div className="jobsRow">
                {"123".split("").map((item, index) => (
                  <JobCard key={index} />
                ))}
              </div>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;

function JobCard() {
  return (
    <div className="v1">
      <header>
        <div className="row">
          <div className="col-md-12 col-sm-10">
            <div className="row">
              <div className="col-md-5">
                <div className="job-info">
                  <h4>
                    <a href="https://webbuggs.com/jobs/wordpress-backend-developer/">
                      <span className="job-title">
                        WordPress Backend Developer
                      </span>
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="job-description">
        <div id="sjb_less_content_566">
          <p>
            WEBBUGGS&nbsp;seeking a&nbsp;WordPress / PHP
            Developer&nbsp;responsible for both back-end and front-end
            development, including creating WordPress themes customizations,
            plugins development &amp; especially WordPr...
          </p>
        </div>
        <div className="sjb-apply-now-btn">
          <p>
            <a id="quick-apply-btn" className="btn btn-primary " job_id="566">
              Quick Apply
            </a>
            <a className="btn btn-primary">Read More</a>
          </p>
        </div>
      </div>
    </div>
  );
}
