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
    <div className='bg-cyan-950 text-gray-200'>
      <div className='container px-6 md:px-10 lg:px-20 xl:px-60 py-10 mx-auto'>
        <h1 className='text-xl md:text-2xl mb-4'>Hizmetlerimiz</h1>
        <hr />
        <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4'>
          {
            categories?.map((item) => {
              return (
                <li key={item.name}>
                  <NavLink to={"/projelerimiz"} onClick={() => scrollToDiv(item.name)} >
                    <FontAwesomeIcon icon={faArrowRight} /> {item.name}
                  </NavLink>
                </li>
              );
            })
          }
        </ul>
      </div>
      <hr />
      <div className='container mx-auto px-6 md:px-10 lg:px-20 xl:px-60 py-5 text-sm md:text-lg'>
        <p>RModel Tüm Hakları Saklıdır. <a className='underline text-white' href="https://www.ipssolidarity.com/">IPSS</a> tarafından geliştirildi.</p>
      </div>
    </div>
  )
}

export default Footer;
