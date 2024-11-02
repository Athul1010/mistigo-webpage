import React from 'react';
import hexnode from '../assets/hexnode.webp';
import '../Styles/Reason.css';
import DotsTright from './DotsTright';
import DotsBright from './DotsBright';
import DotsTleft from './DotsTleft';
import DotsBleft from './DotsBleft';
import way from '../assets/way.png'
import { IoShieldCheckmark } from "react-icons/io5";
import { TbSettingsAutomation } from "react-icons/tb";
import list from '../assets/list.png'

const Reason = () => {
    return (
        <div className='reason-secton'>
            <div className="container">
                <h1 className='reason-title'>Why Hexnode?</h1>
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
                        <div className='card-section-one'>
                            <div className="first-card">
                                <div className='way-set'>
                                    <img src={way} alt="" />
                                    <h3>Adapt to the new normal</h3>
                                </div>
                                <p>Hybrid, remote or onsite, you can trust Hexnode UEM to deliver. Create policies that cater to your organization's protocols. Whether it be BYOD, COPE, or platform limited, Hexnode can manage it all.</p>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
                        <div className='card-section-two'>
                            <div className="second-card">
                                
                                <h3><IoShieldCheckmark className='way-icons'/> Zero compromise security</h3>
                                <p>Enable full-fledged device encryption, data loss prevention, and all-rounded device security with Hexnode UEM. Be at the bleeding edge of device security without any compromises.</p>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="row position-relative text-center mt-4">
                    <DotsTleft className='dotTleft' />
                    <DotsTright className='dotTright' />
                    <div className="col-12 d-flex justify-content-center">
                        <img className='hexnode-img' src={hexnode} alt="Hexnode Logo" />
                    </div>
                    <DotsBright className='dotBright' />
                    <DotsBleft className='dotBleft' />
                </div>
    
                <div className="row justify-content-center mt-4">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
                        <div className='card-section-three'>
                            <div className="third-card">
                                <div className='automation'>
                                    <h3><TbSettingsAutomation className='way-icons'/> Get more done with automation</h3>
                                    <p>Hexnode UEM's automation capabilities help you streamline device management, reduce manual effort, and increase productivity. Automate tasks, workflows, and more with ease.</p>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
                        <div className='card-section-four'>
                            <div className="fourth-card">
                                <div className='unified'>
                                    <img src={list} alt="" />
                                    <h3> Unified endpoint management</h3>
                                </div>
                                <p>Manage all your devices, from laptops to smartphones, under a single pane of glass. Hexnode UEM provides a unified platform for endpoint management, simplifying your IT operations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reason;
