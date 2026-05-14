function Achievement () {
    return(
     <section>
    <div className="min-h-screen bg-black text-white px-6 py-12">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">My Achievements</h1>
        <p className="text-gray-400 mt-3">
          My projects and learning journey
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-semibold mb-3">
            Portfolio Website
          </h2>

          <p className="text-gray-400 mb-4">
            Built a responsive portfolio website using React and Tailwind CSS.
          </p>

          <button className="bg-white text-black px-4 py-2 rounded-lg">
            2025
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-semibold mb-3">
            Chat Application
          </h2>

          <p className="text-gray-400 mb-4">
            Created a modern chat UI using Next.js and Tailwind CSS.
          </p>

          <button className="bg-white text-black px-4 py-2 rounded-lg">
            2025
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-semibold mb-3">
            Frontend Learning
          </h2>

          <p className="text-gray-400 mb-4">
            Improved frontend development skills by building multiple projects.
          </p>

          <button className="bg-white text-black px-4 py-2 rounded-lg">
            2026
          </button>
        </div>

      </div>
    </div>  
    </section>
    );
}

export default Achievement;