"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component

const Navbar = () => {
  return (
    <header>
      <nav className="bg-gray-800 text-white h-16 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          {/* Optimized Logo using next/image */}
          <Image
            src="/logo.png" // Ensure this is the correct path to your image
            alt="Logo"
            width={48} // Specify width for optimization
            height={48} // Specify height for optimization
            className="h-12" // Optional class to control logo size
            priority // Ensures logo loads quickly for better user experience
          />
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-500">Home</Link>
            </li>
            <li>
              <Link href="/aboutus" className="hover:text-blue-500">New Car</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500">Bike</Link>
            </li>
            <li>
              <Link href="/auto-store" className="hover:text-blue-500">Auto Store</Link>
            </li>
            <li>
              <Link href="/videos" className="hover:text-blue-500">Videos</Link>
            </li>
            <li>
              <Link href="/forms" className="hover:text-blue-500">Forms</Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-blue-500">Blogs</Link>
            </li>
            <li>
              <Link href="/more" className="hover:text-blue-500">More</Link>
            </li>
          </ul>
        </div>

        {/* Post Ad Button */}
        <button className="bg-red-700 text-white text-xl py-3 px-5 rounded-lg hover:bg-red-600 transition">
          Post an Ad
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
