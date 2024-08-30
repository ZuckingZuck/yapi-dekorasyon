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
            <div className='container mx-auto flex items-center justify-center gap-36 text-center pt-16'>
                <div>
                    <img src="https://www.yapidekorasyon.com.tr/wp-content/uploads/2015/11/home_renovate2_pic1.png" alt="bannerImg" />
                </div>
                <div className='w-[550px] tracking-widest flex flex-col items-center gap-10'>
                    <h1 id="title" className='text-5xl text-gray-600'>Hayallerinizi Ertelemeyin</h1>
                    <div className='flex flex-col gap-2 text-xl'>
                        <p>Dekorasyona mı ihtiyacınız var?</p>
                        <p>Bizimle iletişime geçin</p>
                        <p>+90 533 958 1645</p>
                    </div>
                    <NavLink onClick={scrollToTop} to="/iletisim" className="bg-blue-900  text-white py-2 px-5 hover:scale-110 duration-200 rounded"><FontAwesomeIcon icon={faEnvelope}/> Mesaj Bırakın</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Banner