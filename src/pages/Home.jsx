import React from "react";
import { Categories } from "../assets/MockData";
import heroImage from "../assets/Images/Heroimage.jpg";

const Home = () => {
  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      {" "}
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        {" "}
        <div className="w-full md:w-4/12">
          {" "}
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
            Shop By Categories
          </div>
          <ul>
            {Categories.map((category, index) => (
              <li key={index}>
                <div></div> {category}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img src={heroImage} alt="" />
          <div>
            <p> Nikola E-commerce </p>
            <h2>Welcome to e-shop</h2>
            <p>Everthing you need</p>
            <button> SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
