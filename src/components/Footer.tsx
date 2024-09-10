// components/Footer.js
"use client";
import {
  Category,
  Company,
  Contact,
  getCategories,
  getCompany,
  getContacts,
  getPolicies,
  Policy,
} from "@/utils/api";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [company, setCompany] = useState<Company | null>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [policies, setPolicies] = useState<Policy[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
        const companyData = await getCompany();
        setCompany(companyData);
        getContacts(true, false).then((data) => setContacts(data));
        getPolicies().then((data) => setPolicies(data));
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
          {company?.logo && (
            <Image
              src={company.logo.url}
              alt="Company Logo"
              width={100}
              height={50}
              className="w-auto"
            />
          )}


          {/* Company Description */}
          <p className="mt-4 text-lg">
            {company?.description || "Company Description"}
          </p>

          {/* Address */}
          <p className="mt-4">🏢 {company?.address}</p>

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
            {policies.length > 0 && (
              policies.map((policy, i) => (
                <li key={i}>
                  <a
                    href={policy.url}
                    className="hover:text-brightBlue"
                  >
                    {policy.name}
                  </a>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Fourth Column: Contact Numbers */}
        <div>
          <h3 className="font-bold text-lg mb-4">Liên hệ</h3>
          <ul className="space-y-2">
            {contacts.length > 0 &&
              contacts.filter(contact => contact.type=="phone").map((contact, index) => (
                <li key={index}>
                  <div className="font-bold">{contact.label}</div>
                  <a href={contact.url} className="hover:text-brightBlue">
                    {contact.value}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* Copyright and Legal Links */}
      <div className="mt-12 text-center text-sm border-t border-gray-600 pt-6">
        <p>© 2024 StreetLight Co. All rights reserved.</p>
      </div>
    </footer>
  );
}
