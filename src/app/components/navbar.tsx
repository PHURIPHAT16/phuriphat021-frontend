"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed z-30 w-screen">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <Link href="/">
                <div className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                  <Image src="LOGO_OF_LOGO.svg" width={50} height={50} alt="logo"></Image>
                  <span className="font-bold">Lay company</span>
                </div>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <Link href="/">
                <div className="py-5 px-3 text-gray-700 hover:text-gray-900">Home</div>
              </Link>
              <Link href="/about">
                <div className="py-5 px-3 text-gray-700 hover:text-gray-900">About</div>
              </Link>
              <Link href="/service">
                <div className="py-5 px-3 text-gray-700 hover:text-gray-900">Services</div>
              </Link>
              <Link href="/contact">
                <div className="py-5 px-3 text-gray-700 hover:text-gray-900">Contact</div>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <Link href="/login">
              <div className="py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-400">Login</div>
            </Link>
            <Link href="/signup">
              <div className="py-2 px-3 bg-gray-200 text-gray-700 rounded hover:bg-gray-100">Signup</div>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                xmlns="LOGO_OF_LOGO"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <Link href="/">
          <div className="block py-2 px-4 text-sm hover:bg-gray-200">Home</div>
        </Link>
        <Link href="/about">
          <div className="block py-2 px-4 text-sm hover:bg-gray-200">About</div>
        </Link>
        <Link href="/services">
          <div className="block py-2 px-4 text-sm hover:bg-gray-200">Services</div>
        </Link>
        <Link href="/contact">
          <div className="block py-2 px-4 text-sm hover:bg-gray-200">Contact</div>
        </Link>
        <Link href="/login">
          <div className="block py-2 px-4 text-sm hover:bg-gray-200">Login</div>
        </Link>
        <Link href="/signup">
          <div className="block py-2 px-4 text-sm hover:bg-gray-200">Signup</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
