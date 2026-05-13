'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Card } from '@heroui/react';
import { DateField, Label } from "@heroui/react";
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaCheck } from 'react-icons/fa6';


const BookingCard = ({ destination }) => {
    const { data: session, isPending, error, refetch } = authClient.useSession()
    const user = session?.user;
    // console.log(user)
    const [departureDate, setDepartureDate] = useState(null)
    const { _id, destinationName, country, price, imageUrl } = destination;
    // console.log(destination)

    const handleBooking = async () => {
        const bookingData = {
            userName: user?.name,
            userId: user?.id,
            userImage: user?.image,
            destinationId: _id,
            destinationName,
            country,
            imageUrl,
            price,
            departureDate: new Date(departureDate)
        }
        // console.log(bookingData)
        const res=await fetch('http://localhost:5000/booking',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(bookingData)
        })
        const data=await res.json()
        // console.log(data)
        toast.success('Your Booking Successfully')
    }
    return (
        <div>
            <Card className='rounded w-full mt-10'>
                <p className='text-gray-400'>Starting From</p>
                <h1 className='text-3xl font-bold'>${price}</h1>
                <p className='text-gray-400'>Per Person</p>
                <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
                    <Label>Departure Date</Label>
                    <DateField.Group>
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                    </DateField.Group>
                </DateField>
                <Button onClick={handleBooking} className={'rounded bg-cyan-600 w-full'}>Book Now</Button>
                <ul>
                    <li className='flex gap-2 items-center text-sm text-gray-500 '> <FaCheck className='text-green-600 ' />Free cancellation up to 7 days</li>
                    <li className='flex gap-2 items-center text-sm text-gray-500 '> <FaCheck className='text-green-600 ' />Travel insurance included</li>
                    <li className='flex gap-2 items-center text-sm text-gray-500 '> <FaCheck className='text-green-600 ' />24/7 customer support</li>
                </ul>
            </Card>
        </div>
    )
}

export default BookingCard
