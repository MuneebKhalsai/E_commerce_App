const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
      
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Services</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Web Design</a></li>
            <li><a href="#" className="hover:underline">Development</a></li>
            <li><a href="#" className="hover:underline">SEO</a></li>
            <li><a href="#" className="hover:underline">Consulting</a></li>
          </ul>
        </div>

      
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Company</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Support</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Status</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Follow Us</h2>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-400"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-sky-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-red-500"><i className="fab fa-youtube"></i></a>
            <a href="#" className="hover:text-pink-500"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} YourCompany™. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
