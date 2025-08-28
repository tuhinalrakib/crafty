"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // https://crafty-black.vercel.app

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://crafty-black.vercel.app/api/auctions/products/${id}`);
        console.log(res)
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data.product);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);
  console.log(product)

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!product) return <p className="text-center text-gray-500">Product not found</p>;

  return (
    <div className="p-6 mt-20 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.productName}</h1>
      {product.imageUrl && <img src={product.imageUrl} alt={product.productName} className="w-full h-96 object-cover mb-4 rounded-xl" />}
      <p className="mb-2">{product.description}</p>
      <p className="font-bold text-indigo-600 text-xl">${product.price}</p>
    </div>
  );
}
