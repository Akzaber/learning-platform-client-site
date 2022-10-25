import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100 drop-shadow-lg rounded mb-6">
      <div className="flex-1">
        <Link to="/" className="text-3xl text-sky-600 uppercase font-bold">
          Computer Science
        </Link>
        <Link
          className="ml-4 font-semibold text-lg hover:text-sky-600 uppercase"
          to="/"
        >
          Home
        </Link>
        <Link
          className="ml-4 font-semibold text-lg hover:text-sky-600 uppercase"
          to="/courses"
        >
          Courses
        </Link>
        <Link
          className="ml-4 font-semibold text-lg hover:text-sky-600 uppercase"
          to="/question"
        >
          FAQ
        </Link>
        <Link
          className="ml-4 font-semibold text-lg hover:text-sky-600 uppercase"
          to="/blog"
        >
          Blog
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="" src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/" className="justify-between">
                {user?.displayName}
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a href="/">Settings</a>
            </li>
            <li>
              <a href="/">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
