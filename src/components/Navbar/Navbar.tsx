'use client'
import React, { useState } from 'react'
import Logo from '@/assets/icons/logo.png'
import Image from 'next/image'
import MenuIcon from '@/assets/icons/menu.svg'
import SearchIcon from '@/assets/icons/search.svg'
import Link from 'next/link'
import { IoClose } from 'react-icons/io5'
const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        setShowMenu(true);
        setMenu(false);
    }

    const closeMenu = () => {
        setMenu(true);
    }

    return (
        <>
            <div className='header lg:px-20 lg:py-5 p-4 flex items-center justify-between lg:border-b-[1px] border-black-900 fixed top-0 w-full  z-60'>
                <div className='flex items-center gap-[96px]'>
                    <Image src={Logo} alt='Logo' className='lg:w-[235px] lg:h-[59px] w-[182px] h-[45px]' />
                    <div className='lg:flex hidden *:text-[14px] *:font-normal *:text-white  items-center gap-[30px] *:uppercase *:cursor-pointer *:hover:text-yellow *:transition-colors'>
                        <p>Haberler</p>
                        <p>Etkinlikler</p>
                        <p>Müzikler</p>
                        <p>Videolar</p>
                        <p>İletişim</p>
                    </div>
                </div>
                <div className='lg:flex hidden items-center gap-[35px] *:cursor-pointer '>
                    <Image src={SearchIcon} alt='Search Icon' className='size-[22px]' />
                    <button className='w-[120px] h-10 bg-white uppercase font-bold text-[14px] text-black'>Giriş Yap</button>
                </div>
                <Image src={MenuIcon} alt='Menu Icon' className='lg:hidden flex' onClick={openMenu} />
            </div>

            {
                showMenu && <div className={`fixed left-0 right-0 bottom-0 top-0 w-full h-full bg-black z-70 flex flex-col p-5 gap-5 
      ${menu ? 'animate__animated animate__slideOutRight' : 'animate__animated animate__slideInRight'}`}
                    onAnimationEnd={() => menu && setShowMenu(false)} >
                    <IoClose className=' absolute right-10' fontSize={30} onClick={closeMenu} color='F0E74D' />
                    <div className='flex flex-col gap-7 mt-15 *:text-[20px] *:text-white'>
                        <Link href={'/'} className='w-max' onClick={closeMenu}>Anasayfa
                            {location.pathname === '/' && <div className='h-[2px] bg-yellow'></div>}
                        </Link>
                        <Link onClick={closeMenu} href={'/haberler'} className='w-max relative h-full z-10' >Haberler
                            {location.pathname === '/haberler' && <div className='h-[2px] bg-yellow'></div>}
                        </Link>
                        <Link onClick={closeMenu} href={'/etkinlikler'} className=' w-max relative z-10'>Etkinlikler
                            {location.pathname === '/etkinlikler' && <div className='h-[2px] bg-yellow'></div>}
                        </Link>
                        <Link onClick={closeMenu} href={'/muzikler'} className='w-max relative z-10' >Müzikler
                            {location.pathname === '/muzikler' && <div className='h-[2px] bg-yellow'></div>}

                        </Link>
                        <Link onClick={closeMenu} href={'/videolar'} className='w-max'>Videolar
                            {location.pathname === '/videolar' && <div className='h-[2px] bg-yellow'></div>}</Link>
                        <Link onClick={closeMenu} href={'/iletisim'} className='w-max'>İletişim
                            {location.pathname === '/iletisim' && <div className='h-[2px] bg-yellow'></div>}</Link>
                    </div>
                </div>
            }
        </>
    )
}

export default Navbar