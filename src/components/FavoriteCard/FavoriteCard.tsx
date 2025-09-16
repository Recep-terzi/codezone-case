import React, { useState } from 'react'
import CardBG from '@/assets/images/card-bg.png'
import PlayButton from '@/assets/images/Play Button.png'
import CoverPicture from '@/assets/images/cover-picture.png'
import CardBG2 from '@/assets/images/card-bg-2.png'
import Image from 'next/image';
interface IPropsFavoriteCard {
    image?: string;
    title?: string;
    description?: string;
}

const FavoriteCard: React.FC<IPropsFavoriteCard> = ({ image, title, description }) => {
    const [hover, setHover] = useState<boolean>(false)
    return (
      <>
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='w-[274px] h-[264px] lg:block hidden overflow-hidden relative' style={{ backgroundImage: `url(${CardBG.src})`, objectFit: "cover", backgroundRepeat: "no-repeat", backgroundSize: "100%", backgroundPositionX: "center" }}>
            <div className={` overflow-hidden size-[184px] flex items-center justify-center absolute  rounded-lg  ${hover ? 'rotate-0 left-0 right-0 m-auto transition-all cursor-pointer duration-500 top-[27px]' : 'transition-all cursor-pointer duration-500 left-[-124px] rotate-[-9.48deg] top-[27px]'}`} style={{ backgroundImage: `url(${CoverPicture.src})`, objectFit: "cover", backgroundRepeat: "no-repeat", backgroundSize: "100%", backgroundPositionX: "center" }}>
                <div className='bg-black-900 rounded-full size-[56px]'><Image src={PlayButton} alt='Play Button' className='w-full h-full ' /></div>
            </div>
            <div className={`flex flex-col gap-5 text-white absolute right-[25px] top-[71px] items-center justify-center ${hover && 'hidden'}`}>
                <p className='bg-black-800 flex items-center justify-center w-max rounded-[65px] py-[5px] px-[10px]'>Top 10 (2. Sıra)</p>
                <div className='flex flex-col'>
                    <p className='text-[20px]'>50 CENT</p>
                    <p className='text-[20px] font-bold'>CURTIS</p>
                </div>
            </div>
        </div>
          <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='px-[44px] py-5 w-[274px] flex flex-col gap-5 lg:hidden  h-[380px] overflow-hidden relative' style={{ backgroundImage: `url(${CardBG2.src})`, objectFit: "cover", backgroundRepeat: "no-repeat", backgroundSize: "100%", backgroundPositionX: "center" }}>
            <div className={`rotate-[-9.48deg] overflow-hidden size-[184px] flex items-center justify-center   rounded-lg  `} style={{ backgroundImage: `url(${CoverPicture.src})`, objectFit: "cover", backgroundRepeat: "no-repeat", backgroundSize: "100%", backgroundPositionX: "center" }}>
                <div className='bg-black-900 rounded-full size-[56px]'><Image src={PlayButton} alt='Play Button' className='w-full h-full ' /></div>
            </div>
            <div className={`flex flex-col lg:gap-5 gap-3 text-white   items-center justify-center `}>
                <p className='bg-black-800 flex items-center justify-center w-max rounded-[65px] py-[5px] px-[10px] text-[14px]'>Top 10 (2. Sıra)</p>
                <div className='flex flex-col'>
                    <p className='text-[20px]'>50 CENT - CURTIS</p>
                </div>
            </div>
        </div>
      </>
    )
}

export default FavoriteCard

