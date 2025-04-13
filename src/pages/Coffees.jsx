import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const Coffees = () => {
    const data = useLoaderData();
    const [coffees,setCoffees]=useState(data)

    const handleSort = (sortBy)=>{
        if(sortBy==='popularity'){
            const sorted = [...data].sort((a ,b)=>b.popularity-a.popularity);
            setCoffees(sorted)
        }
        else if(sortBy==='rating'){
            const sorted = [...data].sort((a ,b)=>b.rating-a.rating);
            setCoffees(sorted)
        }
    }
  return (
    <>
      <div className="flex w-[80%] mx-auto justify-between my-12 items-center">
        <div>
          <h1 className="text-2xl font-thin">
            Sort coffees by popularity and ratings
          </h1>
        </div>
        <div className="flex gap-4 ">
          <button onClick={()=>handleSort('popularity')} className="btn btn-primary text-white">sort by popularity</button>
          <button onClick={()=>handleSort('rating')} className="btn btn-primary text-white">sort by rating</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto mt-5">
        {coffees.map((coffee, idx) => (
          <Card key={idx} coffee={coffee} />
        ))}
      </div>
    </>
  );
};

export default Coffees;
