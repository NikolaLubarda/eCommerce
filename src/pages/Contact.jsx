import React, { useState } from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen px-4 md:px-16 lg:px-24 py-16">
      <div className="max-w-3xl mx-auto card p-10">
        <h1 className="text-3xl font-extrabold text-white mb-4">
          Kontaktirajte nas
        </h1>

        <p className="text-white/70 mb-8">
          Ovo je demo kontakt forma. Slanje poruke je simulirano.
        </p>

        {sent ? (
          <div className="text-center text-[var(--accent)] font-bold text-lg">
            Poruka je uspješno poslata ✔
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Ime i prezime"
              required
              className="w-full rounded-xl bg-black/40 border border-[var(--border)] px-4 py-3 text-white"
            />

            <input
              type="email"
              placeholder="Email adresa"
              required
              className="w-full rounded-xl bg-black/40 border border-[var(--border)] px-4 py-3 text-white"
            />

            <textarea
              placeholder="Vaša poruka"
              rows="5"
              required
              className="w-full rounded-xl bg-black/40 border border-[var(--border)] px-4 py-3 text-white"
            />

            <button type="submit" className="btn-primary w-full">
              Pošalji poruku
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
