import React from "react";
import "./Welcome.css";
const Welcome = () => {
  return (
    <section className="welcome-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="welcome-sec-content">
              <h4>Welcome to Our Portfolio of Excellence!</h4>
              <p>
                Explore our proudest accomplishments, where innovation meets
                artistry. Witness custom designs, seamless interfaces, and the
                ingenuity in every line of code.
              </p>
              <p>
                From captivating websites to stunning apps, our portfolio
                reflects expertise across diverse industries.
              </p>
              <p>Unleash your brand's brilliance with our winning solutions.</p>
              <p>Contact us to be part of our success story!</p>
              <a>Get Connected with Webbuggs</a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="excellence-image-wraper">
              <img
                src="https://webbuggs.com/wp-content/uploads/2023/09/image-1.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
