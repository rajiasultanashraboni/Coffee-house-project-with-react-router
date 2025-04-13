import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div >
            {/* navbar  */}
            <div className='h-18'>
            <Navbar></Navbar>
            </div>
            {/* dynamich section  */}
            <div className='min-h-[calc(100vh-280px)]'>
            <Outlet></Outlet>
            </div>
            {/* footer  */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;