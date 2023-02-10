import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(firstName, lastName, email, password);
  };
  return (
    <div>
      <form onSubmit={handleRegister} className="my-20">
        <h1 className="lg:w-1/2 md:w-3/4 w-8/12 mx-auto lg:text-4xl md:text-4xl text-2xl ">
          Register Your Account
        </h1>
        <div className="lg:w-1/2 md:w-3/4 w-8/12 mx-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-x-8 lg:gap-y-8 md:gap-x-8 md:gap-y-8">
          <div className="">
            <div className="my-8">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="input input-bordered rounded-none w-full"
              />
            </div>
            <div className="my-8">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered rounded-none w-full"
              />
            </div>
          </div>
          <div className="">
            <div className="my-8">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="input input-bordered rounded-none w-full"
              />
            </div>
            <div className="my-8">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered rounded-none w-full"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto lg:w-1/2 md:w-3/4 w-8/12">
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
