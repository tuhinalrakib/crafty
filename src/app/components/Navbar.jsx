"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  // console.log(session?.user)

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-[#122117] shadow-md py-2 fixed top-0 left-0 z-50 border-b border-b-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <img src="/logo.png" alt="Crafty Logo" className="h-8 w-8" />
            <Link href="/" className="text-2xl font-bold text-white">
              Crafty
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            <Link href="/" className="text-white text-xl hover:text-[#38E07A] transition">
              Home
            </Link>
            {
              session && (
                <>
                  <Link href="/products" className="text-white text-xl hover:text-[#38E07A] transition">
                    Products
                  </Link>
                  <Link href="/dashboards/addProducts" className="text-white text-xl hover:text-[#38E07A] transition">
                  Add Products
                  </Link>
                </>
              )
            }
          </div>

          {/* CTA Section */}
          {session ? (
            <div className="flex items-center gap-3">
              {/* User info */}
              {session?.user?.image && (
                <img
                  src={session?.user?.image}
                  alt={session?.user?.name || "User"}
                  className="h-8 w-8 rounded-full border"
                />
              )}
              <span className="text-white font-medium hidden md:block">
                {session?.user?.username || session?.user?.email}
              </span>

              <button
                onClick={() => signOut()}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:flex space-x-2">
              <Link
                href='/login'
                className="px-5 py-2 rounded-lg bg-[#38E07A]/70 text-white text-lg font-bold hover:bg-[#38E07A] transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-5 py-2 rounded-lg bg-[#38E07A]/70 text-white text-lg font-bold hover:bg-[#38E07A] transition"
              >
                Register
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#38E07A] focus:outline-none"
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
            <Link href="/products" className="block text-gray-700 hover:text-blue-600 transition">
              Products
            </Link>

            {session ? (
              <button
                onClick={() => signOut()}
                className="w-full px-4 py-2 mt-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  className="w-full px-4 py-2 mt-2 rounded-lg bg-[#38E07A]/70 text-white hover:bg-[#38E07A] transition"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block w-full px-4 py-2 mt-2 rounded-lg bg-[#38E07A]/70 text-white text-center hover:bg-[#38E07A] transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
