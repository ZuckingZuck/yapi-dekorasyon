import React from 'react';
import { useInView } from 'react-intersection-observer';

const Operations = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className='mt-20 bg-[#f1f1f1]'>
      <div className='container mx-auto px-60 flex flex-col items-center'>
        <div className='mb-16 mt-16'>
          <p className='tracking-wide text-lg opacity-75 text-blue-800'>
            Birbirinden farklı, kaliteli ve konforlu uygulamalar burada
          </p>
        </div>
        <div className='flex items-center w-full gap-20 mb-20'>
          <div>
            <img
              className={`w-[500px] transition-transform duration-1000 ${inView1 ? 'scale-100' : 'scale-90'}`}
              src="https://www.yapidekorasyon.com.tr/wp-content/uploads/2021/08/tadilat.jpg"
              alt="img"
              ref={ref1}
            />
          </div>
          <div className='grid grid-cols-3 gap-28'>
            <div
              className={`flex flex-col justify-center items-center transition-opacity duration-1000 ${inView2 ? 'opacity-100' : 'opacity-50'}`}
              ref={ref2}
            >
              <img className='w-12' src="https://cdn-icons-png.flaticon.com/128/7889/7889802.png" alt="design" />
              <h3 className='text-lg font-semibold'>Tasarım</h3>
            </div>
            <div
              className={`flex flex-col justify-center items-center transition-transform duration-1000 ${inView3 ? 'translate-x-0' : '-translate-x-10'}`}
              ref={ref3}
            >
              <img className='w-12' src="https://cdn-icons-png.flaticon.com/128/3374/3374344.png" alt="design" />
              <h3 className='text-lg font-semibold'>Dekorasyon</h3>
            </div>
            <div
              className={`flex flex-col justify-center items-center transition-transform duration-1000 ${inView4 ? 'translate-x-0' : 'translate-x-10'}`}
              ref={ref4}
            >
              <img className='w-12' src="https://cdn-icons-png.flaticon.com/128/16456/16456353.png" alt="design" />
              <h3 className='text-lg font-semibold'>Dış Cephe</h3>
            </div>
            <div
              className={`flex flex-col justify-center items-center transition-opacity duration-1000 ${inView5 ? 'opacity-100' : 'opacity-0'}`}
              ref={ref5}
            >
              <img className='w-12' src="https://cdn-icons-png.flaticon.com/128/2984/2984948.png" alt="design" />
              <h3 className='text-lg font-semibold'>İç Mekan</h3>
            </div>
            <div
              className={`flex flex-col justify-center items-center transition-transform duration-1000 ${inView6 ? 'scale-100' : 'scale-90'}`}
              ref={ref6}
            >
              <img className='w-12' src="https://cdn-icons-png.flaticon.com/128/16486/16486964.png" alt="design" />
              <h3 className='text-lg font-semibold'>Tadilat</h3>
            </div>
            <div
              className={`flex flex-col justify-center items-center transition-opacity duration-1000 ${inView6 ? 'opacity-100' : 'opacity-0'}`}
              ref={ref6}
            >
              <img className='w-12' src="https://cdn-icons-png.flaticon.com/128/15551/15551373.png" alt="design" />
              <h3 className='text-lg font-semibold'>Bakım</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Operations;
