import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center px-4 max-w-7xl mx-auto py-4">
        <div>
          <img className="w-20 md:w-24" src={logo} alt="" />
        </div>
        <div>
          <ul>
            <li>
              <NavLink> Home</NavLink>
            </li>
            <li>
              <NavLink> Our Portfolio</NavLink>
            </li>
            <li>
              <NavLink> Our Team</NavLink>
            </li>
            <li>
              <NavLink> Contact Us</NavLink>
            </li>
          </ul>
          <div>
            <button className="py-2 px-4 bg-primary text-white">Login</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
