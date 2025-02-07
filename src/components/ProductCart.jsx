import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCart = ({ product }) => {
  return (
    <div className="bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>
      <div className="flex items-center mt-2">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-gray-500" />
      </div>

      {/* Dugme */}
      <div className="absolute bottom-4 right-2 flex items-center justify-center w-10 h-10 bg-red-600 group text-white text-lg rounded-full hover:w-32 hover:bg-red-700 transition-all overflow-hidden">
        <span className="absolute transition-opacity duration-300 group-hover:opacity-0">
          +
        </span>
        <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-sm">
          Add to cart
        </span>
      </div>
    </div>
  );
};

export default ProductCart;
