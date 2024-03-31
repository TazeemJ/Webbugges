import React from "react";
import "./Review.css";
const Review = () => {
  return (
    <section className="review-sec">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section-heading">
              <h3>
                what our clients <span>say?</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="review-slider-wrpaer">
              <div className="review-slier-content">
                <img
                  src="http://webbuggs.com/wp-content/uploads/2022/10/Group-10182@2x.png"
                  alt=""
                />
                <div className="section-desc">
                  <p>
                    Team went above and beyond for this project. The needs of
                    the website were often changing, and They were very helpful
                    in navigating a large amount of constant changes and
                    feedback.
                  </p>
                </div>
                <h5>Cassandra Shelton</h5>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="review-main-img">
              <img
                src="https://webbuggs.com/wp-content/uploads/2022/10/Group-10059@2x.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
