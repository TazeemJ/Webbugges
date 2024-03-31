import React from "react";
import "./HomeWork.css";

const HomeWork = () => {
  return (
    <section className="how-work-sec">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section-heading">
              <h3>
                How Does <span>It Work?</span>{" "}
              </h3>
            </div>
            <div className="section-desc how-work">
              <p>
                We take care of your projects with proven agile methods that are
                designed to get all stakeholders in alignment. Our workflow
                amplifies collaboration and faster turnarounds to achieve even
                the most ambitious goals.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="how-work-img">
              <img
                src="https://webbuggs.com/wp-content/uploads/2022/10/Group-10060@2x-2.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 how-work-col">
            <div className="how-work-wrpaer">
              <div className="how-slider-content">
                <h3>
                  {" "}
                  <span>01. </span>Intro Call
                </h3>
                <div className="section-desc">
                  <p>
                    We would like to get to know your business. Together we look
                    at the state of your current website. We discuss the
                    objective of the new website and what needs to be done.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWork;
