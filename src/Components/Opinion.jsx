import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../Styles/Opinion.css';
import { Navigation } from 'swiper/modules';
import justin from '../assets/justin-modrak.png'
import dalibor from '../assets/dalibor-kruljac.png'
import chris from '../assets/chris-robinson.png'

const Opinion = () => {
  return (
    <div className='container opinion-section'>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>

          <div className='first-one'>
            <div>
              <img src={justin} alt="" className='img-fluid custom-img' />
            </div>

            <div className='reason-section'>
              <div className='works'>
                <h4>"Hexnode is of great value. Works great with Android and iOS!"</h4>
              </div>
              <div className='auther'>
                <h4>Justin Modrak</h4>
                <span>Technology Coordinator</span>
                <p>East Troy Community School District</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>

          {/* <div className='first-one'>
            <div>
              <img src={dalibor} alt="" className='img-fluid custom-img' />
            </div>

            <div className='reason-section'>
              <div className='solution'>
                <h4>"Most complete MDM solution I found, and I tested many of them, including major names"</h4>
              </div>
              <div className='dalibor'>
                <h4>Dalibor Kruljac</h4>
                <p>KAMELEYA LTD</p>
              </div>
            </div>
          </div> */}
          <div className='first-one'>
            <div>
              <img src={dalibor} alt="" className='img-fluid custom-img' />
            </div>

            <div className='reason-section'>
              <div className='works'>
                <h4>"Hexnode is of great value. Works great with Android and iOS!"</h4>
              </div>
              <div className='auther'>
                <h4>Dalibor Kruljac</h4>
                <span>KAMELEYA LTD</span>
                <p>East Troy Community School District</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>

          {/* <div className='first-one'>
            <div>
              <img src={chris} alt="" className='img-fluid custom-img' />
            </div>

            <div className='reason-section'>
              <div className='line'>
                <h4>"It seemed to be in-line with everything we were looking at."</h4>
              </div>
              <div className='chris'>
                <p>Chris Robinson</p>
                <p>Executive Account Manager, NCS</p>
              </div>
            </div>
          </div> */}
          <div className='first-one'>
            <div>
              <img src={chris} alt="" className='img-fluid custom-img' />
            </div>

            <div className='reason-section'>
              <div className='works'>
                <h4>"It seemed to be in-line with everything we were looking at."</h4>
              </div>
              <div className='auther'>
                <h4>Chris Robinson</h4>
                <span>Executive Account Manager, NCS</span>
                <p>East Troy Community School District</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Opinion
