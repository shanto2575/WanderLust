import { BookingCancelAlert } from '@/Components/Booking/BookingCancelAlart'
import { auth } from '@/lib/auth'
import { Button } from '@heroui/react'
import { headers } from 'next/headers'
import Image from 'next/image'
import React from 'react'

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    // console.log(session)
    const user = session?.user
    const res = await fetch(`http://localhost:5000/booking/${user?.id}`)
    const booking = await res.json()
    // console.log(booking)
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-3xl font-bold'>My Booking</h1>
            <p className='text-gray-400'>Manage and view your upcoming travel plans</p>
            <div className='space-y-5'>
                {
                    booking.map(booking => <div key={booking._id} className='border rounded-2xl p-5 my-5'>
                        <div className='flex gap-10 '>
                            <Image
                                src={booking?.imageUrl}
                                alt={booking.destinationName}
                                width={300}
                                height={300}
                            />
                            <div className='flex flex-1 flex-col justify-between'>
                                <h1 className='text-2xl font-bold'>Country: <span className='text-orange-500 font-bold'>{booking.country}</span></h1>
                                <h1>{booking.destinationName}</h1>
                                <p>
                                    Departure Date: {new Date(booking.departureDate).toLocaleDateString("en-GB", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </p>
                                <p>Booking Id : {booking._id}</p>
                                <div className='flex justify-between items-center'>
                                    <p className='text-2xl font-bold text-cyan-500'>Price: ${booking.price}</p>
                                    <div className='flex items-center justify-between gap-5'>
                                        <BookingCancelAlert booking={booking}/>
                                        <Button className={'rounded '}>View</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default MyBookingPage
