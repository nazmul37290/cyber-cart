'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Image from 'next/image';


const Slider = () => {
    return (
        <div className='mt-6'>
            <Swiper
                pagination={{
                    clickable: true
                }}
                modules={[Pagination]}
                className="mySwiper h-[400px] overflow-hidden"
            >
                <SwiperSlide>
                    <div className='h-[500px] relative'>
                        <Image loading='lazy' fill className='object-cover object-center' src="/banners/banner.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[500px] relative'>
                        <Image loading='lazy' fill className='object-cover object-center' src="/banners/banner-2.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[500px] relative'>
                        <Image loading='lazy' fill className='object-cover object-center' src="/banners/banner-1.jpg" alt="" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;