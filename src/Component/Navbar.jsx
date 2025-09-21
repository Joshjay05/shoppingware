import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/collection", label: "Collection" },
  { to: "/contact", label: "Contact" },
];

const Navbar = ({ cart }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Active Link Indicator Component
  const NavLinkWithIndicator = ({ to, label }) => {
    const isActive = location.pathname === to;

    return (
      <NavLink
        to={to}
        className={`
                    flex flex-col items-center gap-1 
                    relative group
                    transition-colors duration-300
                    ${
                      isActive
                        ? "text-gray-900"
                        : "text-gray-600 hover:text-gray-800"
                    }
                `}
      >
        <span>{label}</span>
        <hr
          className={`
                        absolute -bottom-1 
                        w-2/4 border-none h-[2px] 
                        transition-all duration-300
                        ${
                          isActive
                            ? "bg-gray-700 scale-100"
                            : "bg-gray-700 scale-0"
                        }
                    `}
        />
      </NavLink>
    );
  };

  return (
    <nav className="relative flex items-center justify-between py-5 font-medium container mx-auto px-4">
      {/* Logo */}
      <img
        src={assets?.logo}
        alt="logo"
        className="w-36 h-auto object-contain"
      />

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex gap-5 text-sm">
        {NAV_LINKS.map((link) => (
          <NavLinkWithIndicator key={link.to} to={link.to} label={link.label} />
        ))}
      </ul>
      <section className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="search"
          className="w-5 cursor-pointer"
        />
        <section className="group relative">
          <img src={assets.profile_icon} className="w-5" alt="search" />
          <article className="group-hover:block hidden absolute dropdown-menu right-0 top-3.5 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5">
              <p className="border-2 border-gray-200 p-2 rounded-md cursor-pointer hover:text-black">
                Profile
              </p>

              <p className="border-2 border-gray-200 p-2 rounded-md cursor-pointer hover:text-black">
                Settings
              </p>

              <p className="border-2 border-gray-200 p-2 rounded-md"> Logout</p>
            </div>
          </article>
        </section>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black  rounded-full aspect-square text-white text-[8px]">
            {cart?.length}
          </p>
        </Link>
      </section>
      {/* Mobile Menu Toggle */}
      <div className="sm:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-700 focus:outline-none"
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="
                        sm:hidden 
                        fixed 
                        // inset-0 
                        bg-white 
                        z-50 
                        flex 
                        flex-col 
                        items-center 
                        justify-center 
                        space-y-6 
                        text-xl
                    "
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `
                                ${isActive ? "text-gray-900" : "text-gray-600"}
                                hover:text-gray-800
                                transition-colors
                                duration-300
                            `}
              onClick={toggleMobileMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
