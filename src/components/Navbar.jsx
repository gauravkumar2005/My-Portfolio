import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-white/80 backdrop-blur-md flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 md:py-5 shadow-md fixed top-0 z-50 border-b border-gray-200">

      {/* Logo */}
      <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-600 font-extrabold hover:scale-110 transition duration-300 cursor-pointer whitespace-nowrap">
        Portfolio
      </h2>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-7 items-center">

        <li className="text-lg text-gray-700 font-semibold hover:text-blue-600 hover:scale-110 transition duration-300">
          <a href="#home">Home</a>
        </li>

        <li className="text-lg text-gray-700 font-semibold hover:text-blue-600 hover:scale-110 transition duration-300">
          <a href="#about">About</a>
        </li>

        <li className="text-lg text-gray-700 font-semibold hover:text-blue-600 hover:scale-110 transition duration-300">
          <a href="#projects">Projects</a>
        </li>

        <li className="text-lg text-gray-700 font-semibold hover:text-blue-600 hover:scale-110 transition duration-300">
          <a href="#achievements">Achievements</a>
        </li>

        <li className="text-lg text-gray-700 font-semibold hover:text-blue-600 hover:scale-110 transition duration-300">
          <a href="#skills">Skills</a>
        </li>

        <li className="text-lg text-gray-700 font-semibold hover:text-blue-600 hover:scale-110 transition duration-300">
          <a href="#contact">Contact</a>
        </li>

      </ul>

      {/* Hamburger Button */}
      <button
        className="md:hidden text-blue-600"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-20 left-0 w-full bg-white flex flex-col items-center gap-5 py-6 shadow-md md:hidden">

          <li className="text-base text-gray-700 font-semibold hover:text-blue-600">
            <a href="#home">Home</a>
          </li>

          <li className="text-base text-gray-700 font-semibold hover:text-blue-600">
            <a href="#about">About</a>
          </li>

          <li className="text-base text-gray-700 font-semibold hover:text-blue-600">
            <a href="#projects">Projects</a>
          </li>

          <li className="text-base text-gray-700 font-semibold hover:text-blue-600">
            <a href="#achievements">Achievements</a>
          </li>

          <li className="text-base text-gray-700 font-semibold hover:text-blue-600">
            <a href="#skills">Skills</a>
          </li>

          <li className="text-base text-gray-700 font-semibold hover:text-blue-600">
            <a href="#contact">Contact</a>
          </li>

        </ul>
      )}

    </div>
  );
}

export default Navbar;