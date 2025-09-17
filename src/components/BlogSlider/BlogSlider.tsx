import Image from 'next/image'
import React from 'react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import PlayButton from '@/assets/images/play-button.png'
import Link from 'next/link'

interface IPropsBlogSlider {
    setActiveIndex?: any;
    data?: any;
    activeIndex?: any;
}

const BlogSlider: React.FC<IPropsBlogSlider> = ({ setActiveIndex, data, activeIndex }) => {
    return (

        <>
            <Swiper
                modules={[EffectCoverflow, Pagination]}
                spaceBetween={30}
                className='h-full'
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                speed={1000}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {
                    data.slice(0, 6).map((item: any) => (
                        <>
                            <SwiperSlide className='flex flex-col'>
                                <Link href={`/blog/${item.attributes.slug}`}   >
                                    <div className='relative w-full lg:h-[430px] h-[209px] lg:aspect-[358/196]'>
                                        <Image
                                            src={item.attributes.img}
                                            alt={item.attributes.slug}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            className='absolute inset-0 w-full h-full object-cover text-transparent '
                                        />
                                        <div className='absolute flex items-center  justify-between lg:left-12 lg:right-12 left-6 right-6 m-auto lg:bottom-6 bottom-4'>
                                            <p className='text-white lg:text-[40px] text-[25px] font-bold'>LOREM FT - IPSUM</p>
                                            <Image src={PlayButton} alt='Play Button' className='lg:size-auto size-[34px]' />
                                        </div>
                                    </div></Link>

                                <div className='flex items-center lg:flex-row flex-col justify-between lg:px-[46px] lg:gap-[35px] gap-6'>
                                    <Link href={`/blog/${item.attributes.slug}`} className='lg:mt-7 mt-4 text-black w-full  lg:text-[25px] text-[20px] font-bold'>
                                        {item.attributes.desc}
                                    </Link>
                                    <div className=" justify-center gap-3 mt-4 items-center lg:flex hidden">
                                        {data.slice(0, 6).map((_: any, idx: number) => (
                                            <span
                                                key={idx}
                                                className={` rounded-full transition-colors ${idx === activeIndex ? 'bg-black size-[15.5px]' : 'bg-[#8E870D] size-[8.5px]'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </SwiperSlide>

                        </>

                    ))
                }
            </Swiper>
            <div className=" justify-center gap-3  mb-10 items-center lg:hidden flex">
                {data.slice(0, 6).map((_: any, idx: number) => (
                    <span
                        key={idx}
                        className={` rounded-full transition-colors ${idx === activeIndex ? 'bg-black size-[15.5px]' : 'bg-[#8E870D] size-[8.5px]'
                            }`}
                    />
                ))}
            </div>
        </>
    )
}

export default BlogSlider