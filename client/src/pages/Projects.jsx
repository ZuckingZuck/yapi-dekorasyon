import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Projects = () => {
    const categories = useSelector((state) => state.categories.categories)
    const [projects, setProjects] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    // const fetchCategories = async () => {
    //     try {
    //         const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/client/categorie`);
    //         if (response.status === 200) {
    //             setCategories(response.data);
    //         }
    //     } catch (error) {
    //         console.error('Kategorileri alırken hata oluştu:', error);
    //     }
    // };

    const fetchProjects = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/client/project`);
            if (response.status === 200) {
                setProjects(response.data);
            }
        } catch (error) {
            console.error('Projeleri alırken hata oluştu:', error);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage('');
    };

    return (
                <section className="relative bg-gradient-to-br from-cyan-900 via-cyan-700 to-cyan-400 min-h-[60vh] overflow-hidden">
                    {/* Banner */}
                    <div className="relative w-full h-72 md:h-96 flex items-center justify-center overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('https://favoriyapi.com.tr/wp-content/uploads/2022/02/Favori-blog-gorsel-3.jpg')", backgroundAttachment: 'fixed' }}
                        />
                        <div className="absolute inset-0 bg-cyan-950/60 backdrop-blur-[2px]" />
                        <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold text-yellow-300 drop-shadow-2xl px-8 py-4 rounded-2xl text-center shadow-xl">
                            Hizmetlerimiz
                        </h1>
                    </div>
                    {/* Kategoriler ve Projeler */}
                    <div className="container mx-auto py-16 px-6 lg:px-32 flex flex-col gap-16">
                        {categories?.map((category) => (
                            <div id={category.name} key={category.id} className="mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 text-center mb-8 drop-shadow-lg">
                                    {category.name}
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {projects
                                        .filter((project) => project.categorie === category.name)
                                        .map((project) => (
                                            <div
                                                key={project.id}
                                                className="bg-white/20 border-4 border-white/30 rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fadeInUp"
                                            >
                                                <img
                                                    src={project.imgUrl}
                                                    alt={project.name}
                                                    className="w-full h-48 object-cover transition-transform duration-300 hover:opacity-90 cursor-pointer"
                                                    onClick={() => openModal(project.imgUrl)}
                                                    loading="lazy"
                                                />
                                            </div>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Modal */}
                    {modalOpen && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                            onClick={closeModal}
                        >
                            <img
                                src={selectedImage}
                                alt="Büyük Görsel"
                                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border-4 border-yellow-300"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    )}
                    {/* Dekoratif arka plan efektleri */}
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-yellow-300/10 to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-white/10 to-transparent pointer-events-none" />
                </section>
    );
};

export default Projects;
