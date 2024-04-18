import React from "react";
import "./WebDevServices.css";

const WebDevServices = ({ direction }) => {
  return (
    <section id="webdevelopment" className="web-developement section-commen">
      <div className="container">
        <div className={`row ${direction && "flex-row-reverse"} `}>
          <div className="col-lg-6">
            <div
              className="image-wraper"
              data-aos={`${direction ? "fade-left" : "fade-right"}`}
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
            >
              <img
                src="https://webbuggs.com/wp-content/uploads/2023/07/Group-10226.png"
                alt=""
                className="aos-init aos-animate"
              />
            </div>
          </div>
          <div className="col-lg-6 pr-0">
            <div className="content-wraper">
              <div className="section-sub-heading">
                <img
                  src="
                    https://webbuggs.com/wp-content/uploads/2022/04/HYDING-TOP.png"
                  alt=""
                />
                <h6>Branding</h6>
              </div>
              <div className="section-heading">
                <h3>
                  {" "}
                  Web <span className="typedevelopment">DEVELOPMENT</span>
                </h3>
              </div>
              <h5>
                Our team handles custom solutions of all sizes from large-scale
                technology projects to simple website design projects.
              </h5>
              <ul>
                <li>
                  <img src="https://webbuggs.com/wp-content/uploads/2023/03/Group-7388.png" />
                  <h6>Drag &amp; Drop Websites</h6>
                </li>
                <li>
                  <img src="https://webbuggs.com/wp-content/uploads/2023/03/Group-7389.png" />
                  <h6>Design &amp; Development</h6>
                </li>
                <li>
                  <img src="https://webbuggs.com/wp-content/uploads/2023/03/Path-9968.png" />
                  <h6>PSD to Wordpress</h6>
                </li>
                <li>
                  <img src="https://webbuggs.com/wp-content/uploads/2023/03/Group-7390.png" />
                  <h6>Theme Development</h6>
                </li>
                <li>
                  <img src="https://webbuggs.com/wp-content/uploads/2023/03/Group-7391.png" />
                  <h6>Plugin Development</h6>
                </li>
                <li>
                  <img src="https://webbuggs.com/wp-content/uploads/2023/03/Group-7392.png" />
                  <h6>Custom Module Development</h6>
                </li>
                <li>
                  <img src="https://webbuggs.com/wp-content/uploads/2023/03/Group-7394.png" />
                  <h6>Real Estate Listing</h6>
                </li>
                <li>
                  <img src="https://webbuggs.com/wp-content/uploads/2023/03/Group-7395.png" />
                  <h6>Landing Page</h6>
                </li>
                <li>
                  <img src="https://webbuggs.com/wp-content/uploads/2023/03/Group-7393.png" />
                  <h6>Listing Sites</h6>
                </li>
                <li>
                  <img src="https://webbuggs.com/wp-content/uploads/2023/03/Group-7396.png" />
                  <h6>Membership Sites </h6>
                </li>
                <li>
                  <img src="https://webbuggs.com/wp-content/uploads/2023/03/Group-7397.png" />
                  <h6>Third Party Integration</h6>
                </li>
              </ul>
              <a href="/portfolio/?type=web">learn more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevServices;
