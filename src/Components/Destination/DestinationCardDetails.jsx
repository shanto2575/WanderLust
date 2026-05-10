import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { GiArrowWings } from 'react-icons/gi';
import { SlCalender } from 'react-icons/sl';
import { EditsModal } from './EditsModal';

const DestinationCardDetails = ({ destination }) => {
    // console.log(destination)
    const { imageUrl, destinationName, country, price, duration } = destination;
    return (
        <div className='w-10/12 mx-auto my-4'>
            <EditsModal destination={destination}/>
            <div className='relative w-full h-130 object-contain  rounded-2xl'>
                <Image
                    src={imageUrl}
                    alt={destinationName}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className=' '
                />
            </div>
            <div>
                <div className='flex gap-2 items-center my-2'>
                    <FiMapPin /><p>{country}</p>
                </div>
                <div className='flex items-center justify-between'>
                    <h2 className='text-xl font-semibold'>{destinationName}</h2>
                    <p className='text-xl font-semibold'>${price}<span className='text-sm font-light'>/person</span></p>
                </div>
                <div className='flex gap-2 items-center my-2'>
                    <SlCalender />
                    <p className='text-xl font-semibold text-gray-400'>{duration}</p>
                </div>
                <Link href={``}>
                    <button className={'text-2xl bg-white text-blue-400 font-semibold border-b-2 border-pink-500 flex items-center gap-2'}>BOOK NOW <GiArrowWings /> </button>
                </Link>
            </div>
            <div className='space-y-5 my-5'>
                <h1>Overview</h1>
                <h1>HighLights</h1>

            </div>
        </div>
    )
}

export default DestinationCardDetails