import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
  const courseDetails = useLoaderData();

  const { name, title, details, picture } = courseDetails;
  return (
    <div className="card card-compact bg-base-100 shadow-xl p-2">
      <div className="flex items-center">
        <h2 className="card-title text-2xl font-bold text-left">{title}</h2>

        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className="tooltip-left tooltip"
              data-tip="react-to-pdf"
            >
              <FaFileDownload className="text-2xl cursor-pointer"></FaFileDownload>
            </button>
          )}
        </Pdf>
      </div>
      <figure>
        <img className="rounded" src={picture} alt="" />
      </figure>
      <div className="card-body" ref={ref}>
        <h2 className="card-title uppercase font-bold text-2xl">{name}</h2>
        <div>
          <p className="text-xl">{details}</p>
        </div>
        <div className="card-actions justify-end">
          <Link
            to="/premium"
            className="bg-sky-600 px-4 py-2 rounded uppercase text-white font-semibold"
          >
            Get Premium Access
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
