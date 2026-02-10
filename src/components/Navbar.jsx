import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthModal from "./AuthModal";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  const navigate = useNavigate();
  const totalQuantity = useSelector((s) => s.cart.totalQuantity);
  const { user, logout } = useAuth();
  const [openAuth, setOpenAuth] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-4 flex items-center gap-4">
          {/* LOGO */}
          <NavLink to="/" className="text-xl font-extrabold text-white">
            e<span className="text-[var(--primary)]">Shop</span>
          </NavLink>

          {/* SEARCH */}
          <div className="relative flex-1">
            <input
              className="w-full rounded-xl bg-black/40 border border-[var(--border)] px-4 py-2 text-white"
              placeholder="Pretraga proizvoda..."
              onKeyDown={(e) => e.key === "Enter" && navigate("/shop")}
            />
            <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50" />
          </div>

          {/* CART */}
          <NavLink
            to="/cart"
            className="relative rounded-xl bg-black/40 border border-[var(--border)] px-4 py-2 text-white"
          >
            <FaShoppingCart />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[var(--accent)] text-black text-xs font-bold flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </NavLink>

          {/* AUTH */}
          {user ? (
            <button onClick={logout} className="btn-outline hidden md:block">
              Odjava
            </button>
          ) : (
            <button
              onClick={() => setOpenAuth(true)}
              className="btn-outline hidden md:block"
            >
              Prijava
            </button>
          )}

          <button
            onClick={() => setOpenAuth(true)}
            className="md:hidden btn-outline"
          >
            <FaUser />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex justify-center gap-8 pb-3 text-sm font-semibold">
          {[
            { to: "/", label: "Početna" },
            { to: "/shop", label: "Prodavnica" },
            { to: "/contact", label: "Kontakt" },
            { to: "/about", label: "O nama" },
          ].map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                isActive ? "nav-active" : "text-white/70 hover:text-white"
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {openAuth && <AuthModal onClose={() => setOpenAuth(false)} />}
    </>
  );
};

export default NavBar;
