import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-netflix-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-netflix-red text-2xl font-bold">
                    NETFLIX
                </Link>
                <div>
                    <Link href="/profile" className="text-white hover:text-gray-300 ml-4">
                        Profile
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;