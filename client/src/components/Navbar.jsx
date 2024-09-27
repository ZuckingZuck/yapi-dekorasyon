import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle, faListCheck, faShop, faThumbsUp, faHelmetSafety, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const categories = useSelector((state) => state.categories.categories)
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
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
    <div className='bg-cyan-950'>
      <div className='container mx-auto flex flex-col items-center py-6 gap-6 justify-between'>
        {/* <NavLink to="/">
          <img src="https://www.yapidekorasyon.com.tr/wp-content/uploads/2021/08/yapi-dekorasyon.png" alt="logo" />
        </NavLink> */}
        <div className='text-white text-lg flex gap-3'>
          <NavLink className="hover:bg-cyan-900 py-2 px-3 rounded transition duration-250" to="/"><FontAwesomeIcon icon={faHome} /> Ana Sayfa</NavLink>
          <NavLink className="hover:bg-cyan-900 py-2 px-3 rounded transition duration-250" to="/hakkimizda"><FontAwesomeIcon icon={faInfoCircle} /> Hakkımızda</NavLink>
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => {toggleDropdown(); navigate("/projelerimiz")}}
              className="flex items-center gap-2 hover:bg-cyan-800 py-2 px-3 rounded transition duration-250"
            >
              <FontAwesomeIcon icon={faListCheck} /> Hizmetlerimiz
            </button>
            {isDropdownOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 min-w-[1000px] bg-cyan-800 text-white rounded-md shadow-lg z-10">
                <div className="grid grid-cols-4 gap-2 p-2">
                  {
                    categories?.map((item) => {
                      return <NavLink to="/projelerimiz" className="block px-2 py-1 hover:bg-gray-600 rounded">{item.name}</NavLink>
                    })
                  }
                </div>
              </div>
            )}
          </div>
          <NavLink className="hover:bg-cyan-800 py-2 px-3 rounded transition duration-250" to="/bayiliklerimiz"><FontAwesomeIcon icon={faShop} /> Bayiliklerimiz</NavLink>
          <NavLink className="hover:bg-cyan-800 py-2 px-3 rounded transition duration-250" to="/referanslarimiz"><FontAwesomeIcon icon={faThumbsUp} /> Referanslarımız</NavLink>
          {/* <NavLink className="hover:bg-gray-700 py-2 px-3 rounded transition duration-250" to="/projelerimiz"><FontAwesomeIcon icon={faHelmetSafety} /> Projeler</NavLink> */}
          <NavLink className="hover:bg-cyan-800 py-2 px-3 rounded transition duration-250" to="/iletisim"><FontAwesomeIcon icon={faPhone} /> İletişim</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
