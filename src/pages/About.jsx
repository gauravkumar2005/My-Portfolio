function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">
            About <span className="text-blue-400">Me</span>
          </h2>

          <p className="text-gray-400 mb-5 leading-relaxed text-lg">
            Hello! I'm <span className="text-white font-semibold">Gaurav Kumar</span>, 
            a passionate <span className="text-blue-400">B.Tech student</span> and 
            aspiring <span className="text-blue-400">Full Stack Web Developer</span>.
            I enjoy building modern, responsive and user-friendly web applications 
            that solve real-world problems.
          </p>

          <p className="text-gray-400 mb-5 leading-relaxed text-lg">
            My core technologies include 
            <span className="text-blue-300"> React, Tailwind CSS, Node.js and MongoDB</span>. 
            I love transforming ideas into clean, scalable digital products with 
            beautiful UI and efficient backend architecture.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg">
            Currently I am focusing on improving my 
            <span className="text-blue-300"> Data Structures & Algorithms</span>, 
            learning advanced web development concepts and building projects 
            to prepare for <span className="text-blue-300">internships and software roles</span>.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-7 py-3 bg-blue-500 rounded-lg font-medium hover:bg-blue-600 transition duration-300 shadow-lg"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-7 py-3 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition shadow-lg">
            <h4 className="text-xl font-semibold text-blue-400 mb-2">
              🚀 Development
            </h4>
            <p className="text-gray-400 text-sm">
              Building responsive and modern full stack web applications.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition shadow-lg">
            <h4 className="text-xl font-semibold text-blue-400 mb-2">
              💻 Frontend
            </h4>
            <p className="text-gray-400 text-sm">
              Creating clean UI using React, Tailwind CSS and modern tools.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition shadow-lg">
            <h4 className="text-xl font-semibold text-blue-400 mb-2">
              🗄 Backend
            </h4>
            <p className="text-gray-400 text-sm">
              Working with Node.js, APIs and database management.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition shadow-lg">
            <h4 className="text-xl font-semibold text-blue-400 mb-2">
              🎯 Career Goal
            </h4>
            <p className="text-gray-400 text-sm">
              Preparing for internships and software development roles.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;