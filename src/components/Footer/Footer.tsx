import React from 'react'
import Logo from '@/assets/icons/logo.png'
import FacebookIcon from '@/assets/icons/facebook.svg'
import XIcon from '@/assets/icons/x.svg'
import DiscordIcon from '@/assets/icons/discord.svg'
import SpotifyIcon from '@/assets/icons/spotify.svg'
import YoutubeIcon from '@/assets/icons/Youtube.svg'
import RightYellowIcon from '@/assets/icons/right-yellow-icon.svg'
import Container from '../Container/Container'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
        <Container>
            <div className='flex lg:flex-row flex-col lg:justify-between lg:items-end lg:py-[63px] py-[50px]'>
                <div className='flex flex-col gap-[47px]'>
                    <Image src={Logo} alt='Logo' className='w-[249px] h-[62px] lg:block hidden' />
                    <p className=' text-[25px] font-bold text-white'>GELİŞMELERDEN İLK SEN HABERDAR OL!</p>
                    <div className='flex relative w-[100%]'>
                        <input type="text" placeholder='EMAIL' className='focus:outline-none focus:border-b-[1px] focus:border-yellow w-full border-b-[1px] text-white border-black-700 pb-5 placeholder:text-[14px] placeholder:font-bold placeholder:text-white' />
                        <button className='absolute flex items-center gap-3 right-0 text-[14px] font-bold text-yellow'>GÖNDER <Image src={RightYellowIcon} alt='Right Yellow Icon' /></button>
                    </div>
                </div>
                <div className='flex flex-col gap-[32px] lg:mt-0 mt-10'>
                    <div className='flex items-center gap-4  *:hover:scale-105 *:transition-all *:cursor-pointer'>
                        <Image src={FacebookIcon} alt='Facebook Icon' />
                        <Image src={XIcon} alt='X Icon' />
                        <Image src={DiscordIcon} alt='Discord Icon' />
                        <Image src={SpotifyIcon} alt='Spotify Icon' />
                        <Image src={YoutubeIcon} alt='Youtube Icon' />
                    </div>
                    <div className='flex flex-col  text-white gap-5'>
                        <div className=' items-center gap-10 *:text-[14px] *:hover:text-yellow *:transition-colors *:cursor-pointer lg:flex hidden '>
                            <Link href={'/blog'}>HABERLER</Link>
                            <p>ETKİNLİKLER</p>
                            <p>MÜZİKLER</p>
                            <p>VİDEOLAR</p>
                            <p>İLETİŞİM</p>
                        </div>
                         <div className=' items-center gap-10 *:text-[14px] *:hover:text-yellow *:transition-colors *:cursor-pointer lg:hidden flex '>
                            <p>HABERLER</p>
                            <p>ETKİNLİKLER</p>
                        </div>
                        <div className=' items-center gap-10 *:text-[14px] *:hover:text-yellow *:transition-colors *:cursor-pointer lg:hidden flex '>
                           <p>MÜZİKLER</p>
                            <p>VİDEOLAR</p>
                            <p>İLETİŞİM</p>
                        </div>
                       
                    </div>
                    <p className='text-black-500 text-[14px] font-normal '>© RAPKOLOGY All Rights Are Reserved 2022.</p>

                </div>
            </div>
        </Container>
    )
}

export default Footer