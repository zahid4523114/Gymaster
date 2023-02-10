import React from "react";
import logo from "../../images/Logo.png";
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { CiMail, CiUser, CiShoppingCart, CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#3E084C" }}>
        <div className="mx-5 flex justify-between items-center flex-wrap text-white p-2">
          <div className="flex items-center">
            <span className="flex items-center">
              <BsTelephone className="mr-1"></BsTelephone> ০১৭৭৬৯৬৩৯০৭
            </span>
            <span className="flex items-center ml-5">
              <CiMail className="mr-1"></CiMail> info@example.com
            </span>
          </div>
          <div className="lg:my-0 md:my-0 my-2">
            <p>
              সকল প্রোডাক্টের উপর ৩০% ছাড়!{" "}
              <span className="btn btn-sm">বিস্তারিত</span>{" "}
            </p>
          </div>
          <div className="lg:my-0 md:my-0 my-2">
            <Link to={"/logIn"}> লগ ইন </Link>
            <Link className="ml-2" to={"/signUp"}>
              রেজিস্টার
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar flex justify-between items-center bg-base-100 px-5">
        <div>
          <img className="w-44" alt="" src={logo}></img>
        </div>
        <div className="lg:flex lg:items-center md:flex md:items-center hidden">
          <input
            type="text"
            placeholder="অনুসন্ধান করুন"
            className="lg:w-96 md:w-60 w-40 input input-bordered rounded-none input-sm"
          />
          <span
            style={{ backgroundColor: "#3E084C" }}
            className="btn btn-sm text-2xl rounded-none"
          >
            <CiSearch></CiSearch>
          </span>
        </div>
        <div>
          <span>
            <CiUser className="text-3xl lg:mr-3 md:mr-3 m-1"></CiUser>
          </span>
          <span>
            <CiShoppingCart className="text-3xl lg:mr-3 md:mr-3"></CiShoppingCart>
          </span>
        </div>
      </div>

      {/* alternative for mobile device  */}
      <div className="lg:hidden md:hidden flex items-center m-5">
        <input
          type="text"
          placeholder="অনুসন্ধান করুন"
          className="w-80 input input-bordered rounded-none input-sm"
        />
        <span
          style={{ backgroundColor: "#3E084C" }}
          className="btn btn-sm text-2xl rounded-none"
        >
          <CiSearch></CiSearch>
        </span>
      </div>

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
    </div>
  );
};

export default Header;
