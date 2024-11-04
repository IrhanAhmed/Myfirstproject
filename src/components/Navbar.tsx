"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-gray-800 text-white h-12 py-12 px-3 flex justify-between items-center">
        <div className="flex items-center">
        <img src="/logo.png" alt="Logo"  className="h-12" />

          
        </div>
        <div>
          <ul className="flex space-x-14">
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
              <Link href="/contact" className="hover:text-blue-500">Auto Store</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500">Videos</Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-blue-500">Forms</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500">Blogs</Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-blue-500">More</Link>
            </li>
          </ul>
        </div>
      <button className=" bg-red-700 text-2xl py-3 px-5"> 
            Post an Ad
      </button>

      </nav>
    </header>
  );
};

export default Navbar;
