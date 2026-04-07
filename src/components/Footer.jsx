function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 sm:py-5 md:py-6 px-4">

      <p className="text-gray-400 text-sm sm:text-base md:text-lg">
        © {new Date().getFullYear()} Gaurav Kumar. All rights reserved.
      </p>
      
    </footer>
  );
}

export default Footer;