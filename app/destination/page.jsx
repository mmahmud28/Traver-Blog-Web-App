import React from 'react';
import DestinationCard from '../components/DestinationCard';

const DestinationPage = async () => {
    const res = await fetch("http://localhost:5000/destinations");
    const data = await res.json();
    console.log(data);
    return (
        <div className="max-w-7xl mx-auto py-10">
            <h1>All Destinations</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {
                    data.map(destination => (
                        <DestinationCard key={destination._id} destination={destination} />
                    ))
                }
            </div>
        </div>
    );
};

export default DestinationPage;