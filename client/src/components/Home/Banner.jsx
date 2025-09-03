import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <section className="relative bg-gradient-to-br from-cyan-900 via-cyan-700 to-cyan-400 min-h-[60vh] flex items-center overflow-hidden">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 gap-10">
                {/* Metin Alanı */}
                <div className="flex-1 flex flex-col items-start gap-8 animate-fadeInUp">
                    <h1 className="text-3xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
                        Hayallerinizi <span className="text-yellow-300">Ertelemeyin</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-cyan-100 max-w-xl">
                        Modern, fonksiyonel ve estetik dekorasyon çözümleriyle yaşam alanlarınızı birlikte güzelleştirelim.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                        <NavLink
                            onClick={scrollToTop}
                            to="/iletisim"
                            className="bg-yellow-400 hover:bg-yellow-300 text-cyan-900 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-200 text-lg flex items-center gap-2"
                        >
                            <FontAwesomeIcon icon={faEnvelope} /> Mesaj Bırakın
                        </NavLink>
                        <a
                            href="tel:+905392767709"
                            className="bg-white hover:bg-cyan-100 text-cyan-900 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-200 text-lg flex items-center gap-2"
                        >
                            <FontAwesomeIcon icon={faPhone} className="text-cyan-700" />
                            +90 539 276 77 09
                        </a>
                    </div>
                </div>
                {/* Görsel Alanı */}
                <div className="flex-1 flex justify-center items-center">
                    <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full shadow-2xl overflow-hidden border-8 border-white/30 bg-white/10 animate-zoomIn">
                        <img
                            src="./bannerlogo.jpg"
                            alt="bannerImg"
                            className="object-cover w-full h-full"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 to-transparent" />
                    </div>
                </div>
            </div>
            {/* Dekoratif arka plan efektleri */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-yellow-300/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-white/10 to-transparent pointer-events-none" />
        </section>
    );
};

export default Banner;