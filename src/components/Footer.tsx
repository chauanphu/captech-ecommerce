// components/Footer.js
"use client";
import { Category, Company, getCategories, getCompany } from "@/utils/api";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [company, setCompany] = useState<Company | null>(null);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
        const companyData = await getCompany();
        setCompany(companyData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <footer className="bg-darkGray text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-8">
        {/* First Column: Logo, Description, Contact Details */}
        <div>
          {/* Logo */}
          <Image src={company?.logo.url || ""} alt="Company Logo" width={150} height={50} />

          {/* Company Description */}
          <p className="mt-4 text-sm">
            {company?.description || "Company Description"}
          </p>

          {/* Address */}
          <p className="mt-4">{company?.address}</p>

          {/* Email */}
          <p className="mt-2">
            <a
              href={`mailto:${company?.email}`}
              className="hover:text-brightBlue"
            >
              📩 {company?.email}
            </a>
          </p>
        </div>

        {/* Second Column: Product Categories */}
        <div>
          <h3 className="font-bold text-lg mb-4">Sản phẩm</h3>
          <ul className="space-y-2">
            {categories.length > 0 &&
              categories.map((category) => (
                <li key={category.sku}>
                  <a
                    href={`/products/${category.sku}`}
                    className="hover:text-brightBlue"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        {/* Third Column: Customer Support */}
        <div>
          <h3 className="font-bold text-lg mb-4">Hỗ trợ khách hàng</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-brightBlue">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brightBlue">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brightBlue">
                Return Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-brightBlue">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Fourth Column: Contact Numbers */}
        <div>
          <h3 className="font-bold text-lg mb-4">Liên hệ</h3>
          <ul className="space-y-2">
            <li>
              <span className="font-bold">Sales Department: </span>
              <a href="tel:+123456789" className="hover:text-brightBlue">
                +123 456 789
              </a>
            </li>
            <li>
              <span className="font-bold">Support Department: </span>
              <a href="tel:+123456788" className="hover:text-brightBlue">
                +123 456 788
              </a>
            </li>
            <li>
              <span className="font-bold">General Inquiries: </span>
              <a href="tel:+123456787" className="hover:text-brightBlue">
                +123 456 787
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright and Legal Links */}
      <div className="mt-12 text-center text-sm border-t border-gray-600 pt-6">
        <p>© 2024 StreetLight Co. All rights reserved.</p>
        <p className="mt-2">
          <a href="#" className="hover:text-brightBlue">
            Privacy Policy
          </a>{" "}
          |
          <a href="#" className="hover:text-brightBlue ml-2">
            Terms & Conditions
          </a>
        </p>
      </div>
    </footer>
  );
}
