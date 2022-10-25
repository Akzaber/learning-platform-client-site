import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const courseDetails = useLoaderData();

  const { name, title, details, picture } = courseDetails;
  return (
    <div className="card card-compact bg-base-100 shadow-xl p-2">
      <div>
        <h2 className="card-title text-2xl font-bold text-left">{title}</h2>
      </div>
      <figure>
        <img className="rounded" src={picture} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title uppercase font-bold text-2xl">{name}</h2>
        <p className="text-xl">{details}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
