import React from 'react'
import '../Styles/Achievement.css'
import idc from '../assets/idc.png'
import gartner from '../assets/gartner.png'
import forrester from '../assets/forrester.png'

const Achievement = () => {
    return (
        <div className='container-fluid acheived' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 idc">
                        <img src={idc} alt="" className="img-fluid mb-3" />
                        <p className='mb-0'>
                            Hexnode is listed as a leader and a major player in IDC MarketScape
                            UEM Vendors Assessment Reports 2024.
                        </p>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 gartner">
                        <div className='one mb-4'></div>
                        <img src={gartner} alt="" className="img-fluid mb-3" />
                        <p className='mb-0'>
                            Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic
                            Quadrant for Unified Endpoint Management tools 2022.
                        </p>
                        <div className='two mt-4'></div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 forrester">
                        <img src={forrester} alt="" className="img-fluid mb-3" />
                        <p className='mb-0'>
                            Forrester includes Hexnode as a Notable vendor in The Unified
                            Endpoint Management Landscape, Q3 2023.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;
