// /pages/car/suzuki.js
import React from 'react';
import Link from 'next/link';

const Suzuki = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl">Suzuki</h1>
            <p>Price in Pakistan: PKR 30 Lakh</p>
            <img src='https://tse2.mm.bing.net/th?id=OIP.Ta7DkZVHUdTo87Q0ynxOBgHaEA&pid=Api&P=0&h=220' alt='Suzuki' />
            <p>Launching on 9 November 2025</p>

            {/* Links to other car pages */}
            <div className="mt-4">
                <Link href="/car/toyota-corolla">Toyota Corolla</Link><br />
                <Link href="/car/honda-civic">Honda Civic</Link><br />
                <Link href="/car/land-cruiser">Land Cruiser</Link><br />
                <Link href="/">Back to Home</Link>
            </div>
        </div>
    );
};
export default Suzuki;
