import React from "react";
import "./Foot.css";
const Footer = () => {
  return (
    <>
      <section className="section-footer_custom ">
        <div className="container top-bar-footer">
          <div className="row">
            <div className="col-lg-4">
              <div className="center-footer-row-2-8-row">
                <div className="center-footer-left-img-container">
                  <img
                    className="center-footer-left-img"
                    width={"100%"}
                    src="https://webbuggs.com/wp-content/themes/wp-bootstrap-starter/inc/assets/web_buggs_images/main_page/min footer logo.png"
                    alt="Footer Logo"
                  />
                </div>
                <div className="center-footer-center-content">
                  <p className="center-footer-center-text">
                    Your Cyber Space Existence Managers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-8">
              <div className="row footer-links-row center-footer-row-2">
                <div className="">
                  <div className="footer-sec-heading">
                    <h3>Services</h3>
                  </div>
                  <div className="footer-sec-list">
                    <ul className="footer-services-list">
                      <li className="footer-list-item">
                        <a>
                          <i className="fa-solid fa-angle-right"></i>Web
                          Designing
                        </a>
                      </li>
                      <li className="footer-list-item">
                        <a>
                          <i className="fa-solid fa-angle-right"></i>Web
                          Development
                        </a>
                      </li>
                      <li className="footer-list-item">
                        <a>
                          <i className="fa-solid fa-angle-right"></i>Digital
                          Media Marketing
                        </a>
                      </li>
                      <li className="footer-list-item">
                        <a>
                          <i className="fa-solid fa-angle-right"></i>Branding
                        </a>
                      </li>
                      <li className="footer-list-item">
                        <a>
                          <i className="fa-solid fa-angle-right"></i>Remote
                          Resourses Services
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <div className="footer-sec-heading">
                    <h3>Quick Links</h3>
                  </div>
                  <div className="footer-sec-list">
                    <ul className="footer-services-list">
                      <li className="footer-list-item">
                        <a>
                          <i className="fa-solid fa-angle-right"></i>Home
                        </a>
                      </li>
                      <li className="footer-list-item">
                        <a>
                          <i className="fa-solid fa-angle-right"></i>About Us
                        </a>
                      </li>
                      <li className="footer-list-item">
                        <a>
                          <i className="fa-solid fa-angle-right"></i>Services
                        </a>
                      </li>
                      <li className="footer-list-item">
                        <a>
                          <i className="fa-solid fa-angle-right"></i>Products
                        </a>
                      </li>
                      <li className="footer-list-item">
                        <a>
                          <i className="fa-solid fa-angle-right"></i>Games
                        </a>
                      </li>
                      <li className="footer-list-item">
                        <a>
                          <i className="fa-solid fa-angle-right"></i>Contact Us
                        </a>
                      </li>
                      <li className="footer-list-item">
                        <a>
                          <i className="fa-solid fa-angle-right"></i>Careers
                        </a>
                      </li>
                      <li className="footer-list-item">
                        <a>
                          <i className="fa-solid fa-angle-right"></i>Blog
                        </a>
                      </li>
                      <li className="footer-list-item">
                        <a>
                          <i className="fa-solid fa-angle-right"></i>Privacy
                          Policy
                        </a>
                      </li>
                      <li className="footer-list-item">
                        <a>
                          <i className="fa-solid fa-angle-right"></i>Terms &amp;
                          Conditions
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <div className="footer-sec-contact-list">
                    <div className="footer-sec-heading">
                      <h3>Contact info</h3>
                    </div>
                    <div className="footer-contact-wraper">
                      <div className="center-footer-row-1-content-container">
                        <div className="center-footer-row-1-icon-container">
                          <i className="fa-brands fa-skype"></i>
                        </div>
                        <p className="center-footer-row-1-p">
                          <a> skype</a>
                        </p>
                      </div>
                      <div className="center-footer-row-1-content-container">
                        <div className="center-footer-row-1-icon-container">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <p className="center-footer-row-1-p">
                          <a> info@webbuggs</a>
                        </p>
                      </div>
                    </div>
                    <div className="icon-box-container">
                      <a className="section-footer-icon-link ">
                        <i className="fab fa-facebook-f section-footer-icon facebook"></i>
                      </a>
                      <a className="section-footer-icon-link ">
                        <i className="fab fa-instagram section-footer-icon instagram"></i>
                      </a>
                      <a className="section-footer-icon-link ">
                        <i className="fab fa-linkedin-in section-footer-icon linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footerbar-sec">
        <div className="container-fluid footer-bottom-bar">
          <div className="row">
            <div className="col">
              <p className="footer-bottom-bar-p">
                <span>WEBBUGGS</span>. All Right Reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
