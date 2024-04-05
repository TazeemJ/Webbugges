import React from "react";
import HeroSecBlog from "./Section/HeroSecBlog";
import "./Blog.css";
import Card from "./Components/Card";

const Blog = () => {
  return (
    <div>
      <HeroSecBlog />
      <section className="blog-section">
        <div className="container blog-page-content">
          <div className="row">
            <div className="col-12 blog-heading">
              <h2 className="heading">
                Our Latest <span>News</span> and <span>Blogs</span>
              </h2>
              <p className="discription">
                Stay up-to-date with our latest blogs and news. We share tips,
                tricks, and insights on a variety of topics to help you grow
                your business.
              </p>
            </div>
          </div>
          <div className="row">
            {"123456789".split("").map((item, index) => (
              <Card key={index} />
            ))}
            <Card />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
