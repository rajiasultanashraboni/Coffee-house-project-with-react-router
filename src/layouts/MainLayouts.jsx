import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div className='min-h-screen'>
            {/* navbar  */}
            <Navbar></Navbar>
            {/* dynamich section  */}
            <div className='flex-grow'>
            <Outlet></Outlet>
            </div>
            {/* footer  */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;