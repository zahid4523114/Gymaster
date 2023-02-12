import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-hot-toast";

const LogIn = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const { userLogin, passwordReset } = useContext(AuthContext);

  const [resetEmail, setResetMail] = useState();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    //login user with email and password
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        toast.success("লগইন সম্পন্ন হয়েছে");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const err = error.message;
        // const message = str.split(" ")[2];
        toast.error(err);
      });
  };

  const resetEmailOnChange = (e) => {
    setResetMail(e.target.value);
  };

  const handleResetMail = () => {
    passwordReset(resetEmail)
      .then(() => {
        toast.success("পাসওয়ার্ড রিসেট লিংক আপনার জিমেইল এ পাঠানো হয়েছে..!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <form onSubmit={handleLogIn} className="my-20">
        <h1 className="lg:w-1/2 md:w-3/4 w-8/12 mx-auto lg:text-4xl md:text-4xl text-2xl ">
          Login
        </h1>
        <div className="lg:w-1/2 md:w-3/4 w-8/12 mx-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-x-8 lg:gap-y-8 md:gap-x-8 md:gap-y-8">
          <div className="">
            <div className="my-8">
              <input
                required
                onChange={resetEmailOnChange}
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
                required
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered rounded-none w-full"
              />
            </div>
            <Link
              onClick={handleResetMail}
              className="text-gray-600 link link-hover"
            >
              Forgot Password
            </Link>
          </div>
        </div>
        <div className="mx-auto lg:w-1/2 md:w-3/4 w-8/12">
          <button className="btn bg-white text-gray-600 hover:bg-white rounded-none">
            Sign In
          </button>
          <br />
          <br />
          <Link className="mt-3 text-gray-600 link link-hover" to={"/register"}>
            Create Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
