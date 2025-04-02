"use client";

import { FC, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import des icônes

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // État pour gérer l'ouverture/fermeture du menu burger

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Inverse l'état du menu
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Ferme le menu en définissant isMenuOpen à false
  };

  return (
    <header className="fixed pt-8 top-0 left-0 w-full p-4 backdrop-blur-md text-white z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Nom */}
        <span className="text-xl font-bold">ArnaudMeusy</span>

        {/* Menu burger pour les écrans petits */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {/* Icone menu burger */}
            {isMenuOpen ? (
              <span className="text-3xl">&times;</span> // Icône "X" pour fermer
            ) : (
              <span className="text-3xl">&#9776;</span> // Icône burger
            )}
          </button>
        </div>

        {/* Navigation (visible sur grand écran uniquement) */}
        <nav className="hidden lg:flex gap-6">
          <ul className="flex gap-6">
            <li>
              <a href="#" className="hover:text-yellow-300">
                Accueil
              </a>
            </li>
            <li>
              <a href="#biography" className="hover:text-yellow-300">
                À propos
              </a>
            </li>
            <li>
              <a href="#projets" className="hover:text-yellow-300">
                Projets
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Icônes réseaux sociaux visibles uniquement sur grand écran */}
        <div className="hidden lg:flex gap-4">
          <a
            href="https://www.linkedin.com/in/arnaudmeusy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ArnaudM1983"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 text-2xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Menu burger visible uniquement sur mobile */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-end gap-4 bg-gray-800 p-4 text-right">
          <li>
            <a href="#" className="hover:text-yellow-300" onClick={closeMenu}>
              Accueil
            </a>
          </li>
          <li>
            <a href="#biography" className="hover:text-yellow-300" onClick={closeMenu}>
              À propos
            </a>
          </li>
          <li>
            <a href="#projets" className="hover:text-yellow-300" onClick={closeMenu}>
              Projets
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-300" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;





// "use client";

// import { FC } from "react";
// import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import des icônes

// const Header: FC = () => {
//   return (
//     <header className="fixed pt-8 top-0 left-0 w-full p-4 backdrop-blur-md text-white z-10">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo / Nom */}
//         <span className="text-xl font-bold">ArnaudMeusy</span>

//         {/* Navigation */}
//         <nav>
//           <ul className="flex gap-6">
//             <li><a href="#" className="hover:text-yellow-300">Accueil</a></li>
//             <li><a href="#biography" className="hover:text-yellow-300">À propos</a></li>
//             <li><a href="#projets" className="hover:text-yellow-300">Projets</a></li>
//             <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
//           </ul>
//         </nav>

//         {/* Icônes réseaux sociaux */}
//         <div className="flex gap-4">
//           <a href="https://www.linkedin.com/in/tonprofil" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 text-2xl">
//             <FaLinkedin />
//           </a>
//           <a href="https://github.com/tonprofil" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 text-2xl">
//             <FaGithub />
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

