import React from "react";
import { useSelector } from "react-redux";
import ProductCart from "../components/ProductCart";

const Shop = () => {
  const products = useSelector((state) => state.product.products);
  const query = useSelector((state) => state.product.query);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes((query || "").toLowerCase().trim()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 md:px-10 py-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Shop
          </h2>
          <p className="text-white/60 mt-3">
            Showing{" "}
            <span className="font-extrabold text-white">{filtered.length}</span>{" "}
            products{" "}
            {query ? (
              <>
                for “
                <span className="text-emerald-400 font-extrabold">{query}</span>
                ”
              </>
            ) : null}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filtered.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
