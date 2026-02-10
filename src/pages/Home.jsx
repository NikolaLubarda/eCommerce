import React, { useEffect } from "react";
import { Categories, mockData } from "../assets/MockData";
import heroImage from "../assets/Images/Heroimage.jpg";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCart from "../components/ProductCart";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);

  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 md:px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6">
          {/* Left categories */}
          <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="bg-emerald-500 text-slate-950 text-xs font-extrabold px-4 py-3">
              SHOP BY CATEGORIES
            </div>
            <ul className="space-y-3 p-4">
              {Categories.map((category) => (
                <li
                  key={category}
                  className="flex items-center text-sm font-bold text-white/85 hover:text-white cursor-pointer"
                  onClick={() => navigate("/shop")}
                >
                  <span className="w-3 h-3 border border-emerald-400 rounded-full mr-3" />
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Hero */}
          <div className="relative h-[380px] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img
              className="h-full w-full object-cover"
              src={heroImage}
              alt="Hero"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/30 to-transparent" />
            <div className="absolute top-16 left-8 md:left-12 max-w-md">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Welcome to e<span className="text-emerald-400">Shop</span>
              </h2>
              <p className="text-white/80 mt-3 font-semibold">
                Everything you need — clean design, fast shopping, demo
                checkout.
              </p>
              <button
                onClick={() => navigate("/shop")}
                className="mt-6 rounded-xl bg-emerald-500 px-6 py-3 font-extrabold text-slate-950 hover:bg-emerald-400 transition"
                type="button"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <InfoSection />
      <CategorySection />

      <div className="mx-auto max-w-7xl px-4 md:px-10 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center tracking-tight">
          Top products
        </h1>
        <p className="text-white/60 text-center mt-2">
          Hand-picked demo items from mock data.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.slice(0, 10).map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => navigate("/shop")}
            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-extrabold text-white hover:bg-white/10 transition"
            type="button"
          >
            View all products →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
