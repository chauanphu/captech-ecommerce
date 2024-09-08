"use client";

import { FaPhone } from "react-icons/fa"; // Import icons
import { Contact, getContacts } from "@/utils/api";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function CTAButtons() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [hoveredButton, setHoveredButton] = useState<number | null>(null); // State to track hovered button

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
              <div
                key={index}
                className="relative p-2 rounded-full"
                onMouseEnter={() => setHoveredButton(index)} // Show tooltip on hover
                onMouseLeave={() => setHoveredButton(null)} // Hide tooltip when not hovering
              >
                {/* Icon or Image */}
                <a href={contact.url} className="text-white">
                  {contact.icon ? (
                    <Image
                      src={contact.icon.url}
                      alt={"Contact"}
                      width={32}
                      height={32}
                      className="w-auto"
                    />
                  ) : (
                    <FaPhone size={24} />
                  )}
                </a>

                {/* Tooltip / Contact Value with Slide-Out Animation */}
                <div
                  className={`absolute left-[-150px] top-1/2 transform -translate-y-1/2 bg-white text-darkGray p-2 rounded-lg shadow-lg w-36 text-center z-40 transition-all duration-300 ease-in-out
                  ${
                    hoveredButton === index
                      ? "opacity-100 translate-x-0" // Slide out when hovered
                      : "opacity-0 translate-x-5" // Hidden when not hovered
                  }`}
                >
                  {contact.value}
                </div>
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
                    alt={"Contact"}
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
      </div>
    </div>
  );
}
