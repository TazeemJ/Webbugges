import React from "react";
import HeroSecBlog from "./Section/HeroSecBlog";
import "./Blog.css";
import Card from "./Components/Card";

const Blog = () => {
  return (
    <div>
      <HeroSecBlog />
      <section class="blog-section">
        <div class="container blog-page-content">
          <div class="row">
            <div class="col-12 blog-heading">
              <h2 class="heading">
                Our Latest <span>News</span> and <span>Blogs</span>
              </h2>
              <p class="discription">
                Stay up-to-date with our latest blogs and news. We share tips,
                tricks, and insights on a variety of topics to help you grow
                your business.
              </p>
            </div>
          </div>
          <div className="row">
            {"123456789".split("").map((item, index) => (
              <Card />
            ))}
            <Card />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
