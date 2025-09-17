'use client'
import React, { useEffect, useState } from 'react'
import TrendingUp from '@/assets/icons/trending-up.svg'
import Image from 'next/image'
import Container from '../Container/Container'
import Button2 from '@/assets/icons/button2.png'
import RapIcon from '@/assets/icons/rap-icon.png'
import {  useSelector } from 'react-redux'
import Link from 'next/link'

interface IPropsTrend{
    grid?:any;
    containerClassName?:string;
}

const Trend:React.FC<IPropsTrend> = ({grid,containerClassName}) => {
    const data = useSelector((state: any) => state.case.data)
    
    return (
        <Container className={containerClassName}>
            <div className='flex items-center justify-center lg:justify-normal gap-5 lg:mt-[83px] bg-black'>
                <p className='lg:text-[60px] text-[40px] font-bold text-white'>TRENDLER</p>
                <Image src={TrendingUp} alt='Trending Up Icon' className='size-[64px]' />
            </div>
            {(!data || data.length === 0) ? (
                <div className='m-auto w-full'>
                    <span className="loader"></span>
                </div>
            ) : (
                <div className={`grid lg:grid-cols-3 lg:gap-5 gap-[50px] lg:mt-[90px] mt-[50px] ${grid && grid}`}>

                    {data.slice(0, 6).map((item: any, key: any) => (
                        <Link  href={`/blog/${item.attributes.slug}`} key={key} className='flex lg:gap-[60px] gap-10 lg:items-stretch items-start '>
                            <p className='text-black-900 font-bold text-[60px] w-[80px]   shrink-0 lg:leading-normal leading-none'>0{key + 1}</p>
                            <div className='flex flex-col justify-between'>
                                <div className='flex flex-col lg:gap-0 gap-5'>
                                    <div className='flex items-center gap-4'>
                                        <Image src={RapIcon} alt='Rap Icon' />
                                        <p className='font-normal lg:text-[16px] text-[14px] text-white'>Rapkology</p>
                                    </div>
                                    <p className='text-white lg:text-[25px] text-[25px] font-bold lg:line-clamp-none line-clamp-3'>{item.attributes.title}</p>
                                </div>
                                <div className='flex flex-col mt-5 gap-5'>
                                    <div className='w-full h-[1px] bg-black-700 '></div>
                                    <p className='font-normal lg:text-[16px] text-[14px] text-white cursor-pointer hover:scale-105 transition-all'>Daha Fazla Oku</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            )}

            <Link href={'/blog'}><Image src={Button2} alt='Devamını gör button' className='m-auto lg:mt-10 lg:mb-0 mb-[46px] mt-[120px] cursor-pointer hover:scale-105 transition-all' /></Link>
        </Container>
    )
}

export default Trend