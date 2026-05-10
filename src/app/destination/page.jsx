import DestinationCard from '@/Components/DestinationCard'
import { getDestination } from '@/lib/api/data'
import React from 'react'

const DestinationPage = async () => {
    const destination = await getDestination()
    // console.log(destination)
    return (
        <div className='max-w-11/12 mx-auto'>
            <h1 className='text-2xl font-bold my-3'>Explore All Destination</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 '>
                {
                    destination.map(destination => <DestinationCard key={destination._id} destination={destination} />)
                }
            </div>
        </div>
    )
}

export default DestinationPage
