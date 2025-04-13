import React from "react";

const Card = ({ coffee, coffeess }) => {
  const { popularity,type,origin, rating, category, image, name } = coffee;
  return (
    <div className="gap-6">
        <div className="card bg-base-100 shadow-sm ">
      <figure className="h-[250px]">
        <img className="w-full h-full object-cover"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          Category: {category}
        </p>
        <p>
          Type: {type}
        </p>
        <p>
        origin:{origin}
        </p>
        <p>
        rating:{rating}
        </p>
        <p>
        popularity:{popularity}
        </p>
      </div>
    </div>
    </div>
  );
};

export default Card;
