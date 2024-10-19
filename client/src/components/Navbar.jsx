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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
    <div className='bg-cyan-950'>
      <div className={`container mx-auto flex items-center ${isMobileMenuOpen ? 'justify-center' : 'justify-between md:justify-center'} py-6 px-4 md:px-0`} ref={mobileMenuRef}>
        {/* Logo Alanı */}
        <NavLink to="/" className={`text-white block md:hidden text-2xl font-bold ${isMobileMenuOpen ? 'hidden' : 'flex'}`}>
          RModel
        </NavLink>
        
        {/* Mobil Menü Butonu */}
        <button
          className={`text-white md:hidden ${!isMobileMenuOpen ? 'flex' : 'hidden'}`}
          onClick={toggleMobileMenu}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>

        {/* Menü İçeriği */}
        <div className={`flex-col md:flex md:flex-row gap-3 ${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex items-center text-white text-lg`}>
          <NavLink 
            className="hover:bg-cyan-900 py-2 px-3 rounded transition duration-250" 
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faHome} /> Ana Sayfa
          </NavLink>
          <NavLink 
            className="hover:bg-cyan-900 py-2 px-3 rounded transition duration-250" 
            to="/hakkimizda"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faInfoCircle} /> Hakkımızda
          </NavLink>
          <div className="relative" ref={dropdownRef}>
            <NavLink
              to="/projelerimiz"
              onClick={toggleDropdown}
              className="flex items-center gap-2 hover:bg-cyan-800 py-2 px-3 rounded transition duration-250"
            >
              <FontAwesomeIcon icon={faListCheck} /> Hizmetlerimiz
            </NavLink>
            {isDropdownOpen && (
              <div className="absolute md:left-1/2 md:transform md:-translate-x-1/2 mt-2 w-full md:min-w-[1000px] bg-cyan-800 text-white rounded-md shadow-lg z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 p-2">
                  {categories?.map((item) => (
                    <NavLink
                      key={item.name}
                      onClick={() => { scrollToDiv(item.name); setIsMobileMenuOpen(false); }}
                      to="/projelerimiz"
                      className="block px-2 py-1 hover:bg-cyan-700 rounded transition duration-150"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>
          <NavLink 
            className="hover:bg-cyan-800 py-2 px-3 rounded transition duration-250" 
            to="/bayiliklerimiz"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faShop} /> Bayiliklerimiz
          </NavLink>
          <NavLink 
            className="hover:bg-cyan-800 py-2 px-3 rounded transition duration-250" 
            to="/referanslarimiz"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faThumbsUp} /> Referanslarımız
          </NavLink>
          <NavLink 
            className="hover:bg-cyan-800 py-2 px-3 rounded transition duration-250" 
            to="/iletisim"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faPhone} /> İletişim
          </NavLink>
          <button
            className={`text-white md:hidden ${isMobileMenuOpen ? 'flex' : 'hidden'}`}
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
