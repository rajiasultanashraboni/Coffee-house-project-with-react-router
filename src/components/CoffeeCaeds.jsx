import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";

const CoffeeCaeds = () => {
    const navigate = useNavigate()
  const [coffees, setCoffees] = useState([]);
  const data = useLoaderData();
  //   console.log(coffees);
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (coffee) => coffee.category === category
      );
      setCoffees(filteredByCategory);
    } else {
      setCoffees(data.slice(0, 6));
    }
  }, [category, data]);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto mt-5">
        {coffees.map((coffee, idx) => (
          <Card key={idx} coffee={coffee} coffees={coffees} />
        ))}
      </div>
      <div className=" w-[80%] mx-auto mt-5">
      <button className="btn bg-green-400 text-white" onClick={()=>{navigate('/coffees')}}>View all</button>
      </div>

      {/* jodi ek page e card gulo dekhate chai  */}
      {/* <div className=" w-[80%] mx-auto mt-5">
      <button className="btn bg-green-400 text-white" onClick={()=>(setCoffees(data))}>View all</button>
      </div> */}
    </>
  );
};

export default CoffeeCaeds;
