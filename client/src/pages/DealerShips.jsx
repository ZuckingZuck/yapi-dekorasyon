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
        <div>
            <div
                className="relative w-full h-96 bg-cover bg-center text-white flex items-center justify-center"
                style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2015/12/07/10/58/architect-1080592_1280.jpg')", backgroundAttachment: 'fixed' }}
            >
                <h1 className="text-4xl tracking-widest font-bold drop-shadow-lg">Bayiliklerimiz</h1>
            </div>
            <div className="container mx-auto p-8 lg:px-60 text-gray-700 my-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {dealerShips.map((item) => (
                        <div
                            key={item.id}
                            className="shadow-lg border-2 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <img
                                src={item.imgUrl}
                                alt={item.name}
                                className="w-full h-48 object-contain transition-transform duration-300 hover:opacity-90"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DealerShips;
