import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="navbar bg-base-100 drop-shadow-lg rounded mb-6">
      <div className="flex-1">
        <Link to="/" className="lg:text-3xl text-sky-600 uppercase font-bold">
          Computer Science
        </Link>
        <Link
          className="ml-4 font-semibold lg:text-lg hover:text-sky-600 uppercase"
          to="/"
        >
          Home
        </Link>
        <Link
          className="ml-4 font-semibold lg:text-lg hover:text-sky-600 uppercase"
          to="/courses"
        >
          Courses
        </Link>
        <Link
          className="ml-4 font-semibold lg:text-lg hover:text-sky-600 uppercase"
          to="/question"
        >
          FAQ
        </Link>
        <Link
          className="ml-4 font-semibold lg:text-lg hover:text-sky-600 uppercase"
          to="/blog"
        >
          Blog
        </Link>
      </div>
      <div className="flex-none">
        <p className="pr-4">{user?.email}</p>
        {user?.uid ? (
          <>
            <button
              onClick={handleLogOut}
              className="bg-sky-600 text-white rounded px-3 py-2 pr-2"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <button className="bg-sky-600 text-white rounded px-3 py-2 mr-2">
              <Link to="/login">Login</Link>
            </button>
            <button className="bg-sky-600 text-white rounded px-3 py-2">
              <Link to="/register">Register</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
