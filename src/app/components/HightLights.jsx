// ProductHighlights.jsx
"use client";
import Link from "next/link";
import React from "react";

const products = [
  {
    id: 1,
    name: "Smart Wireless Earbuds",
    description: "Experience high-quality sound with long-lasting battery.",
    image: "/highlight1.jpg",
    price: "$59.99",
  },
  {
    id: 2,
    name: "Portable Bluetooth Speaker",
    description: "Compact design, powerful sound, and waterproof.",
    image: "highlight2.jpg",
    price: "$79.99",
  },
  {
    id: 3,
    name: "Smartwatch Pro",
    description: "Track your fitness, sleep, and notifications easily.",
    image: "/highlight3.jpg",
    price: "$129.99",
  },
];

export default function ProductHighlights() {
  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl text-[#ffffff] font-bold mb-6">Featured Gadgets</h2>
        <p className="text-[#ffffff]/80 mb-12">
          Discover the latest tech gadgets that make your life smarter and easier.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white/90 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-indigo-600">
                    {product.price}
                  </span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                    <Link href="/products">Buy Now</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
