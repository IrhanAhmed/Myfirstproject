// app/car/honda-civic/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import next/image for optimized image rendering

// Define the car details
const hondaCivicData = {
  name: "Honda Civic",
  price: "PKR 85 Lakh",
  image: "https://tse1.mm.bing.net/th?id=OIP.fM9Cs9WheRGvEadagdmrMQHaEK&pid=Api&P=0&h=220",
  doors: "4 Doors",
  engine: "1500cc to 2000cc",
  condition: "9.5/10",
  driven: "5,000 km",
  transmission: "CVT Automatic",
};

const HondaCivicDetailsPage = () => {
  // Remove the unused `params` variable
  // const params = useParams();

  return (
    <div>
      <h1 className="text-3xl text-center">
        {hondaCivicData.name} Price in Pakistan, Images, Reviews & Specs
      </h1>

      {/* Using next/image for image optimization */}
      <div className="flex justify-center mt-4">
        <Image
          src={hondaCivicData.image}
          alt={hondaCivicData.name}
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
        <p><span className="font-bold">Number of Doors:</span> {hondaCivicData.doors}</p>
        <p><span className="font-bold">Engine:</span> {hondaCivicData.engine}</p>
        <p><span className="font-bold">Condition:</span> {hondaCivicData.condition}</p>
        <p><span className="font-bold">Driven:</span> {hondaCivicData.driven}</p>
        <p><span className="font-bold">Transmission:</span> {hondaCivicData.transmission}</p>
      </div>

      {/* Price and Payment Button */}
      <div className="flex items-center justify-center mt-6 space-x-4">
        <div className="border border-gray-400 p-4 w-34 h-31 flex items-center justify-center">
          <h1 className="text-3xl text-blue-800">{hondaCivicData.price}</h1>
        </div>
        <Link href="/payment1/form">
          <button className="text-white bg-blue-500 py-2 px-4">Payment1</button>
        </Link>
      </div>
    </div>
  );
};

export default HondaCivicDetailsPage;
