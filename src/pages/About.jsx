import React from "react";

const About = () => {
  return (
    <div className="min-h-screen px-4 md:px-16 lg:px-24 py-16">
      <div className="max-w-4xl mx-auto card p-10 space-y-8">
        <h1 className="text-3xl font-extrabold text-white">O projektu</h1>

        <p className="text-white/70 leading-relaxed">
          Ovaj e-commerce projekat je demo aplikacija napravljena u cilju
          prikazivanja znanja iz frontend razvoja. Fokus je na čistom UI/UX
          dizajnu, modularnoj arhitekturi i radu sa modernim alatima.
        </p>

        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            Tehnologije korištene
          </h2>
          <ul className="list-disc list-inside text-white/70 space-y-1">
            <li>React</li>
            <li>Redux Toolkit</li>
            <li>React Router</li>
            <li>Tailwind CSS</li>
            <li>CSS varijable (teme)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-3">Napomena</h2>
          <p className="text-white/70">
            Autentifikacija, checkout i slanje poruka su simulirani (demo
            logika) i mogu se lako proširiti backend rješenjem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
