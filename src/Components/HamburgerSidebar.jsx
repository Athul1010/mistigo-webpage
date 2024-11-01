// HamburgerSidebar.jsx
import React from 'react';
import '../Styles/HamburgerSidebar.css';

const HamburgerSidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`sidebar ${isOpen ? 'show' : ''}`}>
            <div className="sidebar-content">
                {/* Close button positioned at the top */}
                <div className="close-btn-container">
                    <button className="close-btn" onClick={toggleSidebar}>×</button>
                </div>
                
                {/* List of items */}
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
    );
};

export default HamburgerSidebar;
