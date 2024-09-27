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
            <h1 className='text-4xl text-gray-600'>Neler Yapıyoruz</h1>
        </div>
        <div className='grid grid-cols-2 px-60 gap-5 text-gray-600'>
            <div
              ref={ref1}
              className={`flex gap-5 transition-opacity duration-1000 ${inView1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
                <img className='w-48' src="./calisma1.jpg" alt="img" />
                <div>
                    <h1 className='text-2xl tracking-widest'>Konut Çalışmaları</h1>
                    <p className='mt-3'>Evinizi baştan yaratalım. size huzurla geçireceğiniz zamanlar teslim edelim.</p>
                </div>
            </div>
            <div
              ref={ref2}
              className={`flex gap-5 transition-opacity duration-1000 ${inView2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
                <img className='w-48' src="./calisma2.jpg" alt="img" />
                <div>
                    <h1 className='text-2xl tracking-widest'>Kurumsal Çalışmalar</h1>
                    <p className='mt-3'>Hangi sektörde hizmet veriyor olursanız olun, profosyenel ve dinamik ekibimizle tüm tadilat ve bakım işleriniz bize emanet. Tasarımlarımıza güvenin.</p>
                </div>
            </div>
            <div
              ref={ref3}
              className={`flex gap-5 transition-opacity duration-1000 ${inView3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
                <img className='w-48' src="./calisma3.jpg" alt="img" />
                <div>
                    <h1 className='text-2xl tracking-widest'>Ofis Çalışmaları</h1>
                    <p className='mt-3'>Mevcut ofisinizde ki bakım, tadilat ve güncelleme hizmetlerimizle size yaha ferah çalışabileceğiniz alanlar tasarlıyoruz.</p>
                </div>
            </div>
            <div
              ref={ref4}
              className={`flex gap-5 transition-opacity duration-1000 ${inView4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
                <img className='w-48' src="./calisma4.jpg" alt="img" />
                <div>
                    <h1 className='text-2xl tracking-widest'>Mobilya Uygulamalar</h1>
                    <p className='mt-3'>Bahçe düzenlemesinden elektirik işlerinize kadar, Mobilya değişiminizden, çatı bakımlarınıza kadar tüm tadilat alanlarında hizmet vermekteyiz.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default WhatWeDo;
