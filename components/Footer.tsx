const Footer = () => {
  return (
    <footer className="bg-background shadow-md mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm">We are a modern e-commerce platform offering a wide range of products.</p>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-primary">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary">FAQs</a></li>
              <li><a href="#" className="hover:text-primary">Shipping</a></li>
              <li><a href="#" className="hover:text-primary">Returns</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-primary">Facebook</a></li>
              <li><a href="#" className="hover:text-primary">Twitter</a></li>
              <li><a href="#" className="hover:text-primary">Instagram</a></li>
              <li><a href="#" className="hover:text-primary">LinkedIn</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
            <p className="text-sm mb-2">Subscribe to our newsletter for updates and promotions.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="flex-grow px-2 py-1 text-sm border rounded-l" />
              <button type="submit" className="bg-primary text-primary-foreground px-2 py-1 text-sm rounded-r">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-6 text-center text-sm">
          <p>&copy; 2023 E-Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;