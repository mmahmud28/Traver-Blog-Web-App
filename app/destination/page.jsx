import React from 'react';

const DestinationPage = async () => {
    const res = await fetch("http://localhost:5000/destinations");
    const data = await res.json();
    console.log(data);
    return (
        <div>
            <h1>All Destinations</h1>
            {
                data.map(dest => (
                    <div key={dest._id}>
                        <h2>{dest.destinationName}</h2>
                        <p>{dest.country}</p>
                        <p>{dest.category}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default DestinationPage;