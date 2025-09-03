
import React, { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Success = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    // Sayı animasyonları için useSpring kullanımı
    const countSpring = useSpring({
        from: { number: 0 },
        number: isVisible ? 3520 : 0,
        config: { duration: 1200 },
    });
    const teamSpring = useSpring({
        from: { number: 0 },
        number: isVisible ? 15 : 0,
        config: { duration: 1200 },
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <section
            ref={ref}
            className="relative bg-gradient-to-br from-cyan-900 via-cyan-700 to-cyan-400 py-16 px-4 md:px-0 flex flex-col items-center justify-center overflow-hidden animate-fadeInUp"
        >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-12 text-center">
                Şimdiye Kadarki <span className="text-yellow-300">Başarılarımız</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-10 md:gap-32 w-full max-w-4xl justify-center items-center">
                {/* İşlem Kartı */}
                <div className="bg-white/20 rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-4 border-4 border-white/30 min-w-[220px]">
                    <img
                        className="w-16 h-16 mb-2"
                        src="https://cdn-icons-png.flaticon.com/128/2413/2413074.png"
                        alt="icon"
                        loading="lazy"
                    />
                    <animated.p className="text-5xl font-bold text-yellow-300">
                        {countSpring.number.to(n => n.toFixed(0))}
                    </animated.p>
                    <p className="text-cyan-900 text-lg font-semibold">İşlem</p>
                </div>
                {/* Ekip Kartı */}
                <div className="bg-white/20 rounded-3xl shadow-2xl p-8 flex flex-col items-center gap-4 border-4 border-white/30 min-w-[220px]">
                    <img
                        className="w-16 h-16 mb-2"
                        src="https://cdn-icons-png.flaticon.com/128/4490/4490362.png"
                        alt="icon"
                        loading="lazy"
                    />
                    <animated.p className="text-5xl font-bold text-yellow-300">
                        {teamSpring.number.to(n => n.toFixed(0))}
                    </animated.p>
                    <p className="text-cyan-900 text-lg font-semibold">Profesyonel Ekip</p>
                </div>
            </div>
            {/* Dekoratif arka plan efektleri */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-yellow-300/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-white/10 to-transparent pointer-events-none" />
        </section>
    );
};

export default Success;
