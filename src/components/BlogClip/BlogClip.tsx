import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PlayButton from '@/assets/icons/play.svg'

interface IPropsBlogClip {
    item: any;
}

const BlogClip: React.FC<IPropsBlogClip> = ({ item }) => {
    return (
        <div className='flex flex-col lg:gap-[30px] gap-5 justify-between mb-[60px]'>
            <div className='flex flex-col lg:gap-[30px] gap-5'>
                <Link href={`blog/${item.attributes.slug}`} className='relative aspect-[358/196]'>
                    <Image src={item.attributes.img} alt={item.attributes.slug} fill  sizes='100%' className='absolute inset-0 w-full h-full object-cover text-transparent ' />
                    <Image src={PlayButton} alt='Play Button' className='size-[72px] absolute left-0 right-0 m-auto top-0 bottom-0'/>
                </Link>
            </div>
            <div className='flex flex-col lg:gap-[30px] gap-5'>
                <p className='font-bold text-[20px] text-white line-clamp-5'>{item.attributes.desc}</p>
            </div>
        </div>
    )
}

export default BlogClip