// app/car/[carId]/page.tsx
import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
 // Simple data for each car
 const carData = {
  "toyota-corolla": {
    name: "Toyota Corolla",
    price: "PKR 35 Lakh",
    image: "https://tse1.mm.bing.net/th?id=OIP._HDaSvFqfrE3xavKQwErlAAAAA&pid=Api&P=0&h=220",
  },
  "honda-civic": {
    name: "Honda Civic",
    price: "PKR 85 Lakh",
    image: "https://tse1.mm.bing.net/th?id=OIP.fM9Cs9WheRGvEadagdmrMQHaEK&pid=Api&P=0&h=220",
  },
  "toyota-land-cruiser": {
    name: "Toyota Land Cruiser",
    price: "PKR 1.5 Crore",
    image: "https://tse1.mm.bing.net/th?id=OIP.7NNgII4raoXdqZ4tIqgO-AHaEW&pid=Api&P=0&h=220",
  },
  "suzuki": {
    name: "Suzuki Alto",
    price: "PKR 20 Lakh",
    image: "https://tse1.mm.bing.net/th?id=OIP.AK4DNo2xMntG2o1k8iAQAgHaEK&pid=Api&P=0&h=220",
  },
};

    
    // Add more cars here
  
const CarDetailsPage = ({ params }: { params: { carId: string } }) => {
  return (
    <div>
      <h1 className="text-3xl text-center">
        Toyota Corolla Price in Pakistan, Images, Reviews & Specs
      </h1>

      {/* Centering the image */}
      <div className="flex justify-center mt-4">
        <img 
          src="https://tse1.mm.bing.net/th?id=OIP._HDaSvFqfrE3xavKQwErlAAAAA&pid=Api&P=0&h=220" 
          alt="Toyota Corolla" 
          className="mt-4" 
        />
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
          <span className="font-bold">Number of Doors:</span> 4 Doors
        </p>
        <p>
          <span className="font-bold">Engine:</span> 108cc to 1800cc
        </p>
        <p>
          <span className="font-bold">Condition:</span> 9/10
        </p>
        <p>
          <span className="font-bold">Driven:</span> 10,000 km
        </p>
        <p>
          <span className="font-bold">Transmission:</span> Automatic & Manual
        </p>
      </div>
      
  {/* Price and Payment Button in One Line */}
<div className="flex items-center justify-center mt-6 space-x-4">
  <div className="border border-gray-400 p-4 w-34 h-31 flex items-center justify-center">
    <h1 className="text-3xl text-blue-800">PKR 38 Lakh</h1>
  </div>
  <Link href="/payment1/form">
    <button className="text-white bg-blue-500 py-2 px-4">Payment1</button>
  </Link>
</div>

      </div>
    
  );
};

export default CarDetailsPage;
