import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";
import Photo from "../assets/Photo.jpeg";
import Achievement from "./Achievement";

function Home() {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-24 bg-gray-950 text-white gap-16"
      >
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">

          Hi, I'm

         <span className="block text-blue-500">
           Gaurav Kumar
         </span>

         </h1>

          <p className="text-xl text-gray-300 mt-6">
            Aspiring Full Stack Developer
          </p>
          <p className="text-gray-400 leading-8 mt-5">

           I build responsive and user-friendly web applications using
           React, Node.js, MongoDB, and Tailwind CSS. Passionate about
           creating clean, scalable, and modern digital experiences.

          </p>

          <a
            href="#projects"
            className="inline-block px-5 sm:px-6 py-2 sm:py-3 bg-blue-600 rounded-lg hover:bg-blue-600 transition mt-5"
          >
            View My Work
          </a>
        </div>

        <div className="flex justify-center">
          <img
            src={Photo}
            alt="Gaurav Kumar"
            className="w-72 md:w-96 rounded-3xl border-4 border-blue-500 shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>
      </section>

      <About />
      <Skills />
      <Project />
      <Achievement />
      <Contact />
    </>
  );
}

export default Home;