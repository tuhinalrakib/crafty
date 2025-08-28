"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  // Redirect unauthenticated users
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  // Upload image to Cloudinary
  const handleImageUpload = async (e) => {
    // if (!imageFile) return "";
    const imageFile = e.target.files[0]
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    return setImageUrl(data.secure_url); // Cloudinary public URL
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      // যদি নতুন file select করে তাহলে Cloudinary তে upload হবে
      // if (imageFile) {
      //     uploadedImageUrl = await handleImageUpload();
      //     setImageUrl(uploadedImageUrl);
      // }
      if (!imageUrl) {
        Swal.fire("Please wait", "Image is still uploading. Try again in a moment.", "info");
        return;
      }
      setLoading(true);

      const res = await fetch("https://crafty-black.vercel.app/api/auctions/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productName, imageUrl, price, description }),
      });

      if (res.ok) {
        Swal.fire({
          title: "Product added successfully!",
          icon: "success",
          draggable: true,
        });
        setProductName("");
        setPrice("");
        setDescription("");
        router.push("/products")
        setImageUrl("");
      } else {
        Swal.fire("Error", "Failed to add product", "error");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Something went wrong!", "error");
    }

    // setLoading(false);
  };

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") return null; // redirecting

  return (
    <div className="max-w-md mx-auto my-20 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="border p-2 rounded"
          required
        />

        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="border p-2 rounded"
        />

        {/* Optional: Show preview */}
        {/* {imageFile && (
          <img
            src={URL.createObjectURL(imageFile)}
            alt="preview"
            className="h-32 w-full object-cover rounded"
          />
        )} */}

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white p-2 rounded hover:bg-green-700"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
