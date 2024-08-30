import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className='bg-gray-900 text-gray-400'>
      <div className='container px-60 py-10 mx-auto'>
        <h1 className='text-2xl mb-4'>Hizmetlerimiz</h1>
        <hr />
        <ul className='grid grid-cols-4 gap-3 mt-4'>
          <li><FontAwesomeIcon icon={faArrowRight}/> Alçı - Alçıpan</li>
          <li><FontAwesomeIcon icon={faArrowRight}/> Amerikan Kapı</li>
          <li><FontAwesomeIcon icon={faArrowRight}/> Aspen Asma Tavan</li>
          <li><FontAwesomeIcon icon={faArrowRight}/> Taşyünü Asma Tavan</li>
          <li><FontAwesomeIcon icon={faArrowRight}/> Asma Tavan</li>
          <li><FontAwesomeIcon icon={faArrowRight}/> Duvar Kağıdı</li>
          <li><FontAwesomeIcon icon={faArrowRight}/> Boya Badana</li>
          <li><FontAwesomeIcon icon={faArrowRight}/> Dekoratif Boya</li>
          <li><FontAwesomeIcon icon={faArrowRight}/> Dekorasyon</li>
          <li><FontAwesomeIcon icon={faArrowRight}/> Doğal Taş</li>
          <li><FontAwesomeIcon icon={faArrowRight}/> Granit Uyhulamaları</li>
          <li><FontAwesomeIcon icon={faArrowRight}/> Isı Yalıtım</li>
          <li><FontAwesomeIcon icon={faArrowRight}/> Laminant Parke</li>
          <li><FontAwesomeIcon icon={faArrowRight}/> Mantolama</li>
          <li><FontAwesomeIcon icon={faArrowRight}/> Metal Asma Tavan</li>
          <li><FontAwesomeIcon icon={faArrowRight}/> Süs Havuzu</li>
          <li><FontAwesomeIcon icon={faArrowRight}/> Seramik Uygulamaları</li>
        </ul>
      </div>
      <hr />
      <div className='container mx-auto px-60 py-5 text-lg'>
        <p>Yapı Dekorasyon Tüm Hakları Saklıdır. <a className='underline text-white' href="https://www.ipssolidarity.com/">IPSS</a> tarafından geliştirildi.</p>
      </div>
    </div>
  )
}

export default Footer