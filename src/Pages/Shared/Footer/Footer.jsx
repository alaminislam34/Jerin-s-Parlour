import { FaLocationPin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#F63E7B] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Address Section */}
        <div>
          <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
            <FaLocationPin /> Address
          </h4>
          <p className="text-sm">
            H#000 (6th Floor), Road #00, <br />
            New DOHS, Mohakhali, Dhaka, Bangladesh
          </p>
        </div>

        {/* Company Section */}
        <div>
          <h4 className="text-lg font-bold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>About</li>
            <li>Project</li>
            <li>Our Team</li>
            <li>Terms & Conditions</li>
            <li>Submit Listing</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>Quick Links</li>
            <li>Rentals</li>
            <li>Sales</li>
            <li>Contact</li>
            <li>Our Blog</li>
          </ul>
        </div>

        {/* About Us Section */}
        <div>
          <h4 className="text-lg font-bold mb-4">About Us</h4>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas.
          </p>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
