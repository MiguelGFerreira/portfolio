'use client';

import React, { useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";

const headerLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Me', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export default function TestHeader() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href={'/'}>
          <div className="text-white text-xl font-bold">Miguel</div>
        </Link>
        <nav className={`hidden md:flex space-x-4 ${isMenuOpen ? 'hidden' : 'block'}`}>
          {headerLinks.map((link) => {
            const isActive = usePathname() === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-${isActive ? 'blue-500' : 'white'}`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-2`}>
        {headerLinks.map((link) => {
          const isActive = usePathname() === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={toggleMenu}
              className={`block text-${isActive ? 'blue-500' : 'white'} py-2`}
            >
              {link.name}
            </Link>
          )
        })}
      </div>
    </header>
  );
};
