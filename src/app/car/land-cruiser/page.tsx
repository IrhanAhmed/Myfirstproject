// app/car/land-cruiser/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import next/image for optimized image rendering

// Define the car details
const landCruiserData = {
  name: "Toyota Land Cruiser",
  price: "PKR 1.5 Crore",
  image: "https://tse2.mm.bing.net/th?id=OIP.5za0zmJ2X3i-zMGb0o7sXQHaEW&pid=Api&P=0&h=220",
  doors: "5 Doors",
  engine: "4500cc",
  condition: "10/10",
  driven: "20,000 km",
  transmission: "Automatic",
};

const LandCruiserDetailsPage = () => {
  // Remove the unused `params` variable
  // const params = useParams();

  return (
    <div>
      <h1 className="text-3xl text-center">
        {landCruiserData.name} Price in Pakistan, Images, Reviews & Specs
      </h1>

      {/* Using next/image for image optimization */}
      <div className="flex justify-center mt-4">
        <Image
          src={landCruiserData.image}
          alt={landCruiserData.name}
          width={600} // Define width for image optimization
          height={400} // Define height for image optimization
          className="mt-4"
          layout="intrinsic"
        />
      </div>

      {/* Button Container */}
      <div className="flex justify-center space-x-4 mt-4">
        <button className="text-white bg-black py-2 px-4">Book a Test Drive</button>
        <button className="text-white bg-black py-2 px-4">Request a Bank Finance</button>
        <button className="text-white bg-black py-2 px-4">Visit Place</button>
        <button className="text-white bg-black py-2 px-4">Car Inspection</button>
      </div>

      {/* Vehicle Description Header */}
      <h3 className="text-2xl text-center mt-6">Vehicle Description</h3>

      {/* Vehicle Specifications */}
      <div className="mt-4 flex flex-wrap justify-center space-x-8">
        <p><span className="font-bold">Number of Doors:</span> {landCruiserData.doors}</p>
        <p><span className="font-bold">Engine:</span> {landCruiserData.engine}</p>
        <p><span className="font-bold">Condition:</span> {landCruiserData.condition}</p>
        <p><span className="font-bold">Driven:</span> {landCruiserData.driven}</p>
        <p><span className="font-bold">Transmission:</span> {landCruiserData.transmission}</p>
      </div>

      {/* Price and Payment Button */}
      <div className="flex items-center justify-center mt-6 space-x-4">
        <div className="border border-gray-400 p-4 w-34 h-31 flex items-center justify-center">
          <h1 className="text-3xl text-blue-800">{landCruiserData.price}</h1>
        </div>
        <Link href="/payment1/form">
          <button className="text-white bg-blue-500 py-2 px-4">Payment1</button>
        </Link>
      </div>
    </div>
  );
};

export default LandCruiserDetailsPage;
