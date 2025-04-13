import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="">
      <div role="tablist" className="tabs w-[80%] mx-auto flex justify-between items-center  mt-8 ">
        {categories.map((category,idx) => (
          <Link to={`/category/${category.category}`} key={idx} role="tab" className="tab text-2xl">
            {category.category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
