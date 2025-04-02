import React from 'react'
import { FaLinkedin, FaGithub, FaCopyright } from 'react-icons/fa';

type Props = {}

function Footer({}: Props) {
  return (
    <footer className=" text-white py-4">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://www.linkedin.com/in/arnaudmeusy" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} className="hover:text-yellow-300" />
        </a>
        <a href="https://github.com/ArnaudM1983" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} className="hover:text-yellow-300" />
        </a>
      </div>

      <div className="flex justify-center items-center gap-2">
        <FaCopyright size={16} />
        <span>2025 - Arnaud Meusy</span>
      </div>
    </footer>
  )
}

export default Footer;
