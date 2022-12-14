import React from "react";
import { Link } from "react-router-dom";

const CoursesCard = ({ course }) => {
  const { name, title, picture } = course;

  return (
    <div className="card card-compact w-full shadow-sm bg-base-100 hover:shadow-xl mb-5 rounded">
      <figure>
        <img className="w-full h-[400px]" src={picture} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title uppercase font-bold">{name}</h2>
        <p className="text-lg">{title}</p>
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

export default CoursesCard;
