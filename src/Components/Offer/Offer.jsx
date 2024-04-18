import React from "react";
import "./Offer.css";
import WhatWeImg from "../../assets/images/WhatWeImg.png";

const Offer = () => {
  return (
    <section className="what-offer car">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section-heading">
              <h3>
                what we <span>offer!</span>
              </h3>
            </div>
            <div className="section-desc how-work">
              <p className="section-desc">
                Hello i am hashir We understand that every project is unique, so
                we’ll provide bespoke quotations based on your specific
                requirements. But just to give you an idea these are our
                Starting Prices for some of the frequent services we provide.
              </p>
            </div>
          </div>
        </div>

        <div className="row tab_row">
          <div className="col">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 ">
                <div className="tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="v-pills-home">
                    <div className="main-heading-content">
                      <div className="what-offer-content">
                        {[1, 2, 3, 4, 5, 6].map((item, index) => {
                          return (
                            <div key={index} className="what-offer-box-wraper">
                              <div className="box-top-img">
                                <img src={WhatWeImg} alt="" />
                              </div>
                              <div className="what-offer-box">
                                <div className="box-text-img">
                                  <h4>Brochure Website</h4>
                                  <img
                                    src="https://webbuggs.com/wp-content/uploads/2022/10/Group-10045@2x.png"
                                    alt=""
                                  />
                                </div>
                                <h3>Starting From $299</h3>
                                <h6>
                                  A Brochure website made with a premade theme
                                  adjusted to your house style. We add all the
                                  functional pages that you need, optimize SEO
                                  and add Google Analytics and Google Tag
                                  Manager. The complete website can be ready
                                  within a few days.
                                </h6>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
