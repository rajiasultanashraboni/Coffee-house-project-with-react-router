import React from "react";
import banner from "../assets/banner.jpg"

const Banner = () => {
  return (
    <div
      className="hero min-h-[600px] md:min-h-[550px] mb-5 w-full md:w-[80%] mx-auto"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="w-[70%] mx-auto">
          <h1 className="mb-5 text-green-200 text-5xl font-bold">Welcome to our coffee house</h1>
          <p className="mb-5">
          Where the aroma of freshly brewed coffee meets cozy ambiance. Whether you're looking for a peaceful spot to work or a place to relax with friends, Coffee House offers the perfect blend of warmth and comfort. Our expertly crafted coffee beans and delightful pastries will make every visit feel like a little getaway. Come for the coffee, stay for the experience.
          </p>
          <button className="btn bg-green-400 text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
