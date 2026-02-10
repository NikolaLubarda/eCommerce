import React from "react";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_20px_60px_rgba(0,0,0,.35)] backdrop-blur transition hover:-translate-y-1">
      {/* glow */}
      <div className="pointer-events-none absolute -inset-1 opacity-0 blur-2xl transition group-hover:opacity-100 bg-gradient-to-r from-emerald-500/30 via-white/10 to-amber-400/30" />

      <div className="relative">
        <div className="rounded-xl bg-white/10 p-3 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-44 w-full object-contain"
          />
        </div>

        <div className="mt-4">
          <h3 className="text-base font-extrabold text-white line-clamp-1">
            {product.name}
          </h3>
          <p className="text-white/70 mt-1 font-bold">${product.price}</p>

          <div className="flex items-center gap-1 mt-2">
            <FaStar className="text-amber-400" />
            <FaStar className="text-amber-400" />
            <FaStar className="text-amber-400" />
            <FaStar className="text-white/30" />
            <span className="ml-2 text-xs text-white/50">(demo)</span>
          </div>
        </div>

        <button
          onClick={() => dispatch(addToCart(product))}
          className="mt-4 w-full rounded-xl bg-emerald-500 px-4 py-2.5 font-extrabold text-slate-950 hover:bg-emerald-400 transition"
          type="button"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
