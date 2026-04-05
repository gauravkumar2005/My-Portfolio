function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-blue-400 mb-6">
          Get In Touch
        </h2>

        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          I'm always open to new opportunities, collaborations, or
          interesting projects. Feel free to connect with me.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Email */}
          <a
            href="mailto:gauravkumar8414pq@gmail.com"
            className="bg-gray-900 p-8 rounded-2xl hover:scale-105 hover:bg-gray-800 transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-300">
              Email
            </h3>
            <p className="text-gray-400">
              gauravkumar8414pq@gmail.com
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/gauravkumar2005"
            target="_blank"
            className="bg-gray-900 p-8 rounded-2xl hover:scale-105 hover:bg-gray-800 transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-300">
              GitHub
            </h3>
            <p className="text-gray-400">
              github.com/gauravkumar2005
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/gaurav-kumar-1530b62aa"
            target="_blank"
            className="bg-gray-900 p-8 rounded-2xl hover:scale-105 hover:bg-gray-800 transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-300">
              LinkedIn
            </h3>
            <p className="text-gray-400">
              linkedin.com/in/gaurav-kumar
            </p>
          </a>

        </div>

        {/* Resume Button */}
        <div className="mt-12">
          <a
            href="#"
            className="px-8 py-3 bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;