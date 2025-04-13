import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const CoffeeCaeds = () => {
  const coffees = useLoaderData();
  console.log(coffees);
  const { category } = useParams();
  console.log(category);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {coffees.map((coffee, idx) => (
        <Card key={idx} coffee={coffee} />
      ))}
    </div>
  );
};

export default CoffeeCaeds;
