import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle, faListCheck, faShop, faThumbsUp, faHelmetSafety, faPhone } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='bg-gray-900'>
      <div className='container mx-auto flex flex-col items-center py-6 gap-6 justify-between'>
        <NavLink to="/">
          <img src="https://www.yapidekorasyon.com.tr/wp-content/uploads/2021/08/yapi-dekorasyon.png" alt="logo" />
        </NavLink>
        <div className='text-white text-lg flex gap-3'>
          <NavLink className="hover:bg-gray-700 py-2 px-3 rounded transition duration-250" to="/"><FontAwesomeIcon icon={faHome} /> Ana Sayfa</NavLink>
          <NavLink className="hover:bg-gray-700 py-2 px-3 rounded transition duration-250" to="/hakkimizda"><FontAwesomeIcon icon={faInfoCircle} /> Hakkımızda</NavLink>
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={toggleDropdown}
              className="flex items-center gap-2 hover:bg-gray-700 py-2 px-3 rounded transition duration-250"
            >
              <FontAwesomeIcon icon={faListCheck} /> Hizmetlerimiz
            </button>
            {isDropdownOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 min-w-[900px] bg-gray-700 text-white rounded-md shadow-lg z-10">
                <div className="grid grid-cols-4 gap-2 p-2">
                  <NavLink to="#" className="block px-2 py-1 hover:bg-gray-600 rounded">Alçı – Sıva</NavLink>
                  <NavLink to="#" className="block px-2 py-1 hover:bg-gray-600 rounded">Amerikan Kapı</NavLink>
                  <NavLink to="#" className="block px-2 py-1 hover:bg-gray-600 rounded">Aspen Asma Tavan</NavLink>
                  <NavLink to="/asma-tavan" className="block px-2 py-1 hover:bg-gray-600 rounded">Asma Tavan</NavLink>

                  <NavLink to="#" className="block px-2 py-1 hover:bg-gray-600 rounded">Duvar Kağıdı</NavLink>
                  <NavLink to="/boya-badana" className="block px-2 py-1 hover:bg-gray-600 rounded">Boya Badana</NavLink>
                  <NavLink to="/dekoratif-boya" className="block px-2 py-1 hover:bg-gray-600 rounded">Dekoratif Boya</NavLink>
                  <NavLink to="#" className="block px-2 py-1 hover:bg-gray-600 rounded">Dekorasyon</NavLink>

                  <NavLink to="#" className="block px-2 py-1 hover:bg-gray-600 rounded">Doğal Taş</NavLink>
                  <NavLink to="#" className="block px-2 py-1 hover:bg-gray-600 rounded">Granit Uygulamaları</NavLink>
                  <NavLink to="#" className="block px-2 py-1 hover:bg-gray-600 rounded">Isı Yalıtım</NavLink>
                  <NavLink to="#" className="block px-2 py-1 hover:bg-gray-600 rounded">Laminant Parke</NavLink>

                  <NavLink to="#" className="block px-2 py-1 hover:bg-gray-600 rounded">Mantolama</NavLink>
                  <NavLink to="/metal-asma-tavan" className="block px-2 py-1 hover:bg-gray-600 rounded">Metal Asma Tavan</NavLink>
                  <NavLink to="#" className="block px-2 py-1 hover:bg-gray-600 rounded">Seramik Uygulamaları</NavLink>
                  <NavLink to="#" className="block px-2 py-1 hover:bg-gray-600 rounded">Süs Havuzu</NavLink>

                  <NavLink to="/tas-yunu-asma-tavan" className="block px-2 py-1 hover:bg-gray-600 rounded">Taşyünü Asma Tavan</NavLink>
                </div>
              </div>
            )}
          </div>
          <NavLink className="hover:bg-gray-700 py-2 px-3 rounded transition duration-250" to="/bayiliklerimiz"><FontAwesomeIcon icon={faShop} /> Bayiliklerimiz</NavLink>
          <NavLink className="hover:bg-gray-700 py-2 px-3 rounded transition duration-250" to="/referanslarimiz"><FontAwesomeIcon icon={faThumbsUp} /> Referanslarımız</NavLink>
          <NavLink className="hover:bg-gray-700 py-2 px-3 rounded transition duration-250" to="/projelerimiz"><FontAwesomeIcon icon={faHelmetSafety} /> Projeler</NavLink>
          <NavLink className="hover:bg-gray-700 py-2 px-3 rounded transition duration-250" to="/iletisim"><FontAwesomeIcon icon={faPhone} /> İletişim</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
