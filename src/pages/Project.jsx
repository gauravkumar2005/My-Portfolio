function Project() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* NexTalk */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-blue-500/20 transition duration-300">
            <h3 className="text-2xl font-semibold mb-3">NexTalk</h3>
            <p className="text-gray-400 mb-3">
              Real-time chat application with authentication and live messaging.
            </p>
            <p className="text-sm text-blue-300 mb-6">
              React • Firebase • Tailwind
            </p>
            <div className="flex gap-4">
              <a href="#" className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-blue-500 hover:text-black transition">
                GitHub
              </a>
              <a href="#" className="px-4 py-2 border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-black transition">
                Live Demo
              </a>
            </div>
          </div>

          {/* EasyMart */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-blue-500/20 transition duration-300">
            <h3 className="text-2xl font-semibold mb-3">EasyMart</h3>
            <p className="text-gray-400 mb-3">
              Full-featured e-commerce website with cart and payment system.
            </p>
            <p className="text-sm text-blue-300 mb-6">
              React • Node.js • MongoDB
            </p>
            <div className="flex gap-4">
              <a href="#" className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-blue-500 hover:text-black transition">
                GitHub
              </a>
              <a href="#" className="px-4 py-2 border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-black transition">
                Live Demo
              </a>
            </div>
          </div>

          {/* Friendo */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-blue-500/20 transition duration-300">
            <h3 className="text-2xl font-semibold mb-3">Friendo</h3>
            <p className="text-gray-400 mb-3">
              Social media platform with posts, likes, and comment system.
            </p>
            <p className="text-sm text-blue-300 mb-6">
              React • Express • MongoDB
            </p>
            <div className="flex gap-4">
              <a href="#" className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-blue-500 hover:text-black transition">
                GitHub
              </a>
              <a href="#" className="px-4 py-2 border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-black transition">
                Live Demo
              </a>
            </div>
          </div>

          {/* SkillForge */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-blue-500/20 transition duration-300">
            <h3 className="text-2xl font-semibold mb-3">SkillForge</h3>
            <p className="text-gray-400 mb-3">
              Online learning platform with course enrollment system.
            </p>
            <p className="text-sm text-blue-300 mb-6">
              React • Node.js • Stripe
            </p>
            <div className="flex gap-4">
              <a href="#" className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-blue-500 hover:text-black transition">
                GitHub
              </a>
              <a href="#" className="px-4 py-2 border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-black transition">
                Live Demo
              </a>
            </div>
          </div>

          {/* Portfolio */}
          <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-blue-500/20 transition duration-300">
            <h3 className="text-2xl font-semibold mb-3">Portfolio Website</h3>
            <p className="text-gray-400 mb-3">
              Personal developer portfolio built with modern UI and routing.
            </p>
            <p className="text-sm text-blue-300 mb-6">
              React • Tailwind CSS
            </p>
            <div className="flex gap-4">
              <a href="#" className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-blue-500 hover:text-black transition">
                GitHub
              </a>
              <a href="#" className="px-4 py-2 border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-black transition">
                Live Demo
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Project;