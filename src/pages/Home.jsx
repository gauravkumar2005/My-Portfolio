import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";
import Photo from "../assets/Photo.jpeg";

function Home() {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 md:px-20 pt-24 md:pt-20 bg-gray-950 text-white gap-10"
      >
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="text-blue-500">Gaurav Kumar</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6">
            Full Stack Developer | React | Node.js | MongoDB
          </p>

          <a
            href="#projects"
            className="inline-block px-5 sm:px-6 py-2 sm:py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
          >
            View My Work
          </a>
        </div>

        <div className="flex justify-center">
          <img
            src={Photo}
            alt="Gaurav Kumar"
            className="w-40 sm:w-56 md:w-80 rounded-3xl shadow-lg"
          />
        </div>
      </section>

      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default Home;