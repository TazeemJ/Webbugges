import React from "react";
import "./OurValue.css";
import Value1Img from "../../../../assets/images/Value1Img.png";
import Value2Img from "../../../../assets/images/Value2Img.png";
import Value3Img from "../../../../assets/images/Value3Img.png";
import Value4Img from "../../../../assets/images/Value4Img.png";

const OurValue = () => {
  return (
    <section className="our-values-sec">
      <div className="container">
        <div className="row our-values-sec-row">
          <div className="col-lg-6 our-values-left-card-col">
            <div className="our-values-left-card-wraper">
              <div className="row our-values-cards-row1">
                <div className="col-md-6">
                  <div className="our-values-card-wraper box1">
                    <img src={Value1Img} alt="" />
                    <h4>Authenticity</h4>
                    <h6>
                      Get to know every member of your Webbuggs team as we work
                      together to build trust and reliability as colleagues, not
                      faceless code vendors.
                    </h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="our-values-card-wraper box2">
                    <img src={Value2Img} alt="" />
                    <h4>transparency.</h4>
                    <h6>
                      See accurate estimations of time and resources spent with
                      real-time project tracking software that shows activity,
                      logs and hours worked.
                    </h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="our-values-card-wraper box3">
                    <img src={Value3Img} alt="" />
                    <h4>Communication</h4>
                    <h6>
                      Integrate Webbuggs with your communication apps and work
                      with a dedicated manager to keep everyone in the loop with
                      timelines and conversations.
                    </h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="our-values-card-wraper box4">
                    <img src={Value4Img} alt="" />
                    <h4>Ownership</h4>
                    <h6>
                      Benefit from a software partner that works with you to
                      dial in business requirements and challenge ideas—growing
                      your business as if it’s our own.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div className="our-values-right-wrapper">
              <h4>About Us</h4>
              <h3>our values</h3>
              <h5>
                Webbuggs is a Web development company specializing in emerging
                technologies and value-driven projects. At Webbuggs, we assure
                stability and consistency of our performance by working with
                people who share our four core values.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValue;
