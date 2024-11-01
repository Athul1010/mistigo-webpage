// Navbars.jsx
import React, { useState } from 'react';
import '../Styles/Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerSidebar from './HamburgerSidebar';

const Navbars = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='container sidbar-section'>
            <div className='nav-first'>
                <div>
                    <h1>hexnode</h1>
                </div>
                <div className='nav-content'>
                    <span>Why Hexnode</span>
                    <span>Features</span>
                    <span>Platforms</span>
                    <span>Customers</span>
                </div>
            </div>
            <div>
                <button className='day'>14 DAY FREE TRIAL</button>
                <span onClick={toggleSidebar} style={{ cursor: 'pointer' }} className='hamburger-icon'>
                    <GiHamburgerMenu />
                </span>
            </div>
            <HamburgerSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
};

export default Navbars;
