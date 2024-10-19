import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Banner = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    return (
        <div className='bg-gray-200'>
            <div className='container mx-auto py-5 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-28 text-center'>
                <div>
                    <img className='rounded-full w-[300px] md:w-full' src="./bannerlogo.jpg" alt="bannerImg" />
                </div>
                <div className='w-[550px] flex flex-col items-center gap-10'>
                    <h1 id="title" className='text-xl md:text-5xl text-gray-600'>Hayallerinizi Ertelemeyin</h1>
                    <div className='flex flex-col gap-2 text-sm md:text-xl'>
                        <p>Dekorasyona mı ihtiyacınız var?</p>
                        <p>Bizimle iletişime geçin</p>
                        <p>+90 539 276 7709</p>
                        <p>fix@ipssolidarity.com</p>
                    </div>
                    <NavLink onClick={scrollToTop} to="/iletisim" className="bg-cyan-900  text-white py-2 px-5 hover:scale-110 duration-200 rounded"><FontAwesomeIcon icon={faEnvelope}/> Mesaj Bırakın</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Banner