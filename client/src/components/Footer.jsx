import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';

const Footer = () => {
  const categories = useSelector((state) => state.categories.categories);
  
  const scrollToDiv = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
  <footer className="relative bg-gradient-to-br from-cyan-950 via-cyan-900 to-cyan-700 text-cyan-100 pt-12 pb-6 overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 lg:px-20 xl:px-60 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-yellow-300 mb-6 tracking-widest drop-shadow-lg">Hizmetlerimiz</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-4xl mb-8">
          {categories?.map((item) => (
            <li key={item.name} className="">
              <NavLink
                to={"/projelerimiz"}
                onClick={() => scrollToDiv(item.name)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-cyan-900 transition-all duration-200 shadow-md w-full"
              >
                <FontAwesomeIcon icon={faArrowRight} /> <span className="text-white">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="w-full h-px bg-yellow-300/30 mb-6" />
        <div className="text-center text-sm md:text-lg text-white">
          <p>
            RModel Tüm Hakları Saklıdır.{' '}
            <a className="underline text-yellow-300 hover:text-white transition" href="https://www.ipssolidarity.com/" target="_blank" rel="noopener noreferrer">
              IPSS
            </a>{' '}
            tarafından geliştirildi.
          </p>
        </div>
      </div>
      {/* Dekoratif arka plan efektleri */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-yellow-300/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-white/10 to-transparent pointer-events-none" />
    </footer>
  );
}

export default Footer;
