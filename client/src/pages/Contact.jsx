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
                <section className="relative bg-gradient-to-br from-cyan-900 via-cyan-700 to-cyan-400 min-h-[60vh] overflow-hidden">
                    {/* Banner */}
                    <div className="relative w-full h-72 md:h-80 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')", backgroundAttachment: 'fixed' }} />
                        <div className="absolute inset-0 bg-cyan-950/60 backdrop-blur-[2px]" />
                        <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold text-yellow-300 drop-shadow-2xl px-8 py-4 rounded-2xl text-center shadow-xl">İletişim</h1>
                    </div>
                    {/* İçerik */}
                    <div className="container mx-auto py-16 px-6 lg:px-32 flex flex-col md:flex-row gap-12">
                        {/* Form Alanı */}
                        <div className="md:w-2/3 bg-white/20 rounded-3xl shadow-2xl p-8 border-4 border-white/30 animate-fadeInUp">
                            <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-6">Bizimle iletişime geçin</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                    <input
                                        type="text"
                                        placeholder="Adınız"
                                        className="w-full md:w-1/2 p-4 border border-yellow-300 bg-white/80 text-cyan-900 rounded-md focus:ring-2 focus:ring-yellow-300 outline-none"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <input
                                        type="email"
                                        placeholder="E-mail"
                                        className="w-full md:w-1/2 p-4 border border-yellow-300 bg-white/80 text-cyan-900 rounded-md focus:ring-2 focus:ring-yellow-300 outline-none"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Konu"
                                    className="w-full p-4 border border-yellow-300 bg-white/80 text-cyan-900 rounded-md focus:ring-2 focus:ring-yellow-300 outline-none"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                                <textarea
                                    placeholder="Mesajınız"
                                    rows="4"
                                    className="w-full p-4 border border-yellow-300 bg-white/80 text-cyan-900 rounded-md focus:ring-2 focus:ring-yellow-300 outline-none"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                                <button type='submit' className="px-8 py-3 bg-yellow-400 text-cyan-900 font-bold rounded-full hover:bg-yellow-300 transition duration-300 shadow-lg">
                                    Gönder
                                </button>
                            </form>
                        </div>
                        {/* Adres Alanı */}
                        <div className="md:w-1/3 bg-white/20 rounded-3xl shadow-2xl p-8 border-4 border-white/30 animate-fadeInUp flex flex-col gap-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-4">Adres</h2>
                            <p className="text-white mb-4">
                                Villa Tadilatı, Ofis Tadilatı, Cafe Tadilatı, Restaurant Tadilatı, Banka Tadilatı, Daire Tadilatı, Pastane Tadilatı, Ev Tadilatı ve dahası.
                            </p>
                            <div className="flex items-center mb-4">
                                <div>
                                    <p className="text-white font-semibold">RMODEL</p>
                                    <p className="text-white">
                                        Sanayi, Teknopark Blv No: 1 D:9A, 34906 Pendik/İstanbul
                                    </p>
                                </div>
                            </div>
                            <p className="text-white mb-2">
                                İletişim: +90 539 276 7709
                            </p>
                            <p className="text-white">
                                Mail: fix@ipssolidarity.com
                            </p>
                        </div>
                    </div>
                    <ToastContainer />
                    {/* Dekoratif arka plan efektleri */}
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-yellow-300/10 to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-white/10 to-transparent pointer-events-none" />
                </section>
    );
}

export default Contact;
