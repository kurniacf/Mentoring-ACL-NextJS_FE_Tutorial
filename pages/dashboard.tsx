import React from 'react';
import { NextPage } from 'next';
import Navbar from '../components/Navbar';
import MovieRow from '../components/MovieRow';

const Dashboard: NextPage = () => {
    // Dummy data menggunakan gambar dari TMDb
    const trendingMovies = [
        { id: 1, title: "Movie 1", imageUrl: "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg" },
        { id: 2, title: "Movie 2", imageUrl: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg" },
        { id: 3, title: "Movie 3", imageUrl: "https://image.tmdb.org/t/p/w500/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg" },
        { id: 4, title: "Movie 4", imageUrl: "https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg" },
        { id: 5, title: "Movie 5", imageUrl: "https://image.tmdb.org/t/p/w500/gmU7P3FzGFsl2dGS0yrTz5Gib7h.jpg" },
    ];

    const newReleases = [
        { id: 6, title: "New Movie 1", imageUrl: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg" },
        { id: 7, title: "New Movie 2", imageUrl: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg" },
        { id: 8, title: "New Movie 3", imageUrl: "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg" },
        { id: 9, title: "New Movie 4", imageUrl: "https://image.tmdb.org/t/p/w500/8rpDcsfLJypbO6vREc0547VKqEv.jpg" },
        { id: 10, title: "New Movie 5", imageUrl: "https://image.tmdb.org/t/p/w500/oqP1qEZccq5AD9TVTIaO6IGUj7o.jpg" },
    ];

    return (
        <div className="bg-netflix-black min-h-screen">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                <MovieRow title="Trending Now" movies={trendingMovies} />
                <MovieRow title="New Releases" movies={newReleases} />
            </main>
        </div>
    );
};

export default Dashboard;