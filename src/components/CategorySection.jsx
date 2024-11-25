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
    <div>
      {categories.map((category, index) => (
        <ul>
          <li>
            {category.title}
            <img src={category.imageUrl} alt={index} />
          </li>
        </ul>
      ))}
    </div>
  );
};

export default CategorySection;
