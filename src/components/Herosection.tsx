// components/Herosection.tsx
import React from "react";
import Link from "next/link";

function Herosection() {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="flex flex-col items-center gap-10 mt-8">

        {/* Hero Section Wrapper */}
        <div className="hero-background bg-blue-50 p-6 rounded-lg shadow-lg">
          <div className="hero-container flex flex-col items-center">
            <div className="main flex flex-col items-center">
              <h1 className="text-3xl font-bold text-center">Find Used Cars in Pakistan</h1>
              <p className="mt-2 text-center">With thousands of cars, we have just the right one for you</p>
              <div className="search-bar flex mt-4">
                <input
                  type="text"
                  placeholder="Search your car"
                  className="border p-2 rounded"
                />
                <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">Search</button>
              </div>
              <div className="hero-button flex items-center mt-4 bg-blue-100 p-2 rounded-full">
                <span className="mr-2 text-blue-700">Advanced Filter</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Combined Section for Posting Ads and Trying PakWheels */}
        <div className="flex justify-center gap-10 mt-8">

          {/* Left Section */}
          <div className="flex flex-col items-center p-4 border rounded shadow-md">
            <h3 className="text-2xl text-blue-500 text-center">Post Your Ad on PakWheels</h3>
            <ul className="mt-4 text-left">
              <li>Post your ad for free in 3 easy steps</li>
              <li>Get genuine offers from verified buyers</li>
              <li>Sell your car fast at the best price</li>
            </ul>
            <Link href="/post-ad">
              <button className="text-center text-white bg-red-700 py-2 px-4 mt-4">Post Your Ad</button>
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center p-4 border rounded shadow-md">
            <h3 className="text-2xl text-blue-500 text-center">Try PakWheels Sell It For Me</h3>
            <ul className="mt-4 text-left">
              <li>Dedicated sales experts to sell your car</li>
              <li>We bargain for you and share the best price</li>
              <li>We ensure a safe and secure transaction</li>
            </ul>
            <Link href="/register-car">
              <button className="text-center text-white bg-blue-700 py-2 px-4 mt-4">Register Your Car</button>
            </Link>
          </div>
        </div>

        <div className="text-center text-3xl py-10">OR</div>

      </div>

      {/* Featured New Car Section */}
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-3xl">Featured New Cars</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">

          {/* Car Card: Toyota Corolla */}
          <Link href="/car/toyota-corolla">
            <div className="feature-main text-center border p-4 rounded shadow-md cursor-pointer">
              <img src="https://tse1.mm.bing.net/th?id=OIP._HDaSvFqfrE3xavKQwErlAAAAA&pid=Api&P=0&h=220" alt="Toyota Corolla" className="mt-4" />
              <h2 className="text-blue-700">Toyota Corolla</h2>
              <p className="text-green-500">PKR 38 Lakh</p>
              <p>Launching on 2 December 2024</p>
            </div>
          </Link>

          {/* Car Card: Honda Civic */}
          <Link href="/car/honda-civic">
            <div className="feature-main text-center border p-4 rounded shadow-md cursor-pointer">
              <img src="https://tse1.mm.bing.net/th?id=OIP.fM9Cs9WheRGvEadagdmrMQHaEK&pid=Api&P=0&h=220" alt="Honda Civic" className="mt-4" />
              <h2 className="text-blue-700">Honda Civic</h2>
              <p className="text-green-500">PKR 85 Lakh</p>
              <p>Launching on 16 January 2025</p>
            </div>
          </Link>

          {/* Car Card: Land Cruiser */}
          <Link href="/car/land-cruiser">
            <div className="feature-main text-center border p-4 rounded shadow-md cursor-pointer">
              <img src="https://tse1.mm.bing.net/th?id=OIP.7NNgII4raoXdqZ4tIqgO-AHaEW&pid=Api&P=0&h=220" alt="Land Cruiser" className="mt-4" />
              <h2 className="text-blue-700">Land Cruiser</h2>
              <p className="text-green-500">PKR 3.0 Crore</p>
              <p>Launching on 14 August 2025</p>
            </div>
          </Link>

          {/* Car Card: Suzuki */}
          <Link href="/car/suzuki">
            <div className="feature-main text-center border p-4 rounded shadow-md cursor-pointer">
              <img src="https://tse2.mm.bing.net/th?id=OIP.Ta7DkZVHUdTo87Q0ynxOBgHaEA&pid=Api&P=0&h=220" alt="Suzuki" className="mt-4" />
              <h2 className="text-blue-700">Suzuki</h2>
              <p className="text-green-500">PKR 30 Lakh</p>
              <p>Launching on 9 November 2025</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
