import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart, addToCart } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice, totalQuantity } = useSelector((s) => s.cart);

  return (
    <div className="min-h-[70vh] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-10 py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Your Cart
            </h1>
            <p className="text-white/70 mt-2">
              Items: <span className="font-bold">{totalQuantity}</span>
            </p>
          </div>

          <button
            onClick={() => dispatch(clearCart())}
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 font-bold hover:bg-white/10 transition"
            type="button"
          >
            Clear
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
          {/* ITEMS */}
          <div className="space-y-4">
            {items.length === 0 ? (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
                <p className="text-white/80 font-semibold">
                  Cart is empty. Add something from Shop 🙂
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 flex gap-4 items-center"
                >
                  <div className="h-20 w-20 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="font-extrabold">{item.name}</p>
                    <p className="text-white/70 text-sm mt-1">
                      ${item.price} each
                    </p>
                    <p className="text-white/70 text-sm">
                      Subtotal:{" "}
                      <span className="font-bold">${item.totalPrice}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="h-10 w-10 rounded-xl border border-white/15 bg-white/5 font-black hover:bg-white/10 transition"
                      type="button"
                    >
                      −
                    </button>
                    <div className="min-w-[40px] text-center font-extrabold">
                      {item.quantity}
                    </div>
                    <button
                      onClick={() => dispatch(addToCart(item))}
                      className="h-10 w-10 rounded-xl border border-white/15 bg-white/5 font-black hover:bg-white/10 transition"
                      type="button"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* SUMMARY */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 h-fit">
            <h2 className="text-xl font-extrabold">Summary</h2>
            <div className="mt-4 space-y-2 text-white/80">
              <div className="flex justify-between">
                <span>Total items</span>
                <span className="font-bold text-white">{totalQuantity}</span>
              </div>
              <div className="flex justify-between">
                <span>Total price</span>
                <span className="font-bold text-white">${totalPrice}</span>
              </div>
            </div>

            <button
              className="mt-5 w-full rounded-xl bg-emerald-500 px-4 py-3 font-extrabold text-slate-950 hover:bg-emerald-400 transition"
              type="button"
              disabled={items.length === 0}
            >
              Checkout (demo)
            </button>

            <p className="mt-3 text-xs text-white/50">
              Demo checkout – without backend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
