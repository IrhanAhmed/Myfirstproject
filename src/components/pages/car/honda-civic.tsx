// /pages/car/honda-civic.js
import React from 'react';
import Link from 'next/link';

const HondaCivic = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl">Honda Civic</h1>
            <p>Price in Pakistan: PKR 85 Lakh</p>
            <img src='https://tse1.mm.bing.net/th?id=OIP.fM9Cs9WheRGvEadagdmrMQHaEK&pid=Api&P=0&h=220' alt='Honda Civic' />
            <p>Launching on 16 January 2025</p>

            {/* Links to other car pages */}
            <div className="mt-4">
                <Link href="/car/toyota-corolla">Toyota Corolla</Link><br />
                <Link href="/car/land-cruiser">Land Cruiser</Link><br />
                <Link href="/car/suzuki">Suzuki</Link><br />
                <Link href="/">Back to Home</Link>
            </div>
        </div>
    );
};

export default HondaCivic;
