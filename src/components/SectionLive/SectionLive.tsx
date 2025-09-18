import React from 'react'
import BGImage from '@/assets/images/live-bg.png'
import BGImage2 from '@/assets/images/live-bg-2.png'
import Line from '@/assets/images/line.png'
import Line2 from '@/assets/images/line-2.png'
import Hero1 from '@/assets/images/hero-1.svg'
import Live1 from '@/assets/images/live-1.png'
import Live2 from '@/assets/images/live-2.png'
import Live3 from '@/assets/images/live-3.png'
import Hero2 from '@/assets/images/hero-2.svg'
import Image from 'next/image'
import { Slide } from 'react-awesome-reveal'
const SectionLive = () => {
  return (
    <div className='relative lg:h-[642px]  h-[636px]  overflow-hidden'>
      <div style={{ backgroundImage: `url(${BGImage.src})`, objectFit: "contain", backgroundRepeat: "no-repeat", backgroundSize: "100%", backgroundPositionX: "center" }}
        className='w-full h-full lg:block hidden'
      >
        <Slide direction='left' className='absolute lg:left-[100px] left-[-50px] bottom-[71px]'><Image src={Hero1} alt='Hero 1' className=' w-[281px] h-[293px] lg:w-auto lg:h-auto ' /></Slide>
        <Slide direction='right' className='absolute lg:right-[166px] right-[-30px] bottom-[17px] '><Image src={Hero2} alt='Hero 2' className='w-[221px] h-auto lg:w-auto' /></Slide>
        <div className='absolute left-0 right-0 m-auto flex flex-col gap-3 items-center top-[59px]'>
          <Slide direction='down'><Image src={Live1} alt='Live 1' className='lg:w-auto w-[339px]' /></Slide>
          <Slide direction='down'><Image src={Live2} alt='Live 2' className='lg:w-auto w-[244px] cursor-pointer hover:scale-105 transition-all' /></Slide>
        </div>
      </div>
      <div
        className='w-full h-full lg:hidden block'
      >
        <Image src={BGImage2} alt='BG Image' className='absolute bottom-[100px] h-[314px] w-full m-auto flex items-center justify-center  ' />
        <div className=''>
          <Image src={Hero1} alt='Hero 1' className='absolute lg:left-[100px] left-[-50px] w-[281px] h-[293px] lg:w-auto lg:h-auto bottom-[71px]' />
          <Image src={Hero2} alt='Hero 2' className='absolute lg:right-[166px] right-[-30px] bottom-[17px] w-[221px] h-auto lg:w-auto' />
          <div className='absolute left-0 right-0 m-auto flex flex-col gap-3 items-center top-[59px]'>
         <Slide direction='down'><Image src={Live1} alt='Live 1' className='lg:w-auto w-[339px]' /></Slide>
          <Slide direction='down'><Image src={Live2} alt='Live 2' className='lg:w-auto w-[244px] ' /></Slide>
          </div>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${Line.src})`, objectFit: "contain", backgroundRepeat: "no-repeat", backgroundSize: "100%" }} className='absolute bottom-0 w-[960px] h-[150px]'>
      </div>
      <Image src={Line2} alt='Line' className='w-full h-[200px] absolute bottom-0 z-50 lg:block hidden' />
    </div>
  )
}

export default SectionLive