import React, { useEffect, useState } from 'react';
import axios from 'axios';

const References = () => {
    const [references, setReferences] = useState([]);

    const fetchReferences = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/client/reference`);
            if (response.status === 200) {
                setReferences(response.data);
            }
        } catch (error) {
            console.error('Bayilikleri alırken hata oluştu:', error);
        }
    };

    useEffect(() => {
        fetchReferences();
    }, []);

    return (
        <div>
            <div
                className="relative w-full h-96 bg-cover bg-center text-white flex items-center justify-center"
                style={{ backgroundImage: "url('/reference.webp')", backgroundAttachment: 'fixed', backgroundPosition: 'center top' }}
            >
                <h1 className="text-4xl tracking-widest font-bold drop-shadow-lg">Referanslarımız</h1>
            </div>

            <div className="container mx-auto p-8 lg:px-60 text-gray-700 my-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {references.map((item) => (
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

export default References;
