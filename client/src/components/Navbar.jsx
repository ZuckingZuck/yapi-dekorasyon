import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle, faListCheck, faShop, faThumbsUp, faPhone, faBars } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const categories = useSelector((state) => state.categories.categories);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const scrollToDiv = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="relative z-50 bg-gradient-to-br from-cyan-950 via-cyan-900 to-cyan-700 shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0" ref={mobileMenuRef}>
        {/* Logo */}
        <NavLink
          to="/"
          className="text-yellow-300 text-3xl font-extrabold tracking-widest drop-shadow-lg flex items-center gap-2"
          style={{ letterSpacing: '0.1em' }}
        >
          RModel
        </NavLink>

        {/* Mobil Menü Butonu */}
        <button
          className="text-yellow-300 md:hidden text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Menü İçeriği */}
        <div
          className={`fixed md:static top-0 left-0 w-full h-full md:w-auto md:h-auto bg-cyan-950/95 md:bg-transparent flex-col md:flex md:flex-row gap-2 md:gap-3 items-center text-lg font-semibold transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex`}
        >
          <NavLink
            className="rounded-full px-5 py-2 mx-1 my-2 md:my-0 bg-white/10 border border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-cyan-900 transition-all duration-200 shadow-md"
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faHome} className="mr-2" /> Ana Sayfa
          </NavLink>
          <NavLink
            className="rounded-full px-5 py-2 mx-1 my-2 md:my-0 bg-white/10 border border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-cyan-900 transition-all duration-200 shadow-md"
            to="/hakkimizda"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> Hakkımızda
          </NavLink>
          <div className="relative" ref={dropdownRef}>
            <NavLink
              to="/projelerimiz"
              onClick={toggleDropdown}
              className="rounded-full px-5 py-2 mx-1 my-2 md:my-0 bg-white/10 border border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-cyan-900 transition-all duration-200 shadow-md flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faListCheck} /> Hizmetlerimiz
            </NavLink>
            {isDropdownOpen && (
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 mt-2 w-64 md:w-[700px] bg-cyan-900/95 text-yellow-300 rounded-xl shadow-2xl z-20 p-4 animate-fadeInUp">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {categories?.map((item) => (
                    <NavLink
                      key={item.name}
                      onClick={() => {
                        scrollToDiv(item.name);
                        setIsMobileMenuOpen(false);
                        setIsDropdownOpen(false);
                      }}
                      to="/projelerimiz"
                      className="block px-4 py-2 rounded-full hover:bg-yellow-300 hover:text-cyan-900 transition-all duration-150"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>
          <NavLink
            className="rounded-full px-5 py-2 mx-1 my-2 md:my-0 bg-white/10 border border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-cyan-900 transition-all duration-200 shadow-md"
            to="/bayiliklerimiz"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faShop} className="mr-2" /> Bayiliklerimiz
          </NavLink>
          <NavLink
            className="rounded-full px-5 py-2 mx-1 my-2 md:my-0 bg-white/10 border border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-cyan-900 transition-all duration-200 shadow-md"
            to="/referanslarimiz"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faThumbsUp} className="mr-2" /> Referanslarımız
          </NavLink>
          <NavLink
            className="rounded-full px-5 py-2 mx-1 my-2 md:my-0 bg-white/10 border border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-cyan-900 transition-all duration-200 shadow-md"
            to="/iletisim"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faPhone} className="mr-2" /> İletişim
          </NavLink>
          {/* Mobil menüde kapatma butonu */}
          <button
            className={`text-yellow-300 md:hidden text-2xl absolute top-6 right-6`}
            onClick={toggleMobileMenu}
            style={{ display: isMobileMenuOpen ? 'block' : 'none' }}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;