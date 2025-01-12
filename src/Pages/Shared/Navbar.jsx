import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="bg-[#FFF8F5]">
      <nav className="flex justify-between items-center px-4 max-w-7xl mx-auto py-4">
        <div>
          <img className="w-20 md:w-24" src={logo} alt="" />
        </div>
        <div className="flex items-center gap-8">
          <ul className="items-center gap-10 *:text-navColor hidden lg:flex">
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
          <div className="flex">
            <button
              onClick={() => navigate("/login")}
              className="py-2 px-4 md:px-6 bg-primary text-white rounded-md"
            >
              Login
            </button>
            <div className="relative">
              <button
                onClick={() => setOpen(!isOpen)}
                className="lg:hidden p-2"
              >
                <RiMenu3Fill />
              </button>
              {isOpen ? (
                <div className="absolute top-10 right-0 bg-white border p-4 w-40">
                  <ul className="flex-col items-center gap-4 *:text-navColor">
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
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
