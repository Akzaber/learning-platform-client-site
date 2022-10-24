import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100 drop-shadow-lg rounded mb-6">
      <div className="flex-1">
        <Link to="/" className="text-xl text-sky-600 font-bold">
          LEARNING Site
        </Link>
        <Link className="ml-2" to="/courses">
          Courses
        </Link>
        <Link className="ml-2" to="/question">
          FAQ
        </Link>
        <Link className="ml-2" to="/blog">
          Blog
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
