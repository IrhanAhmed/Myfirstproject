import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js for optimized image loading

const Topbar = () => {
  return (
    <div className="flex justify-between items-center bg-gray-800 p-2">
      {/* Left Section */}
      <div className="flex items-center">
        <Image
          src="/mobile.jpeg" // Path to your logo image
          alt="Logo"
          width={30} // Set the desired width
          height={20} // Set the desired height
          className="mr-2" // Add some margin if needed
        />
        <h1 className="text-white text-xl">Download App Via SMS</h1> {/* Site title or text next to the logo */}
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4"> {/* Add spacing between items */}
        <h3 className="text-red-600 ">اردو</h3>
        
        {/* Vertical Divider */}
        <div className="h-6 border-l border-white mx-2"></div> {/* Vertical line */}

        <h3 className="text-white cursor-pointer">Signup</h3> {/* Changed to "Signup" */}
        
        {/* Vertical Divider */}
        <div className="h-6 border-l border-white mx-2"></div> {/* Vertical line */}

        <h3 className="text-white cursor-pointer">Signin</h3> {/* Changed to "Signin" */}
      </div>
    </div>
  );
};

export default Topbar;
