import React from "react";
import Home from "../home/Home";
import Blog from "../blog/Blog";
import Category from "../category/Category";

const Banner = () => {
  return (
    <div>
      <Home></Home>
      <Category></Category>
      <Blog></Blog>
    </div>
  );
};

export default Banner;
