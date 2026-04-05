function Navbar() {
  return (
    <div className="w-full h-16 bg-white flex items-center justify-around shadow-md fixed top-0">

      <h2 className="text-3xl text-blue-600 font-extrabold hover:scale-110 transition">
        Portfolio
      </h2>

      <ul className="flex gap-7 items-center">

        <li className="text-xl text-blue-600 font-bold hover:scale-110 transition">
          <a href="#home">Home</a>
        </li>

        <li className="text-xl text-blue-600 font-bold hover:scale-110 transition">
          <a href="#about">About</a>
        </li>

        <li className="text-xl text-blue-600 font-bold hover:scale-110 transition">
          <a href="#projects">Projects</a>
        </li>

        <li className="text-xl text-blue-600 font-bold hover:scale-110 transition">
          <a href="#skills">Skills</a>
        </li>

        <li className="text-xl text-blue-600 font-bold hover:scale-110 transition">
          <a href="#contact">Contact</a>
        </li>

      </ul>

    </div>
  );
}

export default Navbar;