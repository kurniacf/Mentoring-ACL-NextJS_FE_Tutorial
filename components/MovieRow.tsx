import React from 'react';
import MovieCard from './MovieCard';

interface Movie {
    id: number;
    title: string;
    imageUrl: string;
}

interface MovieRowProps {
    title: string;
    movies: Movie[];
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movies }) => {
    return (
        <div className="mb-8">
            <h2 className="text-white text-2xl font-bold mb-4">{title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} title={movie.title} imageUrl={movie.imageUrl} />
                ))}
            </div>
        </div>
    );
};

export default MovieRow;