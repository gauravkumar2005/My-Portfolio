import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";
import Photo from "../assets/Photo.jpeg";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-between px-20 bg-gray-950 text-white"
      >
        {/* Text */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold mb-6">
            Hi, I'm <span className="text-blue-500">Gaurav Kumar</span>
          </h1>

          <p className="text-xl text-gray-400 mb-6">
            Full Stack Developer | React | Node.js | MongoDB
          </p>

          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
          >
            View My Work
          </a>
        </div>

        {/* Image */}
        <div>
        <img
         src={Photo}
         alt="Gaurav Kumar"
          className="w-80 rounded-3xl shadow-lg"
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