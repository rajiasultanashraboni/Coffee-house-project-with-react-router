import React from 'react';

const Heading = ({title,subtitle}) => {
    return (
        <div className='flex flex-col w-full md:w-[40%] mx-auto justify-center items-center text-center space-y-2 mt-8'>
            <h1 className='text-3xl font-thin'>{title}</h1>
            <p className='text-gray-600 font-thin'>{subtitle}</p>
        </div>
    );
};

export default Heading;