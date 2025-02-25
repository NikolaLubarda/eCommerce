import React from "react";
import ManCategory from "../assets/Images/Man.jpg";
import WomenCategory from "../assets/Images/Women.jpg";
import KidCategory from "../assets/Images/Kid.webp";

const categories = [
  { title: "Man", imageUrl: ManCategory },
  {
    title: "Women",
    imageUrl: WomenCategory,
  },
  {
    title: "Kids",
    imageUrl: KidCategory,
  },
];

const CategorySection = ({ props }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <div className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
          {" "}
          <img
            src={category.imageUrl}
            alt={category.title}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />{" "}
          <div className="absolute top-20 left-12">
            <p className="text-xl font-bold ">{category.title}</p>
            <p className="text-gray-600">View all</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
