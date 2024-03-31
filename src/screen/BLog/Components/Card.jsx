import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div class="col-lg-4 blog-page-post-div">
      <div class="feature-image">
        <a href="https://webbuggs.com/shopify-store-redesign-giving-your-online-presence-a-fresh-boost/">
          <img
            width="410"
            height="232"
            src="https://webbuggs.com/wp-content/uploads/2023/08/shopify-store-redesign.jpg"
            class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
            alt="Shopify Redesign"
            decoding="async"
            fetchpriority="high"
            srcset="https://webbuggs.com/wp-content/uploads/2023/08/shopify-store-redesign.jpg 410w, https://webbuggs.com/wp-content/uploads/2023/08/shopify-store-redesign-300x170.jpg 300w"
            sizes="(max-width: 410px) 100vw, 410px"
          />
        </a>
      </div>
      <h2 class="post-title">
        <a>Shopify Store Redesign: Giving Your Online Presence a Fresh Boost</a>
      </h2>
      <p class="post-content">
        Is your online store feeling a bit stale? Are your conversion rates not
        where you’d like them to be? Your Shopify store used to look great, but
        now it might seem old and unattractive to people who want to buy
        something. Changing how it looks isn’t just about making it pretty; it’s
        about making it
      </p>
    </div>
  );
};

export default Card;
