import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <img
          src="https://img.freepik.com/free-vector/illustration-social-media-concept_53876-18146.jpg?size=626&ext=jpg"
          className="w-full rounded shadow-2xl"
          alt=""
        />
        <div>
          <h1 className="text-4xl font-bold uppercase">Computer Science</h1>
          <p className="py-6 text-lg">
            Computer Science is the study of computers and computational
            systems. Unlike electrical and computer engineers, computer
            scientists deal mostly with software and software systems; this
            includes their theory, design, development, and application.
          </p>
          <div className="flex justify-end">
            <Link
              to="/courses"
              className="bg-sky-600 px-4 py-2 rounded text-white uppercase font-semibold"
            >
              See The Major Courses of Computer Science
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
