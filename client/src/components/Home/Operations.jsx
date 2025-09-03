
import React from 'react';

const operationsData = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/128/7889/7889802.png',
    title: 'Tasarım',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/128/3374/3374344.png',
    title: 'Dekorasyon',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/128/16456/16456353.png',
    title: 'Dış Cephe',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/128/2984/2984948.png',
    title: 'İç Mekan',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/128/16486/16486964.png',
    title: 'Tadilat',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/128/15551/15551373.png',
    title: 'Bakım',
  },
];

const Operations = () => {
  return (
    <section className="relative bg-gradient-to-br from-cyan-900 via-cyan-700 to-cyan-400 py-16 overflow-hidden">
      <div className="container mx-auto flex flex-col items-center justify-center px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-8 text-center">
          Uygulama <span className="text-yellow-300">Alanlarımız</span>
        </h2>
        <p className="tracking-wide text-lg opacity-90 text-cyan-100 text-center mb-12 max-w-2xl">
          Birbirinden farklı, kaliteli ve konforlu uygulamalar ile yaşam alanlarınızı güzelleştiriyoruz.
        </p>
        <div className="flex flex-col md:flex-row items-center w-full gap-10 md:gap-20 mb-20">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-md rounded-3xl shadow-2xl border-4 border-white/30 object-cover animate-zoomIn"
              src="./tadilat.jpg"
              alt="Uygulama görseli"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {operationsData.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/20 rounded-2xl shadow-xl p-6 flex flex-col justify-center items-center gap-3 border-2 border-white/30 hover:scale-105 transition-transform duration-300 animate-fadeInUp"
              >
                <img className="w-14 h-14 mb-2 filter invert brightness-200" src={item.icon} alt={item.title} loading="lazy" />
                <h3 className="text-lg font-bold text-yellow-300">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Dekoratif arka plan efektleri */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-yellow-300/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-white/10 to-transparent pointer-events-none" />
    </section>
  );
};

export default Operations;
