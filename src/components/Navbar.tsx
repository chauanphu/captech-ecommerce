// components/Navbar.js
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { Category, getCategories } from "@/utils/api";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  // Fetch categories from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Get categories from the API https://localhost:1337/api/categories
  return (
    <nav aria-label="Main Navigation" className="w-full px-4 lg:px-8">
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
      <div className="bg-white py-4 border-b border-lightGray lg:px-8">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Image - Replace Text with Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 hidden lg:block" // Hide on Mobile
          >
            <Image
              src="http://localhost:1337/uploads/logo_b4cf2f84ee.png" // Path to your logo image in the public folder
              alt="StreetLight Co. Logo"
              width={100} // Set your desired width
              height={100} // Set your desired height
            />
          </motion.div>

          {/* Search Bar */}
          <div className="w-full lg:w-1/2 relative">
            <input
              type="text"
              placeholder="Tìm kiêm sản phẩm..."
              aria-label="Search Products"
              className="w-4/5 lg:w-full border border-lightGray rounded-full py-2 px-4 focus:outline-none"
            />
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="absolute top-2 right-4 text-gray-400"
            >
              
            </motion.span>
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
          { (categories && categories.length > 0) &&
          categories.map((category, index) => (
            <div className="relative group" key={index}>
              <a
                href={`/categories/${category.sku}`}
                className="text-primaryBlue flex items-center"
                aria-haspopup="true"
              >
                <Image
                  src={"http://localhost:1337" + category.image.url}
                  alt={`${category.name} Icon`}
                  width={36}
                  height={36}
                  className="mr-2"
                />
                <span>{category.name}</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar for Mobile Menu */}
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
              <div
                className="text-primaryBlue font-bold text-2xl"
              >
                <Image
                  src="http://localhost:1337/uploads/logo_b4cf2f84ee.png" // Use the same logo for mobile sidebar
                  alt="StreetLight Co. Logo"
                  width={90}
                  height={30}
                />
              </div>

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
              <a href={"#"} className="hover:text-brightBlue text-primaryBlue font-semibold" aria-label="Common Questions">
                  Sản phẩm
              </a>
              {/* Categories without Subcategories */}
              {categories.map((category, index) => (
                <Link key={index} href={category.sku} className="flex items-center my-4 space-x-2">
                  <Image
                    src={"http://localhost:1337" + category.image.url}
                    alt={`${category.name} Icon`}
                    width={32}
                    height={32}
                  />
                  <span className="text-primaryBlue">{category.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </nav>
  );
}
