function Navbar() {
  return (
    <div className="w-full h-16 md:h-auto bg-white/80 backdrop-blur-md flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 py-2 md:py-3 gap-2 md:gap-0 shadow-md fixed top-0 z-50 border-b border-gray-200">

      <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-600 font-extrabold hover:scale-110 transition duration-300 cursor-pointer whitespace-nowrap">
        Portfolio
      </h2>

      <ul className="flex flex-wrap md:flex-nowrap gap-2 sm:gap-4 md:gap-7 items-center justify-center text-center w-full md:w-auto">

        <li className="text-sm sm:text-base md:text-lg text-gray-700 font-semibold hover:text-blue-600 hover:scale-110 transition duration-300 whitespace-nowrap">
          <a href="#home">Home</a>
        </li>

        <li className="text-sm sm:text-base md:text-lg text-gray-700 font-semibold hover:text-blue-600 hover:scale-110 transition duration-300 whitespace-nowrap">
          <a href="#about">About</a>
        </li>

        <li className="text-sm sm:text-base md:text-lg text-gray-700 font-semibold hover:text-blue-600 hover:scale-110 transition duration-300 whitespace-nowrap">
          <a href="#projects">Projects</a>
        </li>

        <li className="text-sm sm:text-base md:text-lg text-gray-700 font-semibold hover:text-blue-600 hover:scale-110 transition duration-300 whitespace-nowrap">
          <a href="#skills">Skills</a>
        </li>

        <li className="text-sm sm:text-base md:text-lg text-gray-700 font-semibold hover:text-blue-600 hover:scale-110 transition duration-300 whitespace-nowrap">
          <a href="#contact">Contact</a>
        </li>

      </ul>

    </div>
  );
}

export default Navbar;