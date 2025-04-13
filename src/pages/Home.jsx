import React from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';
import Categories from '../components/Categories';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            {/* banner  */}
            <Banner></Banner>
            {/* heading  */}
            <Heading title='Browse coffee by category' subtitle='Browse coffee by category to discover your favorite brews, from rich espresso to smooth lattes—all in one place.'></Heading>
            {/* categories  */}
            <Categories categories={categories}></Categories>
            {/* cards  */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;