import React, { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Success = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    // Sayı animasyonları için useSpring kullanımı
    const countSpring = useSpring({
        from: { number: 0 },
        number: isVisible ? 3520 : 0,
        config: { duration: 1000 }
    });

    const teamSpring = useSpring({
        from: { number: 0 },
        number: isVisible ? 15 : 0,
        config: { duration: 1000 }
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 } // Görünürlük eşiği (görünür olduğunda 0.1)
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
        <div
            ref={ref}
            className='flex flex-col mt-10 justify-center px-60 items-center container mx-auto border-t-2 border-b-2 pt-12 pb-12'
        >
            <div className=''>
                <div className='mb-10 text-xl text-gray-800 text-center'>
                    <h1>ŞİMDİYE KADARKİ BAŞARILARIMIZ</h1>
                </div>
                <div className='flex flex-col md:flex-row gap-10 md:gap-52'>
                    <div className='flex flex-col md:flex-row md:gap-5'>
                        <div>
                            <img
                                className='w-14'
                                src="https://cdn-icons-png.flaticon.com/128/2413/2413074.png"
                                alt="icon"
                            />
                        </div>
                        <div>
                            <animated.p className='text-5xl'>
                                {countSpring.number.to(n => n.toFixed(0))}
                            </animated.p>
                            <p className='text-gray-600 text-lg'>İşlem</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <div>
                            <img
                                className='w-14'
                                src="https://cdn-icons-png.flaticon.com/128/4490/4490362.png"
                                alt="icon"
                            />
                        </div>
                        <div>
                            <animated.p className='text-5xl'>
                                {teamSpring.number.to(n => n.toFixed(0))}
                            </animated.p>
                            <p className='text-gray-600 text-lg'>Profesyonel Ekip</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Success;
