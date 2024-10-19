import React, { useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/client/message`, {name, email, subject, message});
        if(response.status === 201){
            toast.success('Form başarıyla gönderildi!', {
                position: "top-center"
            });
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
        }
    };

    return (
        <div>
            <div></div>
            <div className="container mx-auto my-16 px-4 md:px-16 lg:px-32">
                <div className="flex flex-col md:flex-row gap-10 justify-between">
                    {/* Form Alanı */}
                    <div className="md:w-2/3">
                        <h2 className="text-4xl font-semibold mb-6 text-gray-800">Bizimle iletişime geçin</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                <input
                                    type="text"
                                    placeholder="Adınız"
                                    className="w-full md:w-1/2 p-4 border border-gray-300 rounded-md"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    type="email"
                                    placeholder="E-mail"
                                    className="w-full md:w-1/2 p-4 border border-gray-300 rounded-md"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Konu"
                                className="w-full p-4 border border-gray-300 rounded-md"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                            <textarea
                                placeholder="Mesajınız"
                                rows="4"
                                className="w-full p-4 border border-gray-300 rounded-md"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            <button type='submit' className="px-6 py-3 bg-cyan-800 text-white rounded-md hover:bg-gray-900 transition duration-300">
                                Gönder
                            </button>
                        </form>
                    </div>

                    {/* Adres Alanı */}
                    <div className="md:w-1/3 mt-10 md:mt-0">
                        <h2 className="text-4xl font-semibold mb-6 text-gray-800">Adres</h2>
                        <p className="text-gray-600 mb-4">
                            Villa Tadilatı, Ofis Tadilatı, Cafe Tadilatı, Restaurant Tadilatı, Banka Tadilatı, Daire Tadilatı, Pastane Tadilatı, Ev Tadilatı ve dahası.
                        </p>
                        <div className="flex items-center mb-4">
                            <div>
                                <p className="text-gray-800 font-semibold">RMODEL</p>
                                <p className="text-gray-600">
                                    Sanayi, Teknopark Blv No: 1 D:9A, 34906 Pendik/İstanbul
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-2">
                            İletişim: +90 539 276 7709
                        </p>
                        <p className="text-gray-600">
                            Mail: fix@ipssolidarity.com
                        </p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Contact;
