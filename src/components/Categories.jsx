import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="">
      <div role="tablist" className="tabs w-[80%] mx-auto flex justify-between items-center  mt-8 ">
        {categories.map((category,idx) => (
          <NavLink to={`/category/${category.category}`} key={idx} role="tab" className={({isActive})=>`tab text-2xl ${isActive?'bg-green-400 !text-white rounded-lg':''}`}>
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
