function Contact () {
  return (
   <section className="py-20 px-6 min-h-screen bg-gray-950 text-white">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
      Contact Me
    </h2>

    <div className="bg-gray-900 p-8 rounded-2xl shadow-xl">

      {/* Contact Form */}
      <form action="#" method="POST" className="space-y-6">

        <div>
          <label className="block mb-2 text-gray-400">Full Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-400"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-400">Email Address</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-400"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-400">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-400"
            placeholder="Write your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="mt-10 text-center">
        <p className="text-gray-400 mb-4">Or connect with me:</p>

        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/gaurav-kumar-1530b62aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/gauravkumar2005"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>

          <a
            href="mailto:gauravkumar8414pq@gmail.com"
            className="hover:text-blue-400 transition"
          >
            Email
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
  );
}

export default Contact;