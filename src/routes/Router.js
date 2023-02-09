import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/home/Home";
import Banner from "../components/banner/Banner";
import LogIn from "../components/log_in/LogIn";
import SignUp from "../components/sign_up/SignUp";
import Blog from "../components/blog/Blog";
import Category from "../components/category/Category";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/category",
        element: <Category></Category>,
      },
    ],
  },
]);
