import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
    const [categories, setCategories] = useState([]);
    const [projects, setProjects] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/client/categorie`);
            if (response.status === 200) {
                setCategories(response.data);
            }
        } catch (error) {
            console.error('Kategorileri alırken hata oluştu:', error);
        }
    };

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
        fetchCategories();
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
        <div>
            <div
                className="relative w-full h-72 bg-cover bg-center text-white flex items-center justify-center"
                style={{ backgroundImage: "url('https://favoriyapi.com.tr/wp-content/uploads/2022/02/Favori-blog-gorsel-3.jpg')", backgroundAttachment: 'fixed' }}
            >
                <h1 className="text-4xl tracking-widest font-bold drop-shadow-lg">Projelerimiz</h1>
            </div>
            <div className="container mx-auto p-8 lg:px-60 text-gray-700 my-16">
                {categories.map((category) => (
                    <div key={category.id} className="mb-12">
                        <h2 className="text-2xl text-center font-semibold mb-6">{category.name}</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {projects
                                .filter((project) => project.categorie === category.name)
                                .map((project) => (
                                    <div
                                        key={project.id}
                                        className="shadow-lg border-2 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                                    >
                                        <img
                                            src={project.imgUrl}
                                            alt={project.name}
                                            className="w-full h-48 object-cover transition-transform duration-300 hover:opacity-90 cursor-pointer"
                                            onClick={() => openModal(project.imgUrl)}
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
            {modalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
                    onClick={closeModal}
                >
                    <img
                        src={selectedImage}
                        alt="Büyük Görsel"
                        className="max-w-full max-h-full object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};

export default Projects;
