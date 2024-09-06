// components/Navbar.js
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa"; // Removed FaChevronDown since no subcategories are needed

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Categories Array
  const categories = [
    {
      name: "LED Street Lights",
      icon: "/icons/led-icon.png",
    },
    {
      name: "Smart Lighting",
      icon: "/icons/smart-light-icon.png",
    },
    {
      name: "Solar-Powered Lights",
      icon: "/icons/solar-icon.png",
    },
  ];

  return (
    <nav aria-label="Main Navigation" className="w-full">
      {" "}
      {/* Added horizontal padding */}
      {/* First Line - Utility Bar (Hidden on Mobile) */}
      <div className="bg-lightGray text-darkGray text-sm py-2 hidden lg:block lg:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <p>Hotline: +123 456 789</p>
            <p>Open Hours: Mon-Fri, 9AM-6PM</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Common Questions"
              className="hover:text-primaryBlue"
            >
              Common Questions
            </a>
            <a
              href="#"
              aria-label="Policies"
              className="hover:text-primaryBlue"
            >
              Policies
            </a>
            <a href="#" aria-label="News" className="hover:text-primaryBlue">
              News
            </a>
          </div>
        </div>
      </div>
      {/* Second Line - Main Navbar */}
      <div className="bg-white py-4 border-b border-lightGray px-4 lg:px-8">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo - Hidden on Mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-primaryBlue font-bold text-2xl hidden lg:block"
          >
            StreetLight Co.
          </motion.div>

          {/* Search Bar - Expanded to 80% on Mobile */}
          <div className="w-full lg:w-1/2 relative">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              aria-label="Search Products"
              className="w-4/5 lg:w-full border border-lightGray rounded-full py-2 px-4 focus:outline-none"
              // 80% width on mobile (w-4/5) and full width on large screens (lg:w-full)
            />
          </div>

          {/* Burger Icon for Mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-2xl text-primaryBlue" />
              ) : (
                <FaBars className="text-2xl text-primaryBlue" />
              )}
            </button>
          </div>

          {/* Navigation Links for Large Screens */}
          <div className="hidden lg:flex space-x-8 text-primaryBlue font-medium">
            <a href="#" className="hover:text-brightBlue" aria-label="About Us">
              About Us
            </a>
            <a href="#" className="hover:text-brightBlue" aria-label="Projects">
              Projects
            </a>
            <a href="#" className="hover:text-brightBlue" aria-label="Contact">
              Contact
            </a>
          </div>
        </div>
      </div>
      {/* Third Line - Product Categories (Hidden in Mobile) */}
      <div className="bg-white py-2 hidden lg:block lg:px-8">
        <div className="container mx-auto flex space-x-8 justify-center">
          {categories.map((category, index) => (
            <div className="relative group" key={index}>
              <a
                href="#"
                className="text-primaryBlue flex items-center"
                aria-haspopup="true"
              >
                <Image
                  src={category.icon}
                  alt={`${category.name} Icon`}
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <span>{category.name}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* Overlay and Sidebar for Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)} // Close the sidebar when clicking on the overlay
          />

          {/* Sidebar */}
          <motion.div
            className="bg-white shadow-lg fixed top-0 left-0 w-80 h-full p-4 flex flex-col space-y-4 z-50 lg:hidden"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <div className="flex flex-col space-y-2">
              {/* Logo in Sidebar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-primaryBlue font-bold text-2xl"
              >
                StreetLight Co.
              </motion.div>

              {/* Utility Bar (Collapsed) */}
              <div className="border-t border-lightGray pt-4 mt-4">
                <p className="text-darkGray">Hotline: +123 456 789</p>
                <p className="text-darkGray">Open Hours: Mon-Fri, 9AM-6PM</p>
              </div>

              {/* Navigation Links */}
              <a
                href="#"
                className="hover:text-brightBlue"
                aria-label="About Us"
              >
                About Us
              </a>
              <a
                href="#"
                className="hover:text-brightBlue"
                aria-label="Projects"
              >
                Projects
              </a>
              <a
                href="#"
                className="hover:text-brightBlue"
                aria-label="Contact"
              >
                Contact
              </a>

              {/* Categories without Subcategories */}
              {categories.map((category, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Image
                    src={category.icon}
                    alt={`${category.name} Icon`}
                    width={24}
                    height={24}
                  />
                  <span className="text-primaryBlue">{category.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </nav>
  );
}
