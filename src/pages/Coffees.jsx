import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const Coffees = () => {
  const data = useLoaderData();
  return (
    <>
      <div className="flex w-[80%] mx-auto justify-between my-12 items-center">
        <div>
          <h1 className="text-2xl font-thin">
            Sort coffees by popularity and ratings
          </h1>
        </div>
        <div className="flex gap-4 ">
          <button className="btn btn-warning text-white">sort by popularity</button>
          <button className="btn btn-warning text-white">sort by rating</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto mt-5">
        {data.map((coffee, idx) => (
          <Card key={idx} coffee={coffee} />
        ))}
      </div>
    </>
  );
};

export default Coffees;
