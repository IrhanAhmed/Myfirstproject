// /pages/car/land-cruiser.js
import React from 'react';
import Link from 'next/link';

const LandCruiser = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl">Land Cruiser</h1>
            <p>Price in Pakistan: PKR 3.0 Crore</p>
            <img src='https://tse1.mm.bing.net/th?id=OIP.7NNgII4raoXdqZ4tIqgO-AHaEW&pid=Api&P=0&h=220' alt='Land Cruiser' />
            <p>Launching on 14 August 2025</p>

            {/* Links to other car pages */}
            <div className="mt-4">
                <Link href="/car/toyota-corolla">Toyota Corolla</Link><br />
                <Link href="/car/honda-civic">Honda Civic</Link><br />
                <Link href="/car/suzuki">Suzuki</Link><br />
                <Link href="/">Back to Home</Link>
            </div>
        </div>
    );
};

export default LandCruiser;
