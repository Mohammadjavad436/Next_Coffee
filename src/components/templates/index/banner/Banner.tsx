"use client";
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import style from './Banner.module.css'

import { Navigation, Autoplay } from "swiper/modules";
import Image from 'next/image';

type TListBanner = {
    id: number;
    src: string
}

export const Banner = () => {
    const listBanner: TListBanner[] = [
        { id: 1, src: '/images/banner/ban1.jpg' },
        { id: 2, src: '/images/banner/ban2.jpg' },
        { id: 3, src: '/images/banner/ban3.jpg' },
        { id: 4, src: '/images/banner/ban4.jpg' }]

    return (
        <div className={style.bannerContainer}>
            <Swiper
                rewind={true}
                navigation={true}
                loop={true}
                autoplay={{ delay: 2500 }}
                modules={[Navigation, Autoplay]}
                className={style.mySwiper}
            >
                {listBanner.map((img) => (
                    <SwiperSlide key={img.id} >
                        <Image fill={true} src={img.src} alt={img.src.slice(15, 19)} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
