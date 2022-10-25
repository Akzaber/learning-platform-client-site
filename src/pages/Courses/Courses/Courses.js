import React from "react";
import { useLoaderData } from "react-router-dom";
import CoursesCard from "../../../shared/CoursesCard/CoursesCard";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div>
      {courses.map((course) => (
        <CoursesCard key={course._id} course={course}></CoursesCard>
      ))}
    </div>
  );
};

export default Courses;
