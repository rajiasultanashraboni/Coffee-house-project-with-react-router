import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import coffeeImage from "../assets/nutrition.png"
import { addFavorite } from "../jsFile";

const CoffeesDetails = () => {

  const handleFavorite =(coffee)=>{
    addFavorite(coffee)
    // getAllfavorites(coffee)
  }

  const { id } = useParams();
  const data = useLoaderData();
  const [coffee, setCoffee] = useState({});
  useEffect(() => {
    const singleData = data.find((coffee) => coffee.id == id);
    setCoffee(singleData);
  }, [data, id]);
  return (
    <div className="w-[80%] mx-auto my-5 space-y-7">
      <h1 className="text-2xl font-thin">{coffee.description}</h1>
      <img
        className="rounded-lg h-[620px] w-full overflow-hidden object-cover"
        src={coffee.image}
        alt=""
      />

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-thin">{coffee.name}</h1>
          <p>Popularity:{coffee.popularity}</p>
          <p>rating:{coffee.rating}</p>
        </div>
        <div>
          <button onClick={()=>{handleFavorite(coffee)}} className="btn btn-warning">Add Favorite</button>
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-thin">Making Process</h1>
        <p className="text-base">{coffee.making_process}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="w-[50%]">
          {/* ingredients  */}
          <div>
            <h1 className="text-2xl font-thin mb-4">Ingredients:</h1>
            <ul>
              {coffee.ingredients?.map((i, idx) => (
                <li key={idx} className="list-disc list-inside space-y-1">
                  {i}
                </li>
              ))}
            </ul>
          </div>
          {/* nutrition  */}
          <div>
            <h1 className="text-2xl font-thin mb-4">Nutrition:</h1>
            <ul className="list-disc list-inside space-y-1">
              <li>calories: {coffee.nutrition_info?.calories}</li>
              <li>fat: {coffee.nutrition_info?.fat}</li>
              <li>carbohydrates: {coffee.nutrition_info?.carbohydrates}</li>
              <li>protein: {coffee.nutrition_info?.protein}</li>
            </ul>
          </div>
        </div>
        <div className="w-[50%]">
            <img className="w-full h-full" src={coffeeImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CoffeesDetails;
