import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { assets } from "../../../assets/frontend_assets/assets";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative flex items-center justify-between py-5 font-medium container mx-auto px-4">
      <img
        src={assets?.logo}
        alt="logo"
        className="w-36 h-auto object-contain"
      />

      <div className="hidden sm:flex items-center space-x-4">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `
              relative group
              transition-colors duration-300
              ${isActive ? "text-gray-900" : "text-gray-600"}
            `}
          >
            <span className="pb-1">{link.label}</span>
            <div
              className={`
                absolute bottom-0 left-0 w-full h-0.5 
                transition-all duration-300
                ${
                  location.pathname === link.to
                    ? "bg-gray-700 scale-100"
                    : "bg-transparent scale-0"
                }
              `}
            />
          </NavLink>
        ))}
      </div>

      <div>
        <img src={assets.search_icon} alt="search" />
        <div>
          <img src={assets.profile_icon} alt="search" />
        </div>
      </div>
      {/*for  Mobile Menu Toggle */}
      <div className="sm:hidden" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-gray-700" />
        ) : (
          <Menu className="w-6 h-6 text-gray-700" />
        )}
      </div>

      {/* for Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 bg-white z-50">
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `
                  text-xl
                  transition-colors duration-300
                  ${isActive ? "text-gray-900" : "text-gray-600"}
                  relative
                `}
                onClick={toggleMobileMenu}
              >
                <span>{link.label}</span>
                <div
                  className={`
                    absolute bottom-0 left-0 w-full h-0.5 
                    transition-all duration-300
                    ${
                      location.pathname === link.to
                        ? "bg-gray-700 scale-100"
                        : "bg-transparent scale-0"
                    }
                  `}
                />
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
