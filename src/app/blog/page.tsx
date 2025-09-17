'use client'
import React, { useState } from 'react'
import BlogBG from '@/assets/images/blog-bg.png'
import BlogPATH from '@/assets/images/blog-path.png'
import BlogPATH2 from '@/assets/images/blog-path-2.png'
import Line from '@/assets/images/line.png'
import Image from 'next/image'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Container from '@/components/Container/Container'

import { useSelector } from 'react-redux'
import DiscoverIcon from '@/assets/icons/discover-icon.png'
import SearchIcon from '@/assets/icons/search-icon.svg'
import ListIcon from '@/assets/icons/list-1.svg'
import RapIcon from '@/assets/icons/rap-icon.png'
import ListIcon2 from '@/assets/icons/list-2.svg'
import Button3 from '@/assets/icons/button3.png'
import Footer from '@/components/Footer/Footer'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard/BlogCard'
import BlogSlider from '@/components/BlogSlider/BlogSlider'
import TypeList from '@/components/TypeList/TypeList'
import ClipIcon from '@/assets/icons/clip.svg'
import BlogClip from '@/components/BlogClip/BlogClip'
const page = () => {
    const data = useSelector((state: any) => state.case.data)
    const [activeIndex, setActiveIndex] = useState(0)
    const [selected, setSelected] = useState<string>();
    const filteredData = selected
        ? data?.filter((item: any) =>
            item.attributes?.tags?.includes(selected)
        )
        : data || [];
    const [count, setCount] = useState<number>(8)
    console.log(data);
    
    return (
        <>
            <div className='overflow-hidden relative w-full lg:h-full h-full lg:py-[150px] py-[120px] bg-yellow lg:bg-no-repeat bg-repeat' style={{ backgroundImage: `url(${BlogBG.src})`, objectFit: "cover", backgroundSize: "100%", backgroundPositionX: "center" }}>
                <Image src={BlogPATH} alt='Blog Path Image' className='lg:block hidden absolute right-0 top-[80px] rotate-[-7.5deg] ' />
                <Container>
                    <div className='  items-center gap-5 *:text-[14px] font-normal text-black lg:flex hidden'>
                        <p>ANA SAYFA</p>
                        <p>&gt; </p>
                        <p>BLOG</p>
                    </div>
                    <p className='text-[60px] font-bold text-black mt-8 mb-6  lg:block hidden'>BLOG</p>
                    <div className='lg:grid lg:grid-cols-12 gap-5 z-50'>
                        <div className='lg:col-span-7 h-full'>
                            <BlogSlider activeIndex={activeIndex} data={data} setActiveIndex={setActiveIndex} />
                        </div>
                        <div className='lg:col-span-5 flex flex-col w-full h-full lg:justify-between lg:gap-0 gap-[30px]  z-50'>
                            {data.slice(6, 10).map((item: any) => (
                                <>
                                    <Link href={`/blog/${item.attributes.slug}`} className='flex items-start gap-5 w-full'>
                                        <div className='flex-shrink-0'>
                                            <img
                                                src={item.attributes.img}
                                                alt={item.attributes.slug}
                                                className='h-full w-auto  lg:max-h-[150px] max-h-[104px] object-cover '
                                            />
                                        </div>
                                        <p className='lg:text-[20px] text-[16px] font-bold text-black lg:line-clamp-4 line-clamp-5'>
                                            {item.attributes.desc}
                                        </p>
                                    </Link>
                                </>
                            ))}
                        </div>
                    </div>
                </Container>
                <Image src={Line} alt='Line' className='w-full lg:h-[250px] h-[150px] absolute lg:bottom-[-10px] bottom-[-20px] z-60  object-cover' />
            </div>
            <div className='relative '>
                <Image src={BlogPATH2} alt='Blog Path Image 2' className='absolute left-0 z-10 w-[625px] h-[681px] lg:block hidden' />
                <Container>
                    <div className='flex flex-col lg:gap-[60px] gap-5 z-50 relative'>
                        <div className='flex justify-between items-center mt-10 '>
                            <div className='flex items-center gap-5'>
                                <p className='lg:text-[60px] text-[40px] font-bold text-white'>KEŞFET</p>
                                <Image src={DiscoverIcon} alt='Discover Icon' className='lg:w-auto lg:h-auto size-[42px]' />
                            </div>
                            <div className='flex items-center gap-5 *:hover:scale-105 *:transition-all *:cursor-pointer'>
                                <Image src={SearchIcon} alt='Search Icon' className='lg:w-auto lg:h-auto size-[18px]' />
                                <Image src={ListIcon} alt='List Icon' className='lg:w-auto lg:h-auto size-[18px]' />
                                <Image src={ListIcon2} alt='List Icon' className='lg:w-auto lg:h-auto size-[18px]' />
                            </div>
                        </div>
                        <div className='flex lg:gap-[10px] gap-[20px] overflow-scroll no-scrollbar'>
                            <TypeList selected={selected} setSelected={setSelected} />
                        </div>
                        <div className='grid lg:grid-cols-4 justify-between lg:gap-5'>
                            {
                                filteredData.slice(0, count).map((item: any) => (<>
                                    <BlogCard item={item} />
                                </>))
                            }
                        </div>
                    </div>
                </Container>
            </div>
            {
                count !== 10 &&
                <Image src={Button3} alt='Button' onClick={() => setCount(10)} className='lg:w-[195px] w-[155px] lg:h-12 h-[42px] m-auto hover:scale-105 transition-all cursor-pointer  mb-[50px]' />
            }
          <Container>
              <div className='lg:hidden flex flex-col gap-8'>
                <div className='flex items-center gap-5'>
                    <p className='lg:text-[60px] text-[40px] font-bold text-white'>KLİPLER</p>
                    <Image src={ClipIcon} alt='Discover Icon' className='lg:w-auto lg:h-auto size-[42px]' />
                </div>
                <div className='flex flex-col gap-5'>
                    {data.slice(5, 8).map((list: any) => (
                        <>
                            <BlogClip item={list} />
                        </>
                    ))}
                </div>
            </div>
          </Container>
            <Footer />
        </>
    )
}

export default page