import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';

const Coffees = () => {
    const data = useLoaderData()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto mt-5">
        {data.map((coffee, idx) => (
          <Card key={idx} coffee={coffee} />
        ))}
      </div>
    );
};

export default Coffees;