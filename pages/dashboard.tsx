import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Navbar from '../components/Navbar';
import MovieRow from '../components/MovieRow';

interface Movie {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
}

const Dashboard: NextPage = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [tvShows, setTvShows] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch('http://localhost:5000/api/categories/Movies');
            const data = await response.json();
            setMovies(data);
        };

        const fetchTvShows = async () => {
            const response = await fetch('http://localhost:5000/api/categories/TV Shows');
            const data = await response.json();
            setTvShows(data);
        };

        fetchMovies();
        fetchTvShows();
    }, []);

    return (
        <div className="bg-netflix-black min-h-screen">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                <MovieRow title="Movies" movies={movies} />
                <MovieRow title="TV Shows" movies={tvShows} />
            </main>
        </div>
    );
};

export default Dashboard;