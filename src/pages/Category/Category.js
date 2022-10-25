import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Category = () => {
  const course = useLoaderData();

  const { name, picture, title } = course;
  return (
    <div className="card card-compact bg-base-100 shadow-xl rounded p-2">
      <h2 className="card-title text-2xl font-bold text-left">{title}</h2>
      <figure>
        <img className="rounded" src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title uppercase font-bold">{name}</h2>
        <div className="card-actions justify-end">
          <Link
            to={`/course/${course._id}`}
            className="px-4 py-2 bg-sky-600 text-white rounded font-semibold"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
