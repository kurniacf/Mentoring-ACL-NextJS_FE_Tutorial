import React from 'react';
import Image from 'next/image';

interface MovieCardProps {
    title: string;
    imageUrl: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, imageUrl }) => {
    return (
        <div className="relative w-full h-48 md:h-64 lg:h-80">
            <Image
                src={imageUrl}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white text-sm md:text-base font-semibold">{title}</h3>
            </div>
        </div>
    );
};

export default MovieCard;