'use client'
import 'swiper/css';
import 'swiper/css/pagination';
import WhiteBG from '@/assets/icons/white-bg.png'
import YoutubeLogo from '@/assets/icons/Youtube Logo.png'
import SpotifyLogo from '@/assets/icons/Spotify Logo.png'
import Image from 'next/image'
import Container from '../Container/Container'
import React, {  useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import FavoriteCard from '../FavoriteCard/FavoriteCard'

const FavoriteSection = () => {
    const totalSlides = 10;
    const [progress, setProgress] = useState(10);
    return (
        <div className='mt-[70px]'>
            <div className='lg:w-[602px] w-[376px] lg:h-[126px]  h-[88px] relative ' style={{ backgroundImage: `url(${WhiteBG.src})`, objectFit: "cover", backgroundRepeat: "no-repeat", backgroundSize: "100%", backgroundPositionX: "center" }}>
                <div className='flex items-center lg:gap-9 gap-6 absolute lg:left-[96px] left-[67px] lg:top-[36px] top-[25px]'>
                    <Image src={YoutubeLogo} alt=' Youtube Logo ' className='lg:w-auto lg:h-auto w-[113px] h-[25px] object-contain' />
                    <Image src={SpotifyLogo} alt=' Spotify Logo ' className='lg:w-auto lg:h-auto w-[113px] h-[25px] object-contain' />
                </div>
            </div>
            <Container>
                <div className='flex items-center lg:flex-row flex-col justify-between '>
                    <p className='lg:text-[60px] text-[40px] font-bold text-center w-[245px] text-white mb-10'>AYIN FAVORİLERİ</p>
                    <div className='lg:block hidden w-[926px] '>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}

                            onSlideChange={(swiper) => {
                                const current = swiper.realIndex + 1;
                                const percent = (current / totalSlides) * 100;
                                setProgress(percent);
                            }}
                        >
                            <SwiperSlide><FavoriteCard /></SwiperSlide>
                            <SwiperSlide><FavoriteCard /></SwiperSlide>
                            <SwiperSlide><FavoriteCard /></SwiperSlide>
                            <SwiperSlide><FavoriteCard /></SwiperSlide>
                            <SwiperSlide><FavoriteCard /></SwiperSlide>
                            <SwiperSlide><FavoriteCard /></SwiperSlide>
                            <SwiperSlide><FavoriteCard /></SwiperSlide>
                            <SwiperSlide><FavoriteCard /></SwiperSlide>
                            <SwiperSlide><FavoriteCard /></SwiperSlide>
                            <SwiperSlide><FavoriteCard /></SwiperSlide>
                        </Swiper>
                        <div className="mt-10 w-[626px] h-[5px] bg-black-900 rounded-full overflow-hidden mx-auto">
                            <div
                                className="h-full bg-yellow transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                    <div className='lg:hidden flex flex-col w-[272px] overflow-hidden'>
                        <Swiper
                            slidesPerView={'auto'}
                            spaceBetween={0}
                            centeredSlides={true}
                            pagination={{
                                clickable: true,
                            }}
                            className='mySwiper '
                            onSlideChange={(swiper) => {
                                const current = swiper.realIndex + 1;
                                const percent = (current / totalSlides) * 100;
                                setProgress(percent);
                            }}
                        >
                            <SwiperSlide><FavoriteCard /></SwiperSlide>
                            <SwiperSlide><FavoriteCard /></SwiperSlide>
                            <SwiperSlide><FavoriteCard /></SwiperSlide>
                            <SwiperSlide><FavoriteCard /></SwiperSlide>
                            <SwiperSlide><FavoriteCard /></SwiperSlide>
                            <SwiperSlide><FavoriteCard /></SwiperSlide>
                            <SwiperSlide><FavoriteCard /></SwiperSlide>
                            <SwiperSlide><FavoriteCard /></SwiperSlide>
                            <SwiperSlide><FavoriteCard /></SwiperSlide>
                            <SwiperSlide><FavoriteCard /></SwiperSlide>
                        </Swiper>
                        <div className="mt-10 lg:w-[626px] w-full h-[5px] bg-black-900 rounded-full overflow-hidden mx-auto">
                            <div
                                className="h-full bg-yellow transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default FavoriteSection