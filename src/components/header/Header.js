import React, { useContext } from "react";
import logo from "../../images/Logo.png";
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { CiMail, CiUser, CiShoppingCart, CiSearch } from "react-icons/ci";
import { AuthContext } from "../context/AuthProvider";

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);
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
            {user?.email ? (
              <Link onClick={userSignOut}> লগ আউট </Link>
            ) : (
              <Link to={"/logIn"}> লগ ইন </Link>
            )}
            <Link className="ml-2" to={"/register"}>
              রেজিস্টার
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar flex justify-between items-center bg-base-100 px-5">
        <div>
          <Link to={"/banner"}>
            <img className="w-44" alt="" src={logo}></img>
          </Link>
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
          <Link to={"/users"}>
            <CiUser className="text-3xl lg:mr-3 md:mr-3 m-1"></CiUser>
          </Link>
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
    </div>
  );
};

export default Header;
