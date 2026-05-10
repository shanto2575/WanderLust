import DestinationCardDetails from '@/Components/Destination/DestinationCardDetails';
import { getDestinationDetails } from '@/lib/api/data';
import React from 'react'

const DetailsPage = async({params}) => {
    const {id}=await params;
    // console.log(id)
    const destination=await getDestinationDetails(id)
    // console.log(destination)
    return (
        <div>
            <div>
                <DestinationCardDetails key={destination._id} destination={destination}/>
            </div>
        </div>
    )
}

export default DetailsPage
