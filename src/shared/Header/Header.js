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
      <div className="flex-none">
        <p className="pr-4">{user?.displayName}</p>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Header;
