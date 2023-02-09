import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="text-box text-left">
          <h1 style={{ color: "#3E084C" }} className="font-bold text-4xl">
            ব্যায়াম করুন, সুস্থ থাকুন
          </h1>
          <p className="text-2xl my-14">সকল প্রোডাক্টের উপর ৩০% ছাড়!</p>
          <button
            style={{ backgroundColor: "#3E084C" }}
            className="btn font-bold"
          >
            ক্লিক করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
