"use client"; // Specify that this is a client component

import React from 'react';
import { useRouter } from 'next/navigation';

const Payment1 = () => {
  const router = useRouter(); // Initialize the router

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission

    const target = event.currentTarget as HTMLFormElement; // Type the currentTarget

    // Collect form data
    const formData = {
      name: (target.elements.namedItem('name') as HTMLInputElement).value,
      email: (target.elements.namedItem('email') as HTMLInputElement).value,
      card: (target.elements.namedItem('card') as HTMLInputElement).value,
      address: (target.elements.namedItem('address') as HTMLInputElement).value,
    };

    console.log('Form submitted with data:', formData); // Log form data

    // Redirect to Thank You page after processing
    router.push('/payment1/thank-you');
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold text-center mb-6">Payment Form</h1>
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-semibold">Name</label>
          <input 
            id="name" 
            name="name" 
            type="text" 
            placeholder="Enter Your Name" 
            required 
            className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-semibold">Email</label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            placeholder="Enter Your Email" 
            required 
            className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Card Field */}
        <div className="flex flex-col">
          <label htmlFor="card" className="mb-1 font-semibold">Card Number</label>
          <input 
            id="card" 
            name="card" 
            type="text" 
            placeholder="Enter Your Card Number" 
            required 
            className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Address Field */}
        <div className="flex flex-col">
          <label htmlFor="address" className="mb-1 font-semibold">Address</label>
          <input 
            id="address" 
            name="address" 
            type="text" 
            placeholder="Enter Your Address" 
            required 
            className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Payment1;
