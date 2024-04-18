import React from "react";
import "./Webdevelopment.css";
import ProductWebdevelomentImg from "../../../../assets/images/ProductWebdevelomentImg.png";

const Webdevelopment = ({ Data }) => {
  return (
    <section id="webdevelopment" className="web-developement section-commen">
      <div className="container">
        <div className={`row ${!Data.Direction ? "flex-row-reverse" : ""}`}>
          <div className="col-lg-6">
            <div
              className="image-wraper"
              // data-aos="fade-right"
              data-aos={`${!Data.Direction ? "fade-left" : "fade-right"}`}
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <img src={ProductWebdevelomentImg} alt="" />
            </div>
          </div>
          <div className="col-lg-6 pr-0">
            <div className="content-wraper">
              <div className="section-sub-heading">
                <img
                  src="https://webbuggs.com/wp-content/uploads/2022/04/HYDING-TOP.png"
                  alt=""
                />
                <h6>Branding</h6>
              </div>
              <div className="section-heading">
                <h3>
                  AUGMENTED REALITY <br />
                  <span
                    style={{ color: "#000" }}
                    className="section-sub-heding"
                  >
                    for
                  </span>
                  <span
                    style={{ color: "#03A6D9", textTransform: "capitalize" }}
                    className="section-sub-heding"
                  >
                    E-Commerce Store
                  </span>
                </h3>
              </div>
              <h5>
                Our team handles custom solutions of all sizes from large-scale
                technology projects to simple website design projects.
              </h5>
              <ul>
                <li>
                  <h6>Product Visualization</h6>
                </li>
                <li>
                  <h6>AR Measurements</h6>
                </li>
                <li>
                  <h6>AR Shopping Lists</h6>
                </li>
                <li>
                  <h6>Shopping Cart</h6>
                </li>
              </ul>
              <a>learn more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Webdevelopment;
