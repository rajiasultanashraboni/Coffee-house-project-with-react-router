import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { getAllfavorites } from "../jsFile";
import Card from "../components/Card";

const Dashboard = () => {
  const [coffees, setCoffes] = useState([]);
  // console.log(coffees)
  useEffect(() => {
    const favorite = getAllfavorites();
    setCoffes(favorite);
  }, []);
  return (
    <>
      <Heading
        title="Welcome to dashboard"
        subtitle="Browse coffee by category to discover your favorite brews, from rich espresso to smooth lattes—all in one place."
      ></Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto mt-5">
        {coffees.map((coffee, idx) => (
          <Card key={idx} coffee={coffee} coffees={coffees} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
