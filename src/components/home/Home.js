import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div
        className="  p-3 text-gray-500"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <div className="lg:w-4/5 md:w-full lg:mx-auto flex lg:justify-between lg:items-center lg:flex-row md:flex-row flex-col md:justify-between md:items-center lg:px-0 md:px-0 pl-2">
          <Link style={{ color: "#3E084C" }} className="font-bold ">
            হোম
          </Link>
          <Link className=" hover:text-fuchsia-900 lg:mt-0 md:lg-0 mt-3">
            জিমের সরঞ্জাম
          </Link>
          <Link className=" hover:text-fuchsia-900 lg:mt-0 md:lg-0 mt-3">
            জিমের পোশাক
          </Link>
          <Link className=" hover:text-fuchsia-900 lg:mt-0 md:lg-0 mt-3">
            সাপ্লিমেন্টস
          </Link>
          <Link className=" hover:text-fuchsia-900 lg:mt-0 md:lg-0 mt-3">
            {" "}
            হ্যান্ড গ্রিপ
          </Link>
          <Link className=" hover:text-fuchsia-900 lg:mt-0 md:lg-0 mt-3">
            {" "}
            পুশ আপ বার
          </Link>
          <Link className=" hover:text-fuchsia-900 lg:mt-0 md:lg-0 mt-3">
            আমাদের সম্পর্কে
          </Link>
          <Link className=" hover:text-fuchsia-900 lg:mt-0 md:lg-0 mt-3">
            যোগাযোগ
          </Link>
        </div>
      </div>
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
