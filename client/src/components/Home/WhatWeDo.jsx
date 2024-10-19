import React from 'react';
import { useInView } from 'react-intersection-observer';

const WhatWeDo = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className='container mx-auto mt-10 flex flex-col justify-center items-center'>
        <div className='mb-10'>
            <h1 className='text-4xl text-gray-600 text-center'>Neler Yapıyoruz</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 px-6 md:px-60 gap-5 text-gray-600'>
            <div
              ref={ref1}
              className={`flex flex-col md:flex-row gap-5 transition-opacity duration-1000 ${inView1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
                <img className='w-full md:w-48' src="./calisma1.jpg" alt="img" />
                <div>
                    <h1 className='text-2xl tracking-widest'>Konut Çalışmaları</h1>
                    <p className='mt-3'>Evinizi baştan yaratalım. size huzurla geçireceğiniz zamanlar teslim edelim.</p>
                </div>
            </div>
            <div
              ref={ref2}
              className={`flex flex-col md:flex-row gap-5 transition-opacity duration-1000 ${inView2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
                <img className='w-full md:w-48' src="./calisma2.jpg" alt="img" />
                <div>
                    <h1 className='text-2xl tracking-widest'>Kurumsal Çalışmalar</h1>
                    <p className='mt-3'>Hangi sektörde hizmet veriyor olursanız olun, profesyonel ve dinamik ekibimizle tüm tadilat ve bakım işleriniz bize emanet. Tasarımlarımıza güvenin.</p>
                </div>
            </div>
            <div
              ref={ref3}
              className={`flex flex-col md:flex-row gap-5 transition-opacity duration-1000 ${inView3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
                <img className='w-full md:w-48' src="./calisma3.jpg" alt="img" />
                <div>
                    <h1 className='text-2xl tracking-widest'>Ofis Çalışmaları</h1>
                    <p className='mt-3'>Mevcut ofisinizdeki bakım, tadilat ve güncelleme hizmetlerimizle size daha ferah çalışabileceğiniz alanlar tasarlıyoruz.</p>
                </div>
            </div>
            <div
              ref={ref4}
              className={`flex flex-col md:flex-row gap-5 transition-opacity duration-1000 ${inView4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
                <img className='w-full md:w-48' src="./calisma4.jpg" alt="img" />
                <div>
                    <h1 className='text-2xl tracking-widest'>Mobilya Uygulamalar</h1>
                    <p className='mt-3'>Bahçe düzenlemesinden elektrik işlerinize kadar, mobilya değişiminizden çatı bakımlarınıza kadar tüm tadilat alanlarında hizmet vermekteyiz.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default WhatWeDo;
