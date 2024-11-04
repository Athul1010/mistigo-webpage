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


    // Function to scroll to a section by its ID
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={`container-fluid navbar-container ${isScrolled ? 'scrolled' : ''}`}>
            <div className='container sidbar-section'>
                <div className='nav-first'>
                    <div>
                        <h2 className='fw-bold'>hexnode</h2>
                    </div>
                    <div className='nav-content'>
                        <span onClick={() => scrollToSection("reason_container")}>Why Hexnode</span>
                        <span onClick={() => scrollToSection("management_container")}>Features</span>
                        <span onClick={() => scrollToSection("platform_container")}>Platforms</span>
                        <span onClick={() => scrollToSection("customers_container")}>Customers</span>
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
