import Button from 'daisyui/components/button';
import Image from 'next/image';
import React from 'react';


const DestinationDetailesPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:5000/destinations/${id}`);
    const data = await res.json();
    console.log(data);

    return (


        <div className="min-h-screen max-w-7xl p-5 mx-auto text-black bg-gray-50">
            <div>
                <Button className="mb-4 rounded-full bg-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-300 transition">
                   Edit Destination
                </Button>
                <Button className="mb-4 rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 transition">
                    Delete Destination
                </Button>
            </div>
            {/* Hero Section */}
            <div className="relative h-125 overflow-hidden rounded-b-3xl">
                <Image
                    src={data.imageUrl}
                    alt={data.destinationName}
                    fill
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

                <div className="absolute bottom-10 left-10 text-white">
                    <span className="rounded-full bg-white/20 backdrop-blur-md px-4 py-2 text-sm font-medium">
                        ✈️ {data.category}
                    </span>

                    <h1 className="mt-4 text-5xl font-bold">
                        {data.destinationName}
                    </h1>

                    <p className="mt-2 text-xl">
                        📍 {data.country}                        
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-7xl px-4 py-12">
                <div className="grid gap-8 lg:grid-cols-3">

                    {/* Left Side */}
                    <div className="lg:col-span-2">
                        <div className="rounded-3xl bg-white p-8 shadow-lg">
                            <h2 className="mb-4 text-3xl font-bold">
                                About This Destination
                            </h2>

                            <p className="leading-8 text-gray-600">
                                Discover breathtaking landscapes, rich culture,
                                delicious cuisine, and unforgettable experiences
                                in {data.destinationName}. Perfect for travelers
                                seeking adventure and relaxation.
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                                <div className="rounded-2xl bg-blue-50 p-4 text-center">
                                    <p className="text-3xl">⏳</p>
                                    <p className="font-semibold">{data.duration}</p>
                                </div>

                                <div className="rounded-2xl bg-green-50 p-4 text-center">
                                    <p className="text-3xl">💰</p>
                                    <p className="font-semibold">${data.price}</p>
                                </div>

                                <div className="rounded-2xl bg-purple-50 p-4 text-center">
                                    <p className="text-3xl">🌍</p>
                                    <p className="font-semibold">{data.country}</p>
                                </div>

                                <div className="rounded-2xl bg-orange-50 p-4 text-center">
                                    <p className="text-3xl">🏖️</p>
                                    <p className="font-semibold">{data.category}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Booking Card */}
                    <div>
                        <div className="sticky top-6 rounded-3xl bg-white p-8 shadow-xl">
                            <h3 className="mb-4 text-2xl font-bold">
                                Tour Package
                            </h3>

                            <div className="mb-6">
                                <span className="text-4xl font-bold text-green-600">
                                    ${data.price}
                                </span>
                                <span className="text-gray-500"> / person</span>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span>Destination</span>
                                    <span>{data.destinationName}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Duration</span>
                                    <span>{data.duration}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Category</span>
                                    <span>{data.category}</span>
                                </div>
                            </div>

                            <button className="mt-8 w-full rounded-2xl bg-linear-to-r from-blue-600 to-purple-600 py-4 text-lg font-semibold  transition hover:scale-105">
                                Book Now ✈️
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetailesPage;