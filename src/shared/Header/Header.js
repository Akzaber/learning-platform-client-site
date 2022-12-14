import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { FaAlignJustify, FaUser } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="navbar bg-base-100 drop-shadow-lg rounded mb-52 md:mb-6">
      <div className="flex-1">
        <div>
          <img
            className="w-[40px] rounded-full"
            src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?w=740&t=st=1666797993~exp=1666798593~hmac=7229e4e4a044540f463ce1b7050f54e806cc6b6fd42f5489064de0c14d67389a"
            alt=""
          />
        </div>
        <Link
          to="/"
          className="lg:text-3xl text-sky-600 uppercase font-bold lg:font-extrabold"
        >
          Computer <span className="text-black">Science</span>
        </Link>
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="cursor-pointer">
            <FaAlignJustify className="w-[30px]"></FaAlignJustify>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content text-white menu p-1 shadow bg-black rounded w-40 mt-4"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/question">FAQ</Link>
            </li>
            <li>
              <Link to="blog">Blog</Link>
            </li>
          </ul>
        </div>
        <Link
          className="md:ml-4 md:block hidden md:font-semibold text-lg hover:text-sky-600 uppercase"
          to="/"
        >
          Home
        </Link>
        <Link
          className="md:ml-4 md:block hidden ml-2 md:font-semibold md:text-lg hover:text-sky-600 uppercase"
          to="/courses"
        >
          Courses
        </Link>
        <Link
          className="md:ml-4 md:block hidden ml-2 lg:font-semibold md:text-lg hover:text-sky-600 uppercase"
          to="/question"
        >
          FAQ
        </Link>
        <Link
          className="md:ml-4 md:block hidden ml-1 md:font-semibold md:text-lg hover:text-sky-600 
          uppercase"
          to="/blog"
        >
          Blog
        </Link>
      </div>
      <div className="flex-none">
        <label className="swap swap-rotate md:mr-2 mr-1">
          <input type="checkbox" />

          <svg
            className="swap-on fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg
            className="swap-off fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        {user?.photoURL ? (
          <>
            <div
              className="tooltip tooltip-bottom cursor-pointer"
              data-tip={user?.displayName}
            >
              <img
                className="w-[40px] rounded-full mr-2"
                src={user.photoURL}
                alt=""
              />
            </div>
          </>
        ) : (
          <>
            <FaUser className="md:mr-2 mr-1 text-xl"></FaUser>
          </>
        )}
        {user?.uid ? (
          <>
            <button
              onClick={handleLogOut}
              className="bg-black text-white rounded px-3 py-2 uppercase"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <button className="bg-sky-600 text-white rounded px-3 py-2 mr-2  uppercase">
              <Link to="/login">Login</Link>
            </button>
            <button className="bg-black text-white rounded px-3 py-2 uppercase">
              <Link to="/register">Register</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
