import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Category = () => {
  const course = useLoaderData();

  const { name, picture } = course;
  return (
    <div className="card card-compact bg-base-100 hover:shadow-xl shadow rounded p-2">
      <figure>
        <img
          className="rounded h-[400px] w-full bg-black"
          src={picture}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title uppercase font-bold">{name}</h2>
        <div className="card-actions justify-end">
          <Link
            to={`/course/${course._id}`}
            className="px-4 py-2 bg-sky-600 text-white rounded uppercase font-semibold"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
