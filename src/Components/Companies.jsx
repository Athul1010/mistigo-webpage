import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '../Styles/Companies.css';
import hilton from '../assets/hilton.png';
import group from '../assets/group1-automotive.png';
import lowes from '../assets/lowes.png';
import polaris from '../assets/polaris.png';
import gorillas from '../assets/gorillas.png';
import wolt from '../assets/wolt.png';
import marriott from '../assets/marriott-intl.png';
import merck from '../assets/merck.png';
import costco from '../assets/costco.png';
import saic from '../assets/saic.png';

const Companies = () => {
    // const progressCircle = useRef(null);
    // const progressContent = useRef(null);
    
    // const onAutoplayTimeLeft = (s, time, progress) => {
    //     progressCircle.current.style.setProperty('--progress', 1 - progress);
    //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    // };
    
    return (
        <div className='container company-section' id='all-compony'>
            <Swiper
                spaceBetween={20} // Adjust space between images
                slidesPerView={7} // Show 7 images at once
                loop={true} // Loop through slides continuously
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={false}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                // onAutoplayTimeLeft={onAutoplayTimeLeft}
                breakpoints={{
                    // When window width is <= 600px
                    0: {
                        slidesPerView: 2, // Show 3 images
                    },
                    // When window width is >= 600px and <= 1200px
                    600: {
                        slidesPerView: 4, // Show 4 images
                    },
                    // When window width is >= 1200px
                    1200: {
                        slidesPerView: 7, // Show 7 images
                    },
                }}
                className="mySwiper autoplay-swiper"
            >
                <SwiperSlide><img src={hilton} alt="Hilton" className="company-icon"/></SwiperSlide>
                <SwiperSlide><img src={group} alt="Group" className="company-icon"/></SwiperSlide>
                <SwiperSlide><img src={lowes} alt="Lowes" className="company-icon"/></SwiperSlide>
                <SwiperSlide><img src={polaris} alt="Polaris" className="company-icon"/></SwiperSlide>
                <SwiperSlide><img src={gorillas} alt="Gorillas" className="company-icon"/></SwiperSlide>
                <SwiperSlide><img src={wolt} alt="Wolt" className="company-icon"/></SwiperSlide>
                <SwiperSlide><img src={marriott} alt="Marriott" className="company-icon"/></SwiperSlide>
                <SwiperSlide><img src={merck} alt="Merck" className="company-icon"/></SwiperSlide>
                <SwiperSlide><img src={costco} alt="Costco" className="company-icon"/></SwiperSlide>
                <SwiperSlide><img src={saic} alt="SAIC" className="company-icon"/></SwiperSlide>
                {/* <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div> */}
            </Swiper>
        </div>
    );
};

export default Companies;
