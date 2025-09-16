'use client'
import React, { useEffect, useState } from 'react'
import TrendingUp from '@/assets/icons/trending-up.svg'
import Image from 'next/image'
import Container from '../Container/Container'
import Button2 from '@/assets/icons/button2.png'
import RapIcon from '@/assets/icons/rap-icon.png'
import { useDispatch, useSelector } from 'react-redux'
import { setData } from '@/redux/case/caseSlice'
const Trend = () => {

    const dispatch = useDispatch()
    const data = useSelector((state: any) => state.case.data)
    useEffect(() => {
        fetch('https://dummyjson.com/c/a7c4-016a-47aa-8241').then(res => res.json()).then(data => dispatch(setData(data)))
    }, [])
    return (
        <Container>
            <div className='flex items-center justify-center lg:justify-normal gap-5 lg:mt-[83px] bg-black'>
                <p className='lg:text-[60px] text-[40px] font-bold text-white'>TRENDLER</p>
                <Image src={TrendingUp} alt='Trending Up Icon' className='size-[64px]' />
            </div>
            {(!data || data.length === 0) ? (
                <div className='m-auto w-full'>
                    <span className="loader"></span>
                </div>
            ) : (
                <div className='grid lg:grid-cols-3 lg:gap-5 gap-[50px] lg:mt-[90px] mt-[50px]'>

                    {data.slice(0, 6).map((item: any, key: any) => (
                        <div key={key} className='flex lg:gap-[60px] gap-10 items-start '>
                            <p className='text-black-900 font-bold text-[60px] w-[80px]   shrink-0 lg:leading-normal leading-none'>0{key + 1}</p>
                            <div className='flex flex-col justify-between'>
                                <div className='flex flex-col lg:gap-0 gap-5'>
                                    <div className='flex items-center gap-4'>
                                        <Image src={RapIcon} alt='Rap Icon' />
                                        <p className='font-normal lg:text-[16px] text-[14px] text-white'>Rapkology</p>
                                    </div>
                                    <p className='text-white lg:text-[25px] text-[25px] font-bold'>{item.attributes.title}</p>
                                </div>
                                <div className='flex flex-col mt-5 gap-5'>
                                    <div className='w-full h-[1px] bg-black-700 '></div>
                                    <p className='font-normal lg:text-[16px] text-[14px] text-white cursor-pointer hover:scale-105 transition-all'>Daha Fazla Oku</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            )}

            <Image src={Button2} alt='Devamını gör button' className='m-auto lg:mt-10 mt-[120px] cursor-pointer hover:scale-105 transition-all' />
        </Container>
    )
}

export default Trend