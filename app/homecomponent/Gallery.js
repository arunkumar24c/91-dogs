"use client"
import React from "react";
import Image from "next/image";

import { PiDogFill } from "react-icons/pi";

const Gallery = () => {
  const imageUrls = [
    { id: 1, url: "/assest/img1.webp" },
    { id: 2, url: "/assest/img8.webp" },
    { id: 3, url: "/assest/img3.webp" },
    { id: 4, url: "/assest/img1.webp" },
    { id: 5, url: "/assest/img9.webp" },
    { id: 6, url: "/assest/img6.webp" },
    { id: 7, url: "/assest/img9.webp" },
    { id: 8, url: "/assest/img12.webp" },
    { id: 9, url: "/assest/img9.webp" },
    { id: 10, url: "/assest/img10.webp" },
    { id: 11, url: "/assest/img11.webp" },
    { id: 12, url: "/assest/img2.webp" },
  ];

  return (
    <div className="bg-black" id="gallery">
      <div className="container mx-auto px-5 py-16">
        <div className="flex items-center py-10 gap-3">
          <h1 className="text-white font-bold text-4xl">Gallery</h1>
          <p>
            <PiDogFill size={40} className="text-white" />
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 gap-4 ">
          {imageUrls.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden hover:scale-105 hover:rotate-3 transform transition-transform"
            >
              <div className="w-full h-60  relative rounded-full">
                <Image
                 width={300} 
                 height={300}
                  src={image.url}
                  alt=""
                  className="group-hover:opacity-80 transition-opacity duration-300 "
                />
              </div>
              <div className="bg-black bg-opacity-80 p-2 absolute bottom-0 left-0 right-0 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Dog {image.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
