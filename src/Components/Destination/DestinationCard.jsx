import { Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiMapPin } from 'react-icons/fi'
import { GiArrowWings } from 'react-icons/gi'
import { SlCalender } from 'react-icons/sl'

const DestinationCard = ({ destination }) => {
    // console.log(destination)
    const {_id, imageUrl, destinationName, country, price, duration } = destination

    return (
        <div>
            <div className='my-5 shadow-[0_0_25px_rgba(0,0,0,0.15)] p-5 rounded-2xl'>
                <Image
                    src={imageUrl}
                    width={400}
                    height={400}
                    alt={destinationName}
                    className='w-full h-80'
                />
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
                    <Link href={`/destination/${_id}`}>
                        <button className={'text-2xl bg-white text-blue-400 font-semibold border-b-2 border-pink-500 flex items-center gap-2'}>BOOK NOW <GiArrowWings /> </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DestinationCard