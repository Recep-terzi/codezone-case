'use client'
import React, { useEffect, useRef, useState } from 'react'
import Container from '../Container/Container'
import DiscoverIcon from '@/assets/icons/discover-icon.png'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import RapIcon from '@/assets/icons/rap-icon.png'
import RightYellowIcon from '@/assets/icons/right-yellow-icon.svg'
import FacebookIcon from '@/assets/icons/facebook.svg'
import XIcon from '@/assets/icons/x.svg'
import DiscordIcon from '@/assets/icons/discord.svg'
import SpotifyIcon from '@/assets/icons/spotify.svg'
import YoutubeIcon from '@/assets/icons/Youtube.svg'
import SearchIcon from '@/assets/icons/search-icon.svg'
import ListIcon from '@/assets/icons/list-1.svg'
import ListIcon2 from '@/assets/icons/list-2.svg'
import TypeList from '../TypeList/TypeList'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'
const DiscoverSection = () => {
    const allData = useSelector((state: any) => state.case.data);
    const [selected, setSelected] = useState<string>();

    const [visibleCount, setVisibleCount] = useState(4);
    const observerRef = useRef<HTMLDivElement | null>(null);

    const filteredData = selected
        ? allData?.filter((item: any) =>
            item.attributes?.tags?.includes(selected)
        )
        : allData || [];

    const visibleData = filteredData?.slice(0, visibleCount);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const last = entries[0];
            if (last.isIntersecting) {
                setVisibleCount(prev => Math.min(prev + 4, filteredData.length));
            }
        });

        if (observerRef.current) observer.observe(observerRef.current);

        return () => observer.disconnect();
    }, [filteredData]);

    return (
        <Container>
            <div className='mt-[95px] flex lg:flex-row flex-col gap-[134px]'>
                <div className='flex flex-col lg:gap-[100px] lg:flex-3/5'>
                    <div className='flex justify-between items-center'>
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
                    <div className=' flex-col gap-5 lg:hidden flex mt-10 mb-10'>
                        <p className='text-[40px] font-bold text-white'>Ne Görmek İstersin?</p>
                        <div className='flex gap-[10px] overflow-scroll no-scrollbar'>
                            <TypeList selected={selected} setSelected={setSelected} />
                        </div>
                    </div>
                    <div className='flex flex-col lg:gap-20 gap-[60px]'>
                        {visibleData && visibleData.map((item: any, key: any) =>
                           <Fade key={key}>
                             <Link href={`/blog/${item.attributes.slug}`}  className='flex lg:flex-row flex-col gap-5 '>
                                <div className='flex flex-col justify-between lg:gap-0 gap-5 '>
                                    <div className="lg:w-[301px] w-full h-[196px] relative">
                                        <Image
                                            src={item.attributes.img}
                                            alt={item.attributes.slug}
                                            fill
                                            sizes='100%'
                                        />
                                    </div>
                                    <p className=' w-max text-black-700 text-[16px] font-normal'>{new Date(item.createdAt).toLocaleDateString('tr-TR', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    })}</p>
                                </div>
                                <div className='flex flex-col w-full lg:gap-[30px] gap-[20px]'>
                                    <div className='flex items-center gap-4'>
                                        <Image src={RapIcon} alt='Rap Icon' />
                                        <p className='font-normal lg:text-[16px] text-[14px] text-white'>Rapkology</p>
                                    </div>
                                    <p className='lg:text-[25px] text-[20px] font-bold text-white'>{item.attributes.desc}</p>
                                    <div className='w-full h-[1px]  bg-black-700'></div>
                                    <p className='text-white text-[16px] font-normal'>Daha Fazla Oku</p>
                                </div>
                            </Link>
                           </Fade>
                        )}
                        {visibleCount < filteredData.length && (
                            <div ref={observerRef} className="h-10"></div>
                        )}
                    </div>
                </div>
                <div className='flex flex-col lg:flex-2/5'>
                    <div className=' flex-col gap-5 lg:flex hidden'>
                        <p className='text-[40px] font-bold text-white'>Ne Görmek İstersin?</p>
                        <div className='flex flex-wrap gap-[10px]'>
                            {
                                ['Türk Rap', 'Yabancı Rap', 'Rap Haberleri', 'Haftanın Videoları', 'Ayın Videoları', 'Rap Sohbetleri', 'Rap Müsabakaları'].map((list: any, key: any) => (
                                    <p key={key} onClick={() => setSelected(list)} className={`px-5 py-[10px] border-[1px] border-white text-[16px] font-normal text-white w-max hover:bg-yellow hover:text-black transition-all cursor-pointer hover:font-bold ${selected === list && 'bg-yellow !text-black !font-bold '}`}>
                                        {list}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex flex-col gap-10 lg:mt-[200px]'>
                        <p className='lg:text-[40px] text-[25px] font-bold text-white'>GELİŞMELERDEN İLK SEN HABERDAR OL!</p>
                        <div className='flex relative w-full'>
                            <input type="text" placeholder='EMAIL' className='focus:outline-none focus:border-b-[1px] focus:border-yellow w-full border-b-[1px] text-white border-black-700 pb-5 placeholder:text-[14px] placeholder:font-bold placeholder:text-white' />
                            <button className='absolute flex items-center gap-3 right-0 text-[14px] font-bold text-yellow'>GÖNDER <Image src={RightYellowIcon} alt='Right Yellow Icon' /></button>
                        </div>
                    </div>
                    <div className='flex items-center gap-4 mt-12 *:hover:scale-105 *:transition-all *:cursor-pointer'>
                        <Image src={FacebookIcon} alt='Facebook Icon' />
                        <Image src={XIcon} alt='X Icon' />
                        <Image src={DiscordIcon} alt='Discord Icon' />
                        <Image src={SpotifyIcon} alt='Spotify Icon' />
                        <Image src={YoutubeIcon} alt='Youtube Icon' />
                    </div>
                    <div className='flex flex-col  text-white lg:mt-20 mt-10 gap-5'>
                        <div className='flex items-center gap-10 *:text-[14px] *:hover:text-yellow *:transition-colors *:cursor-pointer '>
                            <p>HABERLER</p>
                            <p>ETKİNLİKLER</p>
                        </div>
                        <div className='flex items-center  gap-10 *:text-[14px] *:hover:text-yellow *:transition-colors *:cursor-pointer '>
                            <p>MÜZİKLER</p>
                            <p>VİDEOLAR</p>
                            <p>İLETİŞİM</p>
                        </div>
                    </div>
                    <p className='text-black-500 text-[14px] font-normal mt-10 mb-9'>© RAPKOLOGY All Rights Are Reserved 2022.</p>
                </div>
            </div>
        </Container>
    )
}

export default DiscoverSection