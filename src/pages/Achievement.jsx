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
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {/* SIH Certificate */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 shadow-lg">

          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl text-blue-400 font-semibold">
              SIH Certificate
            </h2>

            <span className="bg-white text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
              2025
            </span>
          </div>

          <p className="text-gray-400 leading-7">
            Participated in Smart India Hackathon and worked on innovative
            problem-solving and teamwork skills.
          </p>

          <a
           href={SIH}
           target="_blank"
           rel="noopener noreferrer"
           className="mt-6 block w-full text-center bg-white text-black py-2 rounded-xl font-medium hover:bg-gray-200 transition"
          >
            View Certificate
          </a>
        </div>

        {/* NPTEL Certificate */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 shadow-lg">

          <div className="flex items-center justify-between mb-5">

            <h2 className="text-2xl text-blue-400 font-semibold">
              NPTEL Certificate
            </h2>

            <span className="bg-white text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
              2026
            </span>
          </div>

          <p className="text-gray-400 leading-7">
            Successfully completed NPTEL course and improved technical
            knowledge and programming concepts.
          </p>

          <a
           href={Nptel}
           target="_blank"
           rel="noopener noreferrer"
           className="mt-6 block w-full text-center bg-white text-black py-2 rounded-xl font-medium hover:bg-gray-200 transition"
          >
            View Certificate
          </a>
        </div>

        {/* Web Development Certificate */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 shadow-lg">

          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl text-blue-400 font-semibold">
              Web Development
            </h2>

            <span className="bg-white text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
              2026
            </span>
          </div>

          <p className="text-gray-400 leading-7">
            Completed frontend web development training using React and
            Tailwind CSS with responsive UI design.
          </p>

          <button className="mt-6 w-full bg-white text-black py-2 rounded-xl font-medium hover:bg-gray-200 transition">
            View Certificate
          </button>
        </div>

      </div>
    </section>
  );
}

export default Achievement;