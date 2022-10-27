import { createBrowserRouter, Link } from "react-router-dom";
import Main from "../../layouts/Main";
import Blog from "../../pages/Blog/Blog/Blog";
import Category from "../../pages/Category/Category";
import Courses from "../../pages/Courses/Courses/Courses";
import FAQ from "../../pages/FAQ/FAQ/FAQ";
import GetPremium from "../../pages/Getpremium/GetPremium";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";
import CourseDetails from "../../shared/CourseDetails/CourseDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () =>
          fetch("https://assignment-10-data-server-akzaber.vercel.app/courses"),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-data-server-akzaber.vercel.app/category/${params.id}`
          ),
      },
      {
        path: "/course/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-data-server-akzaber.vercel.app/course/${params.id}`
          ),
      },
      {
        path: "/question",
        element: <FAQ></FAQ>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/premium",
        element: (
          <PrivateRoute>
            <GetPremium></GetPremium>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <>
        <div className="hero min-h-screen bg-red-900">
          <div className="hero-content text-center text-white">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold uppercase">404</h1>
              <h1 className="text-2xl font-extrabold uppercase">
                You're looking a little lost!
              </h1>
              <p className="py-4 text-md">
                Unfortunately the page you are looking for can not be found....{" "}
              </p>
              <Link
                to="/"
                className="bg-sky-600 font-semibold text-white px-4 py-2 rounded uppercase"
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </>
    ),
  },
]);
