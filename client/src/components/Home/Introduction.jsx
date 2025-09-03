import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

const Introduction = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <section className="relative bg-gradient-to-br from-cyan-900 via-cyan-700 to-cyan-400 py-16 overflow-hidden">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 px-6">
                {/* Metin Alanı */}
                <div className="flex-1 flex flex-col gap-8 animate-fadeInUp">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg leading-tight">
                        Hayal Edin <span className="text-yellow-300">Gerçekleştirelim!</span>
                    </h2>
                    <p className="text-lg md:text-2xl text-cyan-100 max-w-xl">
                        Güvenilir ve profesyonel ekibimizle, hayallerinizi modern ve fonksiyonel yaşam alanlarına dönüştürüyoruz.
                    </p>
                    <ul className="flex flex-col gap-2 text-lg md:text-xl text-yellow-200 font-semibold">
                        <li className="flex items-center gap-2"><FontAwesomeIcon icon={faSlack}/> Projelendirme</li>
                        <li className="flex items-center gap-2"><FontAwesomeIcon icon={faSlack}/> Uygulama</li>
                        <li className="flex items-center gap-2"><FontAwesomeIcon icon={faSlack}/> Sonuç: Mutlu Müşteriler</li>
                    </ul>
                    <NavLink
                        onClick={scrollToTop}
                        to="/projelerimiz"
                        className="bg-yellow-400 hover:bg-yellow-300 text-cyan-900 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-200 text-lg flex items-center gap-2 w-max"
                    >
                        Projelerimiz <FontAwesomeIcon icon={faLayerGroup} />
                    </NavLink>
                </div>
                {/* Görsel Alanı */}
                <div className="flex-1 flex flex-row gap-6 justify-center items-center animate-zoomIn">
                    <img
                        className="h-64 md:h-80 w-40 md:w-56 object-cover rounded-3xl shadow-2xl border-4 border-white/30 hover:scale-105 transition-transform duration-300"
                        src="./banner1.jpg"
                        alt="img1"
                        loading="lazy"
                    />
                    <img
                        className="h-64 md:h-80 w-40 md:w-56 object-cover rounded-3xl shadow-2xl border-4 border-white/30 hover:scale-105 transition-transform duration-300"
                        src="./banner2.jpg"
                        alt="img2"
                        loading="lazy"
                    />
                    <img
                        className="h-64 md:h-80 w-40 md:w-56 object-cover rounded-3xl shadow-2xl border-4 border-white/30 hover:scale-105 transition-transform duration-300"
                        src="./banner3.jpg"
                        alt="img3"
                        loading="lazy"
                    />
                </div>
            </div>
            {/* Dekoratif arka plan efektleri */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-yellow-300/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-white/10 to-transparent pointer-events-none" />
        </section>
    );
};

export default Introduction;