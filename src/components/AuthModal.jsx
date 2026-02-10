import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const AuthModal = ({ onClose }) => {
  const { login } = useAuth();
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    login(email);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur">
      <div className="w-full max-w-md rounded-3xl border border-[var(--border)] bg-white/5 p-8 shadow-2xl">
        <h2 className="text-2xl font-extrabold text-white">
          {mode === "login" ? "Prijava" : "Registracija"}
        </h2>

        <p className="text-white/70 mt-2 text-sm">
          {mode === "login" ? "Nemate nalog?" : "Već imate nalog?"}{" "}
          <button
            onClick={() => setMode(mode === "login" ? "register" : "login")}
            className="text-[var(--primary)] font-bold"
            type="button"
          >
            {mode === "login" ? "Registrujte se" : "Prijavite se"}
          </button>
        </p>

        <form onSubmit={submit} className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email adresa"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-2xl border border-[var(--border)] bg-black/30 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-[var(--primary)]"
          />

          {mode === "register" && (
            <input
              type="password"
              placeholder="Lozinka (demo)"
              className="w-full rounded-2xl border border-[var(--border)] bg-black/30 px-4 py-3 text-white placeholder:text-white/40"
            />
          )}

          <button
            type="submit"
            className="w-full rounded-2xl bg-[var(--primary)] px-4 py-3 font-extrabold text-white hover:opacity-90 transition"
          >
            {mode === "login" ? "Prijavi se" : "Registruj se"}
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-4 w-full rounded-2xl border border-[var(--border)] bg-white/5 px-4 py-2 text-white hover:bg-white/10"
          type="button"
        >
          Zatvori
        </button>

        <p className="mt-4 text-xs text-white/40 text-center">
          Demo projekat – nema prave autentifikacije
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
