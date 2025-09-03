import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DealerShips = () => {
    const [dealerShips, setDealerShips] = useState([]);

    const fetchDealerShips = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/client/dealership`);
            if (response.status === 200) {
                setDealerShips(response.data);
            }
        } catch (error) {
            console.error('Bayilikleri alırken hata oluştu:', error);
        }
    };

    useEffect(() => {
        fetchDealerShips();
    }, []);

    return (
                <section className="relative bg-gradient-to-br from-cyan-900 via-cyan-700 to-cyan-400 min-h-[60vh] overflow-hidden">
                    {/* Banner */}
                    <div className="relative w-full h-80 md:h-96 flex items-center justify-center overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2015/12/07/10/58/architect-1080592_1280.jpg')", backgroundAttachment: 'fixed' }}
                        />
                        <div className="absolute inset-0 bg-cyan-950/60 backdrop-blur-[2px]" />
                        <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold text-yellow-300 drop-shadow-2xl px-8 py-4 rounded-2xl text-center shadow-xl">
                            Bayiliklerimiz
                        </h1>
                    </div>
                    {/* İçerik */}
                    <div className="container mx-auto py-16 px-6 lg:px-32 flex flex-col gap-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                            {dealerShips.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white/20 border-4 border-white/30 rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fadeInUp flex flex-col items-center p-6"
                                >
                                    <img
                                        src={item.imgUrl}
                                        alt={item.name}
                                        className="w-full h-48 object-contain transition-transform duration-300 hover:opacity-90 mb-4"
                                        loading="lazy"
                                    />
                                    <h2 className="text-lg font-bold text-yellow-300 text-center mt-2">{item.name}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Dekoratif arka plan efektleri */}
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-yellow-300/10 to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-white/10 to-transparent pointer-events-none" />
                </section>
    );
};

export default DealerShips;
