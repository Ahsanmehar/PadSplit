// src/components/ui/MapCard.jsx
import React from "react";

const Card = ({ image, title, location, price, beds, size, baths }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden w-56">
      <img src={image} alt={title} className="w-full h-28 object-cover p-1" />
      <div className="p-3">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-xs text-gray-500">{location}</p>
        <div className="flex justify-between items-center mt-2 text-sm">
          <span className="text-lg font-bold">${price}</span>
          <span className="text-gray-500">{size}m²</span>
        </div>
        <div className="flex justify-between text-gray-600 text-xs mt-2">
          <span>🛏 {beds} Beds</span>
          <span>🛁 {baths} Baths</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
