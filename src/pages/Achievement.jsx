import Nptel from "../assets/Nptel.png";
import SIH from "../assets/SIH.jpeg";

function Achievement() {
  return (
     <section
      id="achievements"
      className="py-24 px-6 bg-gray-950 text-white"
     >
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400">
          Achievements
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4 leading-8">
          Professional certifications that reflect my continuous learning and commitment to improving my technical skills.
        </p>
      </div>

      {/* Certificate Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* SIH Certificate */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300">

          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl text-blue-400 font-semibold">
              SIH Certificate
            </h2>

            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              2025
            </span>
          </div>

          <p className="text-gray-400 leading-7">
            Participated in the Smart India Hackathon, collaborating on innovative 
            solutions while enhancing problem-solving and teamwork skills.
          </p>

          <a
           href={SIH}
           target="_blank"
           rel="noopener noreferrer"
           className="mt-6 block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition duration-300"
          >
            View Certificate
          </a>
        </div>

        {/* NPTEL Certificate */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300">

          <div className="flex items-center justify-between mb-5">

            <h2 className="text-2xl text-blue-400 font-semibold">
              NPTEL Certificate
            </h2>

            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              2026
            </span>
          </div>

          <p className="text-gray-400 leading-7">
              Successfully earned an NPTEL certification, demonstrating a strong commitment
              to continuous learning and enhancing technical as well as professional skills.
          </p>

          <a
           href={Nptel}
           target="_blank"
           rel="noopener noreferrer"
           className="mt-6 block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition duration-300"
          >
            View Certificate
          </a>
        </div>

        {/* Web Development Certificate */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300">

          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl text-blue-400 font-semibold">
              Web Development
            </h2>

            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              2026
            </span>
          </div>

          <p className="text-gray-400 leading-7">
               Successfully completed a Web Development certification, gaining practical
               experience in building responsive and modern web applications using React
               and Tailwind CSS.
          </p>

          <button className="mt-6 block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition duration-300">
            View Certificate
          </button>
        </div>

      </div>
    </section>
  );
}

export default Achievement;