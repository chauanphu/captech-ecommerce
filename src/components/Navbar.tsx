// components/Navbar.js
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { Category, Company, getCategories, getCompany } from "@/utils/api";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [company, setCompany] = useState<Company | null>(null);

  // Fetch categories from the API
  useEffect(() => {
    const fetchSetup = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
        const companyData = await getCompany();
        setCompany(companyData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchSetup();
  }, []);

  // Get categories from the API https://localhost:1337/api/categories
  return (
    <nav aria-label="Main Navigation" className="w-full sticky">
      {/* First Line - Utility Bar (Hidden on Mobile) */}
      <div className="bg-lightGray text-darkGray text-sm py-2 hidden lg:block lg:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <p>Hotline: +123 456 789</p>
            <p>Open Hours: Mon-Fri, 9AM-6PM</p>
          </div>
          <div className="flex space-x-4">
            {company?.page && (
              company.page.filter((page) => !page.mainPage).map((page, index) => (
                <Link key={index} href={page.sku} className="hover:text-primaryBlue">
                  {page.name}
                </Link>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Second Line - Main Navbar */}
      <div className="bg-white py-4 border-b border-lightGray px-4 lg:px-8">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Image - Replace Text with Image */}
          <div
            className="flex-shrink-0 hidden lg:block" // Hide on Mobile
          >
            {company && (
              <Link href="/">
                <Image
                  src={company.logo.url} // Path to your logo image in the public folder
                  alt={company.logo.url}
                  width={70} // Set your desired width
                  height={70} // Set your desired height
                  style={{ width: "auto" }} // Set your desired style
                />
              </Link>
            )}
          </div>

          {/* Search Bar */}
          <div className="w-full lg:w-1/2 relative">
            <input
              type="text"
              placeholder="Tìm kiêm sản phẩm..."
              aria-label="Search Products"
              className="w-4/5 lg:w-full border border-lightGray rounded-full py-2 px-4 focus:outline-none"
            />
            <span className="absolute top-2 right-4 text-gray-400"></span>
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
            {company &&
              company.page.filter((page) => page.mainPage).map((page, index) => (
                <a
                  key={index}
                  href={`/${page.sku}`}
                  className="hover:text-brightBlue"
                  aria-label={page.name}
                >
                  {page.name}
                </a>
              ))}
          </div>
        </div>
      </div>

      {/* Third Line - Product Categories (Hidden in Mobile) */}
      <div className="bg-white py-2 hidden lg:block lg:px-8">
        <div className="container mx-auto flex space-x-8 justify-center">
          {categories &&
            categories.length > 0 &&
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
            className="bg-white shadow-lg fixed top-0 left-0 w-80 h-full p-4 flex flex-col space-y-4 z-50 lg:hidden overflow-scroll"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <div className="flex flex-col space-y-2">
              {/* Logo in Sidebar */}
              <div className="text-primaryBlue font-bold text-2xl pb-2 border-b-2">
                <Image
                  src="http://localhost:1337/uploads/logo_b4cf2f84ee.png" // Use the same logo for mobile sidebar
                  alt="StreetLight Co. Logo"
                  width={90}
                  height={30}
                />
              </div>
              
              {/* Categories without Subcategories */}
              {categories.map((category, index) => (
                <Link
                  key={index}
                  href={category.sku}
                  className="flex items-center py-1 space-x-2"
                >
                  <Image
                    src={"http://localhost:1337" + category.image.url}
                    alt={`${category.name} Icon`}
                    width={48}
                    height={48}
                  />
                  <span className="text-primaryBlue">{category.name}</span>
                </Link>
              ))}
              {/* Navigation Links */}
              {company &&
                company.page.map((page, index) => (
                  <Link
                    key={index}
                    href={page.sku}
                    className="text-primaryBlue py-2"
                  >
                    {page.name}
                  </Link>
                ))}
              {/* Utility Bar (Collapsed) */}
              <div className="border-t border-lightGray pt-4 mt-4">
                <p className="text-darkGray">Hotline: +123 456 789</p>
                <p className="text-darkGray">Open Hours: Mon-Fri, 9AM-6PM</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </nav>
  );
}
