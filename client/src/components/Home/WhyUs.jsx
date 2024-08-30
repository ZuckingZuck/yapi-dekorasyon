import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const WhyUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    refs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      refs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};


  return (
    <div className='container mx-auto mt-10 pt-10 flex flex-col justify-center items-center mb-28 border-t-2'>
        <div>
            <div className='text-center mb-7 text-blue-700 '>
                <h1 className='text-4xl'>Neden Bizi Seçmelisiniz</h1>
            </div>
            <div className={`flex px-60 justify-center gap-24 ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={el => refs.current[0] = el}>
                <div className='flex justify-center'>
                    <div className='w-full mr-5'>
                        <img src="https://www.yapidekorasyon.com.tr/wp-content/uploads/2015/11/home_renovate2_pic2.png" alt="img" />
                    </div>
                    <div className='flex flex-col gap-5 text-lg text-gray-700 text-pretty'>
                        <p>Yapı Dekorasyon evde, iş yerinde ve tadilata ihtiyaç duyulan heryerde sorunlara çözüm ortağı olmak amacıyla bilgimizi güncel tutuyoruz.</p>
                        <p>Avantajımız tek bir muhattap ile evinizdeki tüm tadilat işlerinize kaliteli ve ekonomik çözüm sunmamızdır. Yapmanız gereken bize ulaşıp hizmetlerimizden faydalanmak. Ücretsiz keşif için firmamızla irtiba geçebilirsiniz.</p>
                    </div>
                </div>
                <div className={`${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={el => refs.current[1] = el}>
                    <h2 className='text-3xl tracking-wider text-blue-600'>İletişim Bilgileri</h2>
                    <p className='text-gray-700 text-sm'>Hayallerinizi Ertelemeyin.</p>
                    <div className='mb-8 mt-5 text-blue-800 text-lg'>
                        <p><FontAwesomeIcon icon={faSlack}/> +90 533 456 25 52</p>
                        <p><FontAwesomeIcon icon={faSlack}/> info@yapidekorasyon.com.tr</p>
                    </div>
                    <NavLink onClick={scrollToTop} to="/iletisim" className="bg-blue-900 text-white py-2 px-5 hover:scale-110 duration-200 rounded"><FontAwesomeIcon icon={faEnvelope}/> Mesaj Bırakın</NavLink>
                </div>
            </div>
        </div>
        <div className={`mt-20 grid grid-cols-3 gap-10 px-60 items-center justify-center ${isVisible ? 'fade-in visible' : 'fade-in'}`} ref={el => refs.current[2] = el}>
            <div className='flex gap-5'>
                <div className='w-full'><img className="w-28" src="https://cdn-icons-png.flaticon.com/128/6543/6543820.png" alt="icon" /></div>
                <div>
                    <h1 className='text-xl text-blue-800'>Profesyonel Ekip</h1>
                    <p className='tracking-wider text-gray-700'>Büyük tecrübe ve birikime sahip Profesyonel kadro ile hizmet veriyoruz.</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='w-full'><img className="w-28" src="https://cdn-icons-png.flaticon.com/128/4157/4157036.png" alt="icon" /></div>
                <div>
                    <h1 className='text-xl text-blue-800'>Sertifikalı Ürünler</h1>
                    <p className='tracking-wider text-gray-700'>Alanında Markasını Kanıtlamış Kaliteli Ürünlerle Hizmet Veriyoruz.</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='w-full'><img className="w-28" src="https://cdn-icons-png.flaticon.com/128/17400/17400543.png" alt="icon" /></div>
                <div>
                    <h1 className='text-xl text-blue-800'>Avantajlı Fiyat</h1>
                    <p className='tracking-wider text-gray-700'>Sektördeki rekabeti takip ederek size Kaliteli Hizmeti Uygun Fiyata Sunuyoruz.</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='w-full'><img className="w-28" src="https://cdn-icons-png.flaticon.com/128/5290/5290058.png    " alt="icon" /></div>
                <div>
                    <h1 className='text-xl text-blue-800'>Garantili Teslimat</h1>
                    <p className='tracking-wider text-gray-700'>Tüm İşlerimizi profesyonel ekibimizle Garantili bir şekilde teslim ediyoruz.</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='w-full'><img className="w-28" src="https://cdn-icons-png.flaticon.com/128/10936/10936451.png" alt="icon" /></div>
                <div>
                    <h1 className='text-xl text-blue-800'>20 Yıllık Tecrübe</h1>
                    <p className='tracking-wider text-gray-700'>Profesyonel Ekibimizle, Tadilat ve Dekorasyon sektöründe 20 Yıldır Biz Varız!</p>
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='w-full'><img className="w-28" src="https://cdn-icons-png.flaticon.com/128/8898/8898827.png" alt="icon" /></div>
                <div>
                    <h1 className='text-xl text-blue-800'>Destek & Yardım</h1>
                    <p className='tracking-wider text-gray-700'>Herhangi bir sorununuz da sizinle İlgilenecek yetkilimiz her daim vardır.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default WhyUs;
