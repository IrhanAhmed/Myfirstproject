import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Topbar from "@/components/topbar"; // Ensure this matches your file name exactly
import "./globals.css";

interface RootLayoutProps {
  children: ReactNode; // Specify the type for children
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="antialiased">
        <Topbar /> {/* Include Topbar here */}
        <Navbar />
        {children}
      
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
