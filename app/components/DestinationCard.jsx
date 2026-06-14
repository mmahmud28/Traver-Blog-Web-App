import Image from 'next/image';
import Link from 'next/link';

const DestinationCard = ({ destination }) => {
    const {_id, imageUrl, destinationName, country, duration, price, category } = destination;
    return (
        <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            {/* Image Section */}
            <div className="relative overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={destinationName}
                    width={400}
                    height={400}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-4 left-4 text-white">
                    <h2 className="text-2xl font-bold">
                        {destinationName}
                    </h2>
                    <p className="text-sm opacity-90">
                        📍 {country}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                        🕒 {duration}
                    </span>

                    <span className="text-3xl font-bold text-green-600">
                        ${price}
                    </span>

                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-600">
                        {category}
                    </span>
                </div>

                <Link href={`/destination/${_id}`}> <button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-semibold text-white transition-all duration-300 hover:scale-105">
                    Book Now →
                </button></Link>
            </div>
        </div>
    );
};

export default DestinationCard;