"use client";

import { FC } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import des icônes

const Header: FC = () => {
  return (
    <header className="fixed pt-8 top-0 left-0 w-full p-4 backdrop-blur-md text-white z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Nom */}
        <span className="text-xl font-bold">ArnaudMeusy</span>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-6">
            <li><a href="#" className="hover:text-yellow-300">Accueil</a></li>
            <li><a href="#biography" className="hover:text-yellow-300">À propos</a></li>
            <li><a href="#tech" className="hover:text-yellow-300">Projets</a></li>
            <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
          </ul>
        </nav>

        {/* Icônes réseaux sociaux */}
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://github.com/tonprofil" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 text-2xl">
            <FaGithub />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
