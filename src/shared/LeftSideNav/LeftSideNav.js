import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses-category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="sticky top-0">
      {categories.map((category) => (
        <Link
          className="block"
          to={`/category/${category.id}`}
          key={category.id}
        >
          <button className="bg-sky-600 md:w-11/12 w-full py-3 p-2 mb-6 text-left rounded cursor-pointer text-white font-semibold uppercase">
            {category.name}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
