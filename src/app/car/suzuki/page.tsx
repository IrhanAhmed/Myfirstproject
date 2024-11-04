// app/car/suzuki-vitara/page.tsx
import React from 'react';
import Link from 'next/link'; // Import Link for navigation

const SuzukiVitaraDetailsPage = ({ params }: { params: { carId: string } }) => {
  return (
    <div>
      <h1 className="text-3xl text-center">
        Suzuki Vitara Price in Pakistan, Images, Reviews & Specs
      </h1>

      {/* Centering the image */}
      <div className="flex justify-center mt-4">
        <img src="https://tse2.mm.bing.net/th?id=OIP.Ta7DkZVHUdTo87Q0ynxOBgHaEA&pid=Api&P=0&h=220" alt="Suzuki" className="mt-4" />
      </div>

      {/* Button Container */}
      <div className="flex justify-center space-x-4 mt-4">
        <button className="text-white bg-black py-2 px-4">
          Book a Test Drive
        </button>
        <button className="text-white bg-black py-2 px-4">
          Request a Bank Finance
        </button>
        <button className="text-white bg-black py-2 px-4">
          Visit Place
        </button>
        <button className="text-white bg-black py-2 px-4">
          Car Inspection
        </button>
      </div>

      {/* Vehicle Description Header */}
      <h3 className="text-2xl text-center mt-6">Vehicle Description</h3>

      {/* Vehicle Specifications in One Line */}
      <div className="mt-4 flex flex-wrap justify-center space-x-8">
        <p>
          <span className="font-bold">Number of Doors:</span> 5 Doors
        </p>
        <p>
          <span className="font-bold">Engine:</span> 1.4L Turbocharged
        </p>
        <p>
          <span className="font-bold">Condition:</span> 9.5/10
        </p>
        <p>
          <span className="font-bold">Driven:</span> 15,000 km
        </p>
        <p>
          <span className="font-bold">Transmission:</span> Automatic
        </p>
      </div>

      {/* Price and Payment Button in One Line */}
      <div className="flex items-center justify-center space-x-4 mt-4">
        {/* Price Box */}
        <div className="border border-gray-400 p-4 w-34 h-31 flex items-center justify-center">
          <h1 className="text-3xl text-blue-800">PKR 30 Lakh</h1>
        </div>
        <Link href="/payment1/form">
          <button className="text-white bg-blue-500 py-2 px-4">Payment1</button>
        </Link>
      </div>
    </div>
  );
};

export default SuzukiVitaraDetailsPage;
