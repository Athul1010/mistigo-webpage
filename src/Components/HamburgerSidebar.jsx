// HamburgerSidebar.jsx
import React, { useEffect } from 'react';
import '../Styles/HamburgerSidebar.css';

const HamburgerSidebar = ({ isOpen, toggleSidebar }) => {

    useEffect(() => {
        // Add or remove the no-scroll class based on isOpen
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        // Clean up by removing the class when the component is unmounted
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);
    return (
        <>
        {isOpen && <div className='overlay' onClick={toggleSidebar}></div>}

            <div className={`sidebar ${isOpen ? 'show' : ''}`}>
                <div className="sidebar-content">
                    
                    <div className="close-btn-container">
                        <button className="close-btn" onClick={toggleSidebar}>×</button>
                    </div>
                    
                    
                    <div className="list-unstyled">
                        <div className='types1'>
                            <span>Why Hexnode</span>
                        </div>
                        <div className='types2'>
                            <span>Features</span>
                        </div>
                        <div className='types3'>
                            <span>Platforms</span>
                        </div>
                        <div className='types4'>
                            <span>Customers</span>
                        </div>
                        <button className='days'>14 DAY FREE TRIAL</button>
                        <div className='types5'>
                            <span>Login</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HamburgerSidebar;
