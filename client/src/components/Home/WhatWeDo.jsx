
import React from 'react';

const whatWeDoData = [
  {
    img: './calisma1.jpg',
    title: 'Konut Çalışmaları',
    desc: 'Evinizi baştan yaratalım. Size huzurla geçireceğiniz zamanlar teslim edelim.'
  },
  {
    img: './calisma2.jpg',
    title: 'Kurumsal Çalışmalar',
    desc: 'Hangi sektörde olursanız olun, profesyonel ve dinamik ekibimizle tüm tadilat ve bakım işleriniz bize emanet. Tasarımlarımıza güvenin.'
  },
  {
    img: './calisma3.jpg',
    title: 'Ofis Çalışmaları',
    desc: 'Mevcut ofisinizdeki bakım, tadilat ve güncelleme hizmetlerimizle size daha ferah çalışabileceğiniz alanlar tasarlıyoruz.'
  },
  {
    img: './calisma4.jpg',
    title: 'Mobilya Uygulamalar',
    desc: 'Bahçe düzenlemesinden elektrik işlerinize, mobilya değişiminden çatı bakımlarınıza kadar tüm tadilat alanlarında hizmet vermekteyiz.'
  },
];

const WhatWeDo = () => {
  return (
    <section className="relative bg-gradient-to-br from-cyan-900 via-cyan-700 to-cyan-400 py-16 overflow-hidden">
      <div className="container mx-auto flex flex-col items-center justify-center px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-12 text-center">
          Neler <span className="text-yellow-300">Yapıyoruz</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {whatWeDoData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/20 rounded-3xl shadow-2xl p-6 flex flex-col md:flex-row items-center gap-6 border-4 border-white/30 hover:scale-105 transition-transform duration-300 animate-fadeInUp"
            >
              <img
                className="w-full md:w-40 h-40 object-cover rounded-2xl shadow-lg border-2 border-white/40"
                src={item.img}
                alt={item.title}
                loading="lazy"
              />
              <div className="flex-1 flex flex-col gap-2 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">{item.title}</h3>
                <p className="text-cyan-100 text-lg">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Dekoratif arka plan efektleri */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-yellow-300/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-white/10 to-transparent pointer-events-none" />
    </section>
  );
};

export default WhatWeDo;
