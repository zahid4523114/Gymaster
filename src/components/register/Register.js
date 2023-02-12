import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-hot-toast";

const Register = () => {
  const { userRegister, userUpdate } = useContext(AuthContext);
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const fullName = firstName + " " + lastName;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(fullName, email, password);

    const authInfo = {
      firstName,
      lastName,
      email,
      role: author,
    };

    //create user with email and password
    userRegister(email, password)
      .then((result) => {
        const user = result.user;
        userUpdate(fullName);
        console.log(user);

        //set data to db
        fetch("https://gymaster-server-kohl.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(authInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              form.reset();
              toast.success("রেজিস্ট্রেশন সম্পন্ন হয়েছে");
              navigate("/banner");
            }
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleRegister} className="my-20">
        <h1 className="lg:w-1/2 md:w-3/4 w-8/12 mx-auto lg:text-4xl md:text-4xl text-2xl ">
          Register Your Account
        </h1>
        <div className="lg:w-1/2 md:w-3/4 w-8/12 mx-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-x-8 lg:gap-y-8 md:gap-x-8 md:gap-y-8">
          <div className="">
            <div className="mt-8">
              <input
                required
                type="text"
                name="firstName"
                placeholder="First Name"
                className="input input-bordered rounded-none w-full"
              />
            </div>
            <div className="mt-8">
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered rounded-none w-full"
              />
            </div>
          </div>
          <div className="">
            <div className="mt-8">
              <input
                required
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="input input-bordered rounded-none w-full"
              />
            </div>
            <div className="mt-8">
              <input
                required
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered rounded-none w-full"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto lg:w-1/2 md:w-3/4 w-8/12">
          <div className="my-5">
            <span className="mr-3">
              <input
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
                className="text-gray-600 mr-1"
                type="radio"
                value="Admin"
                name="user"
                id=""
              />
              Admin
            </span>
            <span>
              <input
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
                className="text-gray-600 mr-1"
                type="radio"
                value="User"
                name="user"
                id=""
              />
              User
            </span>
          </div>
          <button className="btn bg-white text-gray-600 hover:bg-white rounded-none">
            Sign Up
          </button>
          <br />
          <br />
          <Link className="mt-3 text-gray-600 link link-hover" to={"/banner"}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
