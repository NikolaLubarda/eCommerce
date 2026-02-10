import React from "react";
import ManCategory from "../assets/Images/Man.jpg";
import WomenCategory from "../assets/Images/Women.jpg";
import KidCategory from "../assets/Images/Kid.webp";
import { useNavigate } from "react-router-dom";

const categories = [
  { title: "Men", imageUrl: ManCategory, hint: "Streetwear & basics" },
  { title: "Women", imageUrl: WomenCategory, hint: "New season picks" },
  { title: "Kids", imageUrl: KidCategory, hint: "Comfort & fun" },
];

const CategorySection = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-10 py-10">
      <div className="flex items-end justify-between gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white">
          Shop by category
        </h2>
        <button
          onClick={() => navigate("/shop")}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 font-extrabold text-white hover:bg-white/10 transition"
          type="button"
        >
          View all
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {categories.map((category) => (
          <button
            key={category.title}
            onClick={() => navigate("/shop")}
            type="button"
            className="group relative h-72 overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left shadow-[0_20px_60px_rgba(0,0,0,.35)]"
          >
            <img
              src={category.imageUrl}
              alt={category.title}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
            <div className="relative p-6">
              <p className="text-2xl font-extrabold text-white">
                {category.title}
              </p>
              <p className="text-white/70 mt-1 font-semibold">
                {category.hint}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-4 py-2 font-extrabold text-slate-950">
                View collection →
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
