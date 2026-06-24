function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-blue-400 mb-5">
          My Skills
        </h2>
        <p className="text-center item-centertext-gray-400 mb-12 max-w-2xl mx-auto">
          Technologies and tools I use to build modern, responsive and scalable web applications.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-lg hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-blue-300">
             Frontend Development
            </h3>
            <ul className="space-y-3">
              <li className="bg-gray-800 px-4 py-2 rounded-lg">HTML</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg">CSS</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg">JavaScript</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg">React</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg">Tailwind CSS</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-lg hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-blue-300">
              Backend Development
            </h3>
            <ul className="space-y-3">
              <li className="bg-gray-800 px-4 py-2 rounded-lg">Node.js</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg">Express.js</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg">MongoDB</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-lg hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300">
           <h3 className="text-2xl font-bold mb-6 text-blue-300">
            Tools & Technologies
           </h3>
            <ul className="space-y-3">
              <li className="bg-gray-800 px-4 py-2 rounded-lg">Git</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg">GitHub</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg">VS Code</li>
              <li className="bg-gray-800 px-4 py-2 rounded-lg">Postman</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;