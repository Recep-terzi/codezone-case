'use client'
import Container from "@/components/Container/Container"
import { useSelector } from "react-redux"
import EyeIcon from '@/assets/icons/eye-icon.svg'
import Image from "next/image"
import FacebookIcon from '@/assets/icons/facebook.svg'
import XIcon from '@/assets/icons/x.svg'
import DiscordIcon from '@/assets/icons/discord.svg'
import SpotifyIcon from '@/assets/icons/spotify.svg'
import YoutubeIcon from '@/assets/icons/Youtube.svg'
import RightYellowIcon from '@/assets/icons/right-yellow-icon.svg'
import LikeIcon from '@/assets/icons/like-icon.svg'
import CommentIcon from '@/assets/icons/comment-icon.svg'
import PlayIcon from '@/assets/icons/play.svg'
import React from 'react'
import Link from "next/link"
import Trend from "@/components/Trend/Trend"
interface Props {
    params: Promise<{ id: string }>;
}
export default function BlogDetail({ params }: Props) {
    const { id } = React.use(params)
    const data = useSelector((state: any) => state.case.data)
    const filteredData = data.find((item: any) => item.attributes.slug === id)
    return (
        <Container>
            <div className="lg:py-[150px] py-[120px] flex flex-col gap-10">
                <div className='  items-center gap-5 *:text-[14px] font-normal text-white flex *:whitespace-nowrap'>
                    <p>ANA SAYFA</p>
                    <p>&gt; </p>
                    <p>BLOG</p>
                    <p>&gt; </p>
                    <p className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
                        {filteredData?.attributes.title}
                    </p>
                </div>
                {filteredData && <div className="lg:grid lg:grid-cols-12 flex flex-col lg:gap-[126px]">
                    <div className="flex flex-col gap-[30px] col-span-7">
                        <div className="flex items-center gap-3">
                            <Image src={EyeIcon} alt="Eye Icon " />
                            <p className="text-[16px] font-normal text-white">12.094</p>
                        </div>
                        <div className="flex flex-col gap-[30px]">
                            <p className="lg:text-[60px] text-[40px] font-bold text-white">{filteredData.attributes.title}</p>
                            <p className="text-[25px] font-bold text-white">{filteredData.attributes.desc}</p>
                            <p className="lg:text-[16px] text-[14px] font-normal text-white">{filteredData.attributes.content}</p>
                        </div>
                        <div className='relative aspect-[358/196]'>
                            <Image src={filteredData.attributes.img} alt={filteredData.attributes.slug} fill className='absolute inset-0 w-full h-full object-cover text-transparent ' />
                            <Image src={PlayIcon} alt="Play Icon" className="absolute inset-0 m-auto" />
                        </div>
                        <div className="flex gap-[10px]">
                            {filteredData && filteredData.attributes.tags.map((list: any) => (
                                <p className="p-[10px] bg-black-800 text-white text-[16px] font-normal">
                                    {list}
                                </p>
                            ))}
                        </div>
                        <div className="flex items-center gap-[30px]">
                            <div className="flex items-center gap-[10px]">
                                <Image src={LikeIcon} alt="Like Icon " />
                                <p className="text-[16px] font-normal text-white"><strong>14 Kişi</strong> Beğendi</p>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <Image src={CommentIcon} alt="Comment Icon" />
                                <p className="text-[16px] font-bold text-white">3</p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:gap-[60px] gap-[50px] mt-10">
                            <p className="lg:text-[60px] text-[40px] font-bold text-white">DAHA FAZLA İÇERİK</p>
                            <div className="flex flex-col gap-[28px] ">
                                <div className="flex flex-col gap-[28px]">
                                    {data.slice(0, 3).map((list: any, idx: number) => (
                                        <div
                                            key={idx}
                                            className={`flex items-center gap-[21px] pb-[28px] ${idx < 2 ? 'border-b border-black-700' : ''
                                                }`}
                                        >
                                            <div className="w-[88px] h-[78px]  shrink-0" style={{ backgroundImage: `url(${list.attributes.img})`, backgroundPositionY: "center", backgroundRepeat: "no-repeat", backgroundSize: "100%" }} >

                                            </div>

                                            <p className="lg:text-[25px] text-[20px] font-bold text-white line-clamp-3">{list.attributes.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <Trend grid={'lg:!grid-cols-2 !grid-cols-1'} containerClassName="!px-0" />
                    </div>
                    <div className="col-span-5 flex flex-col gap-12">
                        <p className=' text-[25px] font-bold text-white'>GELİŞMELERDEN İLK SEN HABERDAR OL!</p>
                        <div className='flex relative w-[100%]'>
                            <input type="text" placeholder='EMAIL' className='focus:outline-none focus:border-b-[1px] focus:border-yellow w-full border-b-[1px] text-white border-black-700 pb-5 placeholder:text-[14px] placeholder:font-bold placeholder:text-white' />
                            <button className='absolute flex items-center gap-3 right-0 text-[14px] font-bold text-yellow'>GÖNDER <Image src={RightYellowIcon} alt='Right Yellow Icon' /></button>
                        </div>
                        <div className='flex items-center gap-4  *:hover:scale-105 *:transition-all *:cursor-pointer'>
                            <Image src={FacebookIcon} alt='Facebook Icon' />
                            <Image src={XIcon} alt='X Icon' />
                            <Image src={DiscordIcon} alt='Discord Icon' />
                            <Image src={SpotifyIcon} alt='Spotify Icon' />
                            <Image src={YoutubeIcon} alt='Youtube Icon' />
                        </div>
                        <div className='flex flex-col  text-white gap-5'>
                            <div className=' items-center gap-10 *:text-[14px] *:hover:text-yellow *:transition-colors *:cursor-pointer  flex '>
                                <p>HABERLER</p>
                                <p>ETKİNLİKLER</p>
                            </div>
                            <div className=' items-center gap-10 *:text-[14px] *:hover:text-yellow *:transition-colors *:cursor-pointer  flex '>
                                <p>MÜZİKLER</p>
                                <p>VİDEOLAR</p>
                                <p>İLETİŞİM</p>
                            </div>
                        </div>
                        <p className='text-black-500 text-[14px] font-normal '>© RAPKOLOGY All Rights Are Reserved 2022.</p>
                    </div>
                </div>}
            </div>

        </Container>
    )
}
