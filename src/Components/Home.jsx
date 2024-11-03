import React from 'react';
import '../Styles/Home.css'

import { FaCheck } from "react-icons/fa6";
import women from '../assets/women.png';

const Home = () => {
    return (
        <div className="container-fluid home position-relative">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 Unified text-center text-lg-start" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <span className=''>Unified Endpoint Management</span>
                        <h1 className="mb-0 fw-bold">Gain control and visibility</h1>
                        <h1 className="fw-bold">over your endpoints</h1>
                        <p className="">Hexnode's UEM solution allows you to simplify endpoint management and free up IT. Focus on the big picture while Hexnode works on the details.</p>
                        <div className="header-search d-flex justify-content-center justify-content-lg-start mt-3">
                            <input type="text" placeholder="Email" className="me-2" />
                            <button className="">LET'S TRY IT OUT</button>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 text-center mt-4 mt-lg-0" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <div className="password-policy position-absolute">
                            <span className='check d-flex position-absolute'><FaCheck className='check_icon_one'/></span>
                            <span>Password policy applied</span>
                        </div>
                        <div className="tvos-active position-absolute">
                            <span className='check d-flex position-absolute'><FaCheck className='check_icon_two'/></span>
                            <span>TvOS Kiosk Active</span>
                        </div>

                        <img src={women} alt="women" className="img-fluid" />

                        <div className="device-enrolled position-absolute">
                            <span className='check d-flex position-absolute'><FaCheck className='check_icon_two'/></span>
                            <span>Device Enrolled</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
