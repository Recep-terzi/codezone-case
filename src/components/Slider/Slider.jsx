"use client";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";

import Image1 from '@/assets/images/image-1.png'
import Image2 from '@/assets/images/image-2.png'
import Button from '@/assets/icons/button.png'
import Image from 'next/image';
import RightIcon from '@/assets/icons/right-icon.svg'
import LeftIcon from '@/assets/icons/left-icon.svg'
import Line from '@/assets/images/line.png'
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Slide } from 'react-awesome-reveal';
export default function Slider() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperReady, setSwiperReady] = useState(false);

    useEffect(() => {
        setSwiperReady(true);
    }, []);
    return (
        <>
            <button ref={prevRef} className=" absolute left-[67px] top-1/2 -translate-y-1/2 z-10 text-white lg:block hidden">
                <Image src={LeftIcon} alt='Left Icon' className='size-[24px]' />
            </button>
            <button ref={nextRef} className=" absolute right-[67px] top-1/2 -translate-y-1/2 z-10 text-white lg:block hidden">
                <Image src={RightIcon} alt='Right Icon' className='size-[24px]' />
            </button>
            {swiperReady && <div className='lg:block hidden'>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    loop={true}
                    onSwiper={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                >
                    <SwiperSlide>
                        <div
                            style={{ backgroundImage: `url(${Image1.src})`, objectFit: "cover", backgroundRepeat: "no-repeat", backgroundSize: "100%" }}
                            className={` w-full h-screen relative`}>
                            <div className='absolute right-[240px] flex flex-col gap-[23px] w-[450px] top-0 bottom-0 my-auto justify-center'>
                                <p className='text-[60px] font-bold text-black'>DÜNYA RAP
                                    TRENDLERİNİ
                                    KONUŞUYORUZ.</p>
                                <p className='text-[16px] font-normal text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                                <Slide direction='down'> <Link href={'/blog'}><Image src={Button} alt='Button' className='hover:scale-105 transition-all cursor-pointer' /></Link></Slide>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            style={{ backgroundImage: `url(${Image2.src})`, objectFit: "cover", backgroundRepeat: "no-repeat", backgroundSize: "100%" }}
                            className={` w-full h-screen relative`}>
                            <div className='absolute right-[240px] flex flex-col gap-[23px] w-[520px] top-0 bottom-0 my-auto  justify-center'>

                                <p className='text-[60px] font-bold text-white'>TÜRKÇE RAP VE DÜNYA MÜZİK <span className='whitespace-nowrap'>HABERLERİNİ TAKİP ET</span></p>
                                <p className='text-[16px] font-normal text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                                <Slide direction='down'> <Link href={'/blog'}><Image src={Button} alt='Button' className='hover:scale-105 transition-all cursor-pointer' /></Link></Slide>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <Image src={Line} alt='Line' className='w-full h-[200px] absolute bottom-0 z-50 lg:block hidden' /></div>}
            <div className='lg:hidden block h-screen'>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    className='h-full'
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    onSwiper={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                >
                    <SwiperSlide>
                        <div className=' mt-30  '>
                            <div className='flex flex-col items-center justify-center text-center w-[337px] m-auto'>
                                <p className='text-[30px] font-bold text-white'>TÜRKÇE RAP VE DÜNYA MÜZİK HABERLERİNİ TAKİP ET</p>
                                <p className='text-[14px] font-normal text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                                <Image src={Button} alt='Button' className='w-[136px] h-[38px] mt-5 z-50' />
                            </div>
                            <div className='absolute  top-[350px]  w-full overflow-hidden'>
                                <div style={{ backgroundImage: `url(${Image2.src})`, objectFit: "contain", backgroundPositionX: "-150px", backgroundRepeat: "no-repeat", backgroundSize: "100%" }} className='w-[960px] h-[644px] '>
                                </div>
                                <div style={{ backgroundImage: `url(${Line.src})`, objectFit: "contain", backgroundRepeat: "no-repeat", backgroundSize: "100%" }} className='absolute bottom-0 w-[960px] h-[150px]'>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='mt-30'>
                            <div className='flex flex-col items-center justify-center text-center w-[337px] m-auto'>
                                <p className='text-[30px] font-bold text-white'>DÜNYA RAP
                                    TRENDLERİNİ
                                    KONUŞUYORUZ.</p>
                                <p className='text-[14px] font-normal text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                                <Image src={Button} alt='Button' className='w-[136px] h-[38px] mt-5 z-50' />
                            </div>
                            <div className='absolute  top-[400px]  w-full overflow-hidden'>
                                <div style={{ backgroundImage: `url(${Image1.src})`, objectFit: "contain", backgroundPositionX: "-100px", backgroundRepeat: "no-repeat", backgroundSize: "100%" }} className='w-[960px] h-[644px] '>
                                </div>
                                <div style={{ backgroundImage: `url(${Line.src})`, objectFit: "contain", backgroundRepeat: "no-repeat", backgroundSize: "100%" }} className='absolute bottom-0 w-[960px] h-[250px]'>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>


        </>

    );
}
