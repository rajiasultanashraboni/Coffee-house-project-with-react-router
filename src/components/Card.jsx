import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

const Card = ({ coffee }) => {
  const { pathname } = useLocation();
  const { popularity, type, origin, rating, category, image, name } = coffee;
  return (
    <div>
      <Link to={`/coffee/${coffee.id}`}>
        <div className="gap-6">
          <div className="card bg-base-100 shadow-sm relative ">
          {pathname === '/dashboard' && (
        <p className="absolute -top-5 -right-5 bg-red-500 text-white px-2 py-1 rounded cursor-pointer">
         <AiFillDelete size={24} />
        </p>
      )}
            <figure className="h-[250px]">
              <img
                className="w-full h-full object-cover"
                src={image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>Category: {category}</p>
              <p>Type: {type}</p>
              <p>origin:{origin}</p>
              <p>rating:{rating}</p>
              <p>popularity:{popularity}</p>
            </div>
          </div>
        </div>
      </Link>
      
    </div>
  );
};

export default Card;
