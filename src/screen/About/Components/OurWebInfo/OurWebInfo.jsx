import React from "react";
import "./OurWebInfo.css";

const OurWebInfo = () => {
  return (
    <section className="who-we">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="who-we-wrapper">
              <h4>Who We Are</h4>
              <h3>
                We're building <br />
                the modern web
              </h3>
              <p>
                WEBBUGGS team has completed more than 500+ projects on time and
                budget in different domains, including finance, retail,
                automotive, real estate, transportation, education, tourism.
                WEBBUGGS has been working with companies located in different
                countries, including: USA, UK, Germany, Switzerland, &amp; also
                in Europe.
              </p>
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="who-we-image-col">
              <img
                src="https://webbuggs.com/wp-content/uploads/2022/04/Webp.net-resizeimage-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWebInfo;
