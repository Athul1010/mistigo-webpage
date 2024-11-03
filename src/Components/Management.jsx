import React from 'react';
import '../Styles/Management.css'
import zeroTtouch from '../assets/zero-touch.png';
import automation from '../assets/automation.png';
import remotAccess from '../assets/remote-access.png';
import endpoint from '../assets/endpoint-security.png';
import integrations from '../assets/integrations.png';
import appManagement from '../assets/app-management.webp';

const Management = () => {
    return (
        <div className="container management" id='management_container' data-aos="fade-up" data-aos-anchor-placement="center-bottom" >
            <h1 className="manage-title fw-bold text-center mb-5">Powerful Endpoint Management, Built for the Devices You Choose</h1>
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <img src={zeroTtouch} alt="Zero-touch Enrollment" className="img-fluid mb-3" />
                    <div className='manage-content'>
                        <h2 className='text-start fw-bold'>Zero-touch Enrollment</h2>
                        <p className='text-start'>Onboard endpoints and users with minimal user intervention. Provision devices and set up configurations well before the user gets their hands on.</p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <img src={automation} alt="Automation" className="img-fluid mb-3" />
                    <div className='manage-content'>
                        <h2 className='text-start fw-bold'>Automation</h2>
                        <p className='text-start'>Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports.</p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <img src={remotAccess} alt="Remote Access Management" className="img-fluid mb-3" />
                    <div className='manage-content'>
                        <h2 className='text-start fw-bold'>Remote Access Management</h2>
                        <p className='text-start'>Hexnode UEM enables the enterprise to manage every single device in the corporate ecosystem for optimal and secure operation.</p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <img src={endpoint} alt="Endpoint Security and Compliance" className="img-fluid mb-3" />
                    <div className='manage-content'>
                        <h2 className='text-start fw-bold'>Endpoint Security and Compliance</h2>
                        <p className='text-start'>Hexnode helps you maintain compliance with international regulatory bodies and set up custom rules for compliance within your business for security purposes.</p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <img src={integrations} alt="Integrations" className="img-fluid mb-3" />
                    <div className='manage-content'>
                        <h2 className='text-start fw-bold'>Integrations</h2>
                        <p className='text-start'>Hexnode's various integrations make it easy to fit into your current endpoint ecosystem. These integrations include Azure AD, Okta, Android Enterprise, Apple School and Business Manager, and many more enterprise and technology integrations.</p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <img src={appManagement} alt="App Management" className="img-fluid mb-3" />
                    <div className='manage-content'>
                        <h2 className='text-start fw-bold'>App Management</h2>
                        <p className='text-start'>Set up a bespoke app store, enable mandatory apps, and ensure endpoints come equipped with all the required applications, custom enterprise apps included.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Management;
