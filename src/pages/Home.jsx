import React, { useEffect } from "react";
import { Categories } from "../assets/MockData";
import heroImage from "../assets/Images/Heroimage.jpg";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    setProducts;
  });
  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-4/12">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
            Shop By Categories
          </div>
          <ul className="space-y-4 bg-gray-100 p-4 border">
            {Categories.map((category, index) => (
              <li
                className="flex items-center text-sm font-medium space-x-2"
                key={index}
              >
                <div className="w-3 h-3 border border-red-500 rounded-full mr-1">
                  {" "}
                </div>
                <span>{category}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
          <img className="h-full w-full" src={heroImage} alt="" />
          <div className="absolute top-16 left-8">
            <h2 className="text-2xl font-bold">Welcome to e-shop</h2>
            <p className="text-xl mt-2.5 font-bold text-gray-800  ">
              Everything you need
            </p>
            <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
              {" "}
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <InfoSection />
      <CategorySection />
    </div>
  );
};

export default Home;
