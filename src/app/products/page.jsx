"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/auctions/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data?.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center text-lg">Loading products...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!products || products.length === 0)
    return <p className="text-center text-gray-500">No products found.</p>;

  return (
    <div className="p-6 bg-[#122117]">
      <h2 className="text-2xl font-bold my-8 text-center">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden hover:scale-105 transform transition duration-300"
          >
            {/* Product Image */}
            {product.imageUrl && (
              <img
                src={product?.imageUrl}
                alt={product?.productName}
                className="w-full h-48 object-cover"
              />
            )}

            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.productName}</h3>
              <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                {product.description}
              </p>
              <p className="mt-2 font-bold text-indigo-600">
                ${product.price}
              </p>

              {/* Button */}
              <button className="mt-4 w-full cursor-pointer bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                <Link href={`/products/${product._id}`}>View Details</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
