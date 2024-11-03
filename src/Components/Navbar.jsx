// Navbars.jsx
import React, { useState, useEffect } from 'react';
import '../Styles/Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerSidebar from './HamburgerSidebar';

const Navbars = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`container-fluid navbar-container ${isScrolled ? 'scrolled' : ''}`}>
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
        </div>
    );
};

export default Navbars;
