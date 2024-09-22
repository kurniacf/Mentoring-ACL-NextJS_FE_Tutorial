import type { NextPage } from 'next';
import Link from 'next/link';
import Button from '../components/Button';

const Home: NextPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-netflix-black">
            <h1 className="text-4xl font-bold text-netflix-red mb-8">
                Welcome to Netflix Clone
            </h1>
            <Link href="/dashboard">
                <Button>Go to Dashboard</Button>
            </Link>
        </div>
    );
};

export default Home;