import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='flex items-center justify-between p-4'>
                <ul className='flex gap-3'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/destinations">Destinations</Link></li>
                    <li><Link href="/bookings">My Bookings</Link></li>
                    <li><Link href="/add-destination">Add Destination</Link></li>
                </ul>

                <div>
                    <Image src="/assets/Wanderlast.png" alt="Travel Agency Logo" width={100} height={100} />
                </div>

                <ul className='flex gap-3'>
                    <li><Link href="/profile">Profile</Link></li>
                    <li><Link href="/login">Login</Link></li>
                    <li><Link href="/signup">Sign Up</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;