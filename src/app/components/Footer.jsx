import Image from "next/image";
import Link from "next/link";
import { FaSquareFacebook, FaTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand / About */}
                <div>
                    <div className="flex items-center gap-1">
                        <Image
                            src="/logo.png"
                            width={25}
                            height={5}
                            alt="Logo"
                        />
                        <h2 className="text-2xl font-bold text-white mb-4">Crafty</h2>
                    </div>
                    <p className="text-sm">
                        You Can buy best gadgets from here
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="hover:text-white transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-white transition">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-white transition">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-white transition">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Resources */}
                {/* <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/blog" className="hover:text-white transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-white transition">
                Support
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div> */}

                {/* Newsletter / Socials */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Stay Connected
                    </h3>
                    <form className="flex flex-col space-y-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-3 py-2 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                    <div className="flex space-x-4 mt-4">
                        <Link href="https://facebook.com" target="_blank">
                            <FaSquareFacebook size={24}/>
                        </Link>
                        <Link href="https://twitter.com" target="_blank">
                            <FaTwitter size={24}/>
                        </Link>
                        <Link href="https://linkedin.com" target="_blank">
                            
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-8">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Crafty. All rights reserved.</p>
                    <p>
                        Built with <span className="text-blue-500">Next.js</span> &{" "}
                        <span className="text-teal-400">Tailwind CSS</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
