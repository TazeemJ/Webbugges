import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [selectedService, setSelectedService] = useState("adkhfahsf");

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };
  return (
    <section id="contact-us" className="contact-form-sec">
      <div className="container">
        <div className="row contact-form-row">
          <div className="col col-lg-5  col-sm-12 col-12 contact-form-left-content-wrape-col">
            <div className="contact-form-left-content-wrape">
              <div className="contact-heading">
                <h3>Get in Touch!</h3>
              </div>
              <div className="get-in-touch-email-col">
                <img
                  src="https://webbuggs.com/wp-content/uploads/2022/04/Asset-30.png"
                  alt=""
                />
                <div className="get-in-touch-email-content">
                  <p>FOR QUERIES</p>
                  <a href="mailto:info@webbuggs">info@webbuggs</a>
                </div>
              </div>
              <div className="get-in-touch-email-col">
                <img
                  src="https://webbuggs.com/wp-content/uploads/2022/04/Asset-31-1.png"
                  alt=""
                />
                <div className="get-in-touch-email-content">
                  <p>SKYPE</p> <a href="skype:webbuggs ">webbuggs </a>
                </div>
              </div>

              <div className="section-8-icon-box">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/webbuggs/mycompany/"
                  className="section-8-icon-link"
                >
                  <i className="fab fa-linkedin-in section-8-icon"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/webbuggs/"
                  className="section-8-icon-link"
                >
                  <i className="fab fa-instagram section-8-icon"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/WebBuggs"
                  className="section-8-icon-link"
                >
                  <i className="fab fa-facebook-f section-8-icon"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col col-lg-7  col-sm-12 col-12">
            <div className="row section-8-blue-box">
              <div className="col">
                <div className="section-8-content-container">
                  <h2 className="section-8-blue-box-heading">
                    Drop us a line.
                  </h2>
                  <p className="section-8-blue-box-description">
                    Tell us how we can help you.
                  </p>
                  <form id="contact-form-data">
                    <div className="section-8-input-container">
                      <div className="row name-email-row">
                        <div className="col-md-6 name-col">
                          <input
                            id="contact-form-name"
                            className="section-8-input"
                            type="text"
                            placeholder="Name"
                          />
                        </div>
                        <div className="col-md-6 email-col">
                          <input
                            required
                            id="contact-form-email"
                            className="section-8-input"
                            type="email"
                            placeholder="Email *"
                          />
                        </div>
                      </div>
                      <div className="row phone-indsuty-row">
                        <div className="col-md-6 phone-col">
                          <input
                            id="contact-form-phone"
                            className="section-8-input"
                            type="number"
                            placeholder="Phone"
                          />
                        </div>
                        <div className="col-md-6 insustry-col">
                          <select
                            required
                            className="section-8-input"
                            name="Services_item"
                            id="Services_item"
                            value={selectedService}
                            onChange={handleServiceChange}
                          >
                            <option value="" disabled>
                              Services *
                            </option>
                            <option value="Web Designing">Web Designing</option>
                            <option value="Web Development">
                              Web Development
                            </option>
                            <option value="App Development">
                              App Development
                            </option>
                            <option value="NFT & Blockchain">
                              NFT & Blockchain
                            </option>
                            <option value="Branding">Branding</option>
                          </select>
                        </div>
                        <textarea
                          required
                          id="contact-form-massage"
                          className="section-8-text-area"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div className="section-8-send-button-container">
                        <button className="section-8-form-links">Send</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
