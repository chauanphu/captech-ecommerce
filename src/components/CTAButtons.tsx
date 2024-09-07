// components/CTAButtons.js
"use client";

import { FaPhone, FaCommentDots, FaEnvelope, FaTimes } from "react-icons/fa"; // Import icons
import { BsFillChatDotsFill } from "react-icons/bs"; // Another message icon for variation
import { Contact, getContacts } from "@/utils/api";
import { use, useEffect, useState } from "react";
import Image from "next/image";

export default function CTAButtons() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  useEffect(() => {
    getContacts().then((data) => setContacts(data));
  }, []);
  return (
    <div>
      {/* Vertical CTA buttons bar on the right for desktop */}
      <div className="fixed hidden lg:block right-0 top-1/2 transform -translate-y-1/2 z-50">
        {/* Background Panel */}
        <div className="bg-darkGray bg-opacity-70 backdrop-blur-lg border border-white border-opacity-20 p-4 rounded-l-3xl h-auto flex flex-col justify-center space-y-4 shadow-lg">
          {contacts.length > 0 &&
            contacts.map((contact, index) => (
              <div key={index} className="p-2 rounded-full">
                <a href={contact.url} className="text-white">
                  {contact.icon ? (
                    <Image
                      src={contact.icon.url}
                      alt={contact.icon.name}
                      width={32}
                      height={32}
                    />
                  ) : (
                    <FaPhone size={24} />
                  )}
                </a>
              </div>
            ))}
        </div>
      </div>

      {/* Mobile View: Sticky Floating Bar with Glassmorphism */}
      <div className="fixed bottom-0 left-0 w-full bg-darkGray bg-opacity-30 backdrop-blur-lg border border-white border-opacity-20 shadow-lg p-4 flex justify-around lg:hidden rounded-t-3xl">
        {contacts.length > 0 &&
          contacts.map((contact, index) => (
            <div key={index} className="p-2 rounded-full flex items-center center">
              <a href={contact.url} className="text-white flex flex-col items-center">
                {contact.icon ? (
                  <Image
                    src={contact.icon.url}
                    alt={contact.icon.name}
                    width={24}
                    height={24}
                  />
                ) : (
                  <FaPhone size={24} />
                )}
                <span className="text-sm mt-2 font-semibold">{contact.value}</span>
              </a>
            </div>
          ))}
        {/* <a href="tel:+123456789" className="bg-primaryBlue text-white p-3 rounded-full hover:bg-brightBlue transition">
          <FaPhone size={24} />
        </a>
        <a href="#" className="bg-primaryBlue text-white p-3 rounded-full hover:bg-brightBlue transition">
          <BsFillChatDotsFill size={24} />
        </a>
        <a href="mailto:info@streetlightco.com" className="bg-primaryBlue text-white p-3 rounded-full hover:bg-brightBlue transition">
          <FaEnvelope size={24} />
        </a>
        <a href="https://zalo.me" className="bg-primaryBlue text-white p-3 rounded-full hover:bg-brightBlue transition">
          <img src="/icons/zalo-icon.png" alt="Zalo" width={24} height={24} />
        </a> */}
      </div>
    </div>
  );
}
