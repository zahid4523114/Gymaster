import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/home/Home";
import Banner from "../components/banner/Banner";
import LogIn from "../components/log_in/LogIn";
import Blog from "../components/blog/Blog";
import Category from "../components/category/Category";
import Register from "../components/register/Register";
import Users from "../components/users/Users";
import PrivateRoute from "../components/privateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/banner",
        element: <Banner></Banner>,
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/category",
        element: <Category></Category>,
      },
      {
        path: "/users",
        element: (
          <PrivateRoute>
            <Users></Users>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
