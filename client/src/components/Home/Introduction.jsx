import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlack } from "@fortawesome/free-brands-svg-icons";
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
const Introduction = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    return (
        <div className='container mx-auto flex justify-center items-center mt-16 gap-10'>
            <div id='intro' className='flex flex-col gap-3 w-1/6'>
                <h1 className='text-cyan-900 font-semibold text-lg tracking-widest'>Hayal edin gerçekleştirelim!</h1>
                <p className='text-gray-600 tracking-widest'>Güvenilir Profesyonel Ekip</p>
                <p className='text-gray-500'>RModel olarak sayısız projeye attığımız imza ile kazanmış olduğumuz tecrübeyi inşaat, projelendirme, tadilat ve dekorasyon alanında sizlere ihtiyacınızı karşılayacak çözümler sunmaktayız</p>
                <div className='text-cyan-800 text-lg '>
                    <ul>
                        <li><FontAwesomeIcon icon={faSlack}/>  PROJELENDİRME</li>
                        <li><FontAwesomeIcon icon={faSlack}/>  UYGULAMA</li>
                        <li><FontAwesomeIcon icon={faSlack}/>  SONUÇ - Mutlu Müşteriler</li>
                    </ul>
                </div>
                <NavLink onClick={scrollToTop} to="/projelerimiz" className="bg-cyan-900 opacity-85 hover:opacity-100 duration-200 px-3 py-2 rounded text-white flex items-center justify-between">Projelerimiz <FontAwesomeIcon icon={faLayerGroup} /></NavLink>
            </div>
            <div id='images' className='flex gap-6'>
                <img className='h-[450px] cursor-pointer hover:touch-pinch-zoom transition-transform duration-300 ease-in-out transform hover:scale-110 w-64 object-cover rounded-md shadow-lg' src="https://www.yapidekorasyon.com.tr/wp-content/uploads/2015/11/home_renovate2_work3.jpg" alt="img1" />
                <img className='h-[450px] cursor-pointer hover:touch-pinch-zoom transition-transform duration-300 ease-in-out transform hover:scale-110 w-64 object-cover rounded-md shadow-lg' src="https://www.yapidekorasyon.com.tr/wp-content/uploads/2015/11/home_renovate2_work5.jpg" alt="img2" />
                <img className='h-[450px] cursor-pointer hover:touch-pinch-zoom transition-transform duration-300 ease-in-out transform hover:scale-110 w-64 object-cover rounded-md shadow-lg' src="https://www.yapidekorasyon.com.tr/wp-content/uploads/2015/11/home_renovate2_work4.jpg" alt="img3" />
            </div>
        </div>
    )
}

export default Introduction