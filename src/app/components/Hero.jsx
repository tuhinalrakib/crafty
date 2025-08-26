"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Discover the Latest Tech",
    desc: "Explore our curated collection of cutting-edge gadgets and accessories. From smart home devices to laptops, we have everything you need to stay ahead.",
    btnText: "Shop Now",
    btnLink: "/shop",
    img: "/banner1.jpg",
  },
  {
    id: 2,
    title: "Upgrade Your Workspace",
    desc: "Find modern and ergonomic setups designed to boost productivity and style.",
    btnText: "Explore",
    btnLink: "/workspace",
    img: "/banner2.png",
  },
  {
    id: 3,
    title: "Smart Home Essentials",
    desc: "Make your home smarter with the latest connected devices and automation tools.",
    btnText: "Browse",
    btnLink: "/smart-home",
    img: "/banner4.jpg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-[rgba(150,196,168, 1)] to-[rgba(150,196,168,.8)] overflow-hidden">
      {/* Content Wrapper (fixed size for all slides) */}
      <div className="relative w-full h-full flex flex-col items-center mt-10 text-center py-5 px-6 z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#ffff] mb-4">
          {slides[current].title}
        </h1>
        <p className="text-gray-300 mb-6 max-w-2xl text-sm md:text-xl">
          {slides[current].desc}
        </p>
        <a
          href={slides[current].btnLink}
          className="px-6 py-3 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition"
        >
          {slides[current].btnText}
        </a>
      </div>

      {/* Image Container (same width & height for all slides) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[350px] flex justify-center items-end z-0">
        <Image
          src={slides[current].img}
          alt={slides[current].title}
          width={500}
          height={350}
          className="object-contain bg- w-full h-full"
        />
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-5 w-full flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              index === current ? "bg-green-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
