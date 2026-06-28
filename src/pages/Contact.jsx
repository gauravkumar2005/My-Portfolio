function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-blue-400 mb-6">
          Get In Touch
        </h2>

        <p className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto mb-14">
           I'm currently looking for internship and full-time opportunities.
           If you have a project, collaboration, or job opportunity, feel free
           to reach out. I'd love to connect with you.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <a
            href="mailto:gauravkumar8414pq@gmail.com"
            className="bg-gray-900 border border-gray-800 p-8 rounded-2xl hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-300">
              Email
            </h3>
            <p className="text-gray-400">
              gauravkumar8414pq@gmail.com
            </p>
          </a>

          <a
            href="https://github.com/gauravkumar2005"
            target="_blank"
            className="bg-gray-900 border border-gray-800 p-8 rounded-2xl hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-300">
              GitHub
            </h3>
            <p className="text-gray-400">
              github.com/gauravkumar2005
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/gaurav-kumar-1530b62aa"
            target="_blank"
            className="bg-gray-900 border border-gray-800 p-8 rounded-2xl hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-300">
              LinkedIn
            </h3>
            <p className="text-gray-400">
              linkedin.com/in/gaurav-kumar
            </p>
          </a>

        </div>

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