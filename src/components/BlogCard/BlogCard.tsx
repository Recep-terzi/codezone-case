import Image from 'next/image'
import React from 'react'
import RapIcon from '@/assets/icons/rap-icon.png'
import Link from 'next/link'

interface IPropsBlogCard {
    item: any;
}

const BlogCard: React.FC<IPropsBlogCard> = ({ item }) => {
    return (
        <>
            <div className='flex flex-col lg:gap-[30px] gap-5 justify-between mb-[60px]'>
                <div className='flex flex-col lg:gap-[30px] gap-5'>
                    <div className=' items-center gap-4 lg:flex hidden'>
                        <Image src={RapIcon} alt='Rap Icon' className='size-[32px]' />
                        <p className='size-[16px] font-normal text-white'>Rapkology</p>
                    </div>
                    <Link  href={`/blog/${item.attributes.slug}`} className='relative aspect-[358/196]'>
                        <Image src={item.attributes.img} alt={item.attributes.slug} fill className='absolute inset-0 w-full h-full object-cover text-transparent ' />
                    </Link>
                    <p className='text-black-600 text-[14px] font-normal'>{new Date(item.createdAt).toLocaleDateString('tr-TR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                    })}</p>
                </div>
                 <div className=' items-center gap-4 lg:hidden flex'>
                        <Image src={RapIcon} alt='Rap Icon' className='size-[32px]' />
                        <p className='size-[16px] font-normal text-white'>Rapkology</p>
                    </div>
                <div className='flex flex-col lg:gap-[30px] gap-5'>
                    <p className='font-bold text-[20px] text-white line-clamp-5'>{item.attributes.desc}</p>

                </div>
                <div className='flex flex-col lg:gap-[30px] gap-5'>
                    <div className='h-[1px] w-full bg-black-700'></div>
                    <p className='text-white lg:text-[16px] text-[14px] font-bold'>Daha Fazla Oku</p>
                </div>
            </div>
        </>
    )
}

export default BlogCard