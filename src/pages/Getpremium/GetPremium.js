import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const GetPremium = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="mockup-window border border-sky-600 bg-sky-600 rounded relative">
      <div className="flex text-white justify-center px-4 py-40 border-t border-base-300 bg-black">
        <h1 className="text-3xl font-bold uppercase">
          Hello,{" "}
          {user?.displayName ? <>{user?.displayName}</> : <>Unknown User</>} !!!
          <br></br> Now you are in premium zone
        </h1>
        <div className="absolute bottom-20">
          <Link
            to="/courses"
            className="px-4 py-2 rounded uppercase bg-sky-600 font-semibold"
          >
            Back to courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetPremium;
