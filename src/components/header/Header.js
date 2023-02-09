import React from "react";
import logo from "../../images/Logo.png";
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { CiMail, CiUser, CiShoppingCart, CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#3E084C" }}>
        <div className="mx-5 flex justify-between items-center text-white p-2">
          <div className="flex items-center">
            <span className="flex items-center">
              <BsTelephone className="mr-1"></BsTelephone> ০১৭৭৬৯৬৩৯০৭
            </span>
            <span className="flex items-center ml-5">
              <CiMail className="mr-1"></CiMail> info@example.com
            </span>
          </div>
          <div>
            <p>
              সকল প্রোডাক্টের উপর ৩০% ছাড়!{" "}
              <span className="btn btn-sm">বিস্তারিত</span>{" "}
            </p>
          </div>
          <div>
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
        <div>
          <input
            type="text"
            placeholder="অনুসন্ধান করুন"
            className="w-96 input input-bordered rounded-none input-sm"
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
            <CiUser className="text-3xl mr-3"></CiUser>
          </span>
          <span>
            <CiShoppingCart className="text-3xl mr-3"></CiShoppingCart>
          </span>
        </div>
      </div>
      <div
        className="  p-3 text-gray-500"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <div className="w-4/5 mx-auto flex justify-between items-center">
          <Link style={{ color: "#3E084C" }} className="font-bold">
            হোম
          </Link>
          <Link>জিমের সরঞ্জাম</Link>
          <Link>জিমের পোশাক</Link>
          <Link>সাপ্লিমেন্টস</Link>
          <Link> হ্যান্ড গ্রিপ</Link>
          <Link> পুশ আপ বার</Link>
          <Link>আমাদের সম্পর্কে</Link>
          <Link>যোগাযোগ</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
