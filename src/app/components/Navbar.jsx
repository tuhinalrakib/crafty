"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-[#122117] shadow-md py-2 fixed top-0 left-0 z-50 border-b-[1px] border-b-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-1">
            <img src="/logo.png" alt="" />
            <Link href="/" className="text-2xl font-bold text-[#ffffff]">
              Crafty
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            <Link href="/" className="text-[#ffffff] text-xl hover:text-[#38E07A] transition">
              Home
            </Link>
            <Link href="/about" className="text-[#ffffff] text-xl hover:text-[#38E07A] transition">
              Prodfucts
            </Link>
            {/* <Link href="/services" className="text-gray-700 hover:text-blue-600 transition">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </Link> */}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              href="/login"
              className="px-5 py-2 rounded-lg bg-[#38E07A]/70 text-white text-lg font-bold hover:bg-[#38E07A] transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-blue-600 transition">
              About
            </Link>
            <Link href="/services" className="block text-gray-700 hover:text-blue-600 transition">
              Services
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-blue-600 transition">
              Contact
            </Link>
            <Link
              href="/login"
              className="block w-full px-4 py-2 mt-2 rounded-lg bg-blue-600 text-white text-center hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
