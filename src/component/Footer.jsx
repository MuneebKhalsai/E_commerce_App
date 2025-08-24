const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      {/* Top Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Shop Categories */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Shop</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Kitchen Accessories</a></li>
            <li><a href="#" className="hover:underline">Cookware</a></li>
            <li><a href="#" className="hover:underline">Dinnerware</a></li>
            <li><a href="#" className="hover:underline">Storage</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Company</h2>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/service" className="hover:underline">Our Services</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Support</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Order Tracking</a></li>
            <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Newsletter</h2>
          <p className="text-sm mb-3">Subscribe to get special offers and updates on new arrivals.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-md focus:outline-none text-black"
            />
            <button
              type="submit"
              className="bg-yellow-500 px-4 py-2 rounded-r-md hover:bg-yellow-600 text-black font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} MyBrand™. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;