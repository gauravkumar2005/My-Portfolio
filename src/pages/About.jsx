function About() {
  return (
    <section className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Text */}
        <div>
          <h2 className="text-4xl font-bold text-blue-400 mb-6">
            About Me
          </h2>

          <p className="text-gray-400 mb-4 leading-relaxed">
            Hello! I'm <span className="text-white font-semibold">Gaurav Kumar</span>, 
            a passionate B.Tech student and aspiring Full Stack Web Developer 
            from India. I enjoy building modern, responsive and user-friendly 
            web applications that solve real-world problems.
          </p>

          <p className="text-gray-400 mb-4 leading-relaxed">
            I specialize in <span className="text-blue-300">React, Tailwind CSS, Node.js and MongoDB</span>. 
            I love transforming ideas into scalable digital products with clean UI 
            and efficient backend architecture.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Currently, I am focusing on improving my Data Structures & Algorithms, 
            system design knowledge, and building impactful projects to prepare 
            for internships and software development roles.
          </p>

          <div className="mt-6">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Right Side - Highlights */}
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-blue-300">
            Quick Highlights
          </h3>

          <ul className="space-y-4 text-gray-400">
            <li>🚀 Full Stack Web Development</li>
            <li>💻 Strong in React & Modern UI Design</li>
            <li>🗄 Backend with Node.js & MongoDB</li>
            <li>📚 Engineering Student (B.Tech)</li>
            <li>🎯 Focused on Internship & Placement Opportunities</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default About;