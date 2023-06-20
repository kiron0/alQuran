import React from 'react'
import { useNavigate } from 'react-router-dom'
import { alQuran } from '../../data/alQuran'
import useScrollToTop from '../../hooks/useScrollToTop';
import ScrollButton from '../../shared/ScrollButton/ScrollButton';

export default function AlQuran() {
  useScrollToTop();
  const navigate = useNavigate();

  return (
    <div className='pb-10'>
      <h1 className='text-center py-10 px-5 text-xl md:text-2xl font-bold md:px-0'>
        আল-কোরআনের সূরা সমূহের তালিকা ও বিস্তারিত তথ্য (<span className='font-SutonnyMJ text-2xl'>{alQuran.length}</span> টি সূরা)
      </h1>
      <button onClick={() => navigate("/")} className='glass py-2 px-4 rounded-xl flex justify-center items-center mx-auto text-black mb-8 gap-2'><i className='bx bx-home-heart text-xl'></i>Go Home</button>
      <div className='grid grid-cols-1 gap-5 px-3 md:px-0 w-full md:w-2/3 lg:w-1/2 mx-auto'>
        {
          alQuran.map((surah, index) => {
            return (
              <div className="join join-vertical w-full" key={index}>
                <div className="collapse collapse-arrow join-item border border-base-300 rounded-xl py-2">
                  <input type="radio" name="my-accordion-4" />
                  <div className="collapse-title">
                    <h1 className='text-lg font-bold capitalize flex items-center'>
                      <span className='font-SutonnyMJ text-xl mb-2 md:mb-0'>{surah.surahNo}</span>. {surah.surahName} ({surah.surahArName})
                    </h1>
                  </div>
                  <div className="collapse-content flex flex-col gap-1 select-none cursor-not-allowed">
                    <p className='text-md font-semibold'>আরবি নামঃ <span className='font-SutonnyMJ'>{surah.surahArName}</span></p>
                    <p className='text-md'><span className='font-semibold'>কোরআনে অবস্থানঃ </span><span className='font-SutonnyMJ text-xl'>{surah.surahNo}</span></p>
                    <p className='text-md'><span className='font-semibold'>বাংলায় নামের অর্থঃ </span>{surah.surahMeaning}</p>
                    <p className='text-md'><span className='font-semibold'>আয়াত সংখ্যাঃ </span><span className='font-SutonnyMJ text-xl'>{surah.totalVerses}</span></p>
                    <p className='text-md'><span className='font-semibold'>অবতীর্ণের স্থানঃ </span>{surah.revelationPlace}</p>
                    <div className='flex justify-center items-center mt-6'>
                      <button className='p-3 border glass' onClick={() => {
                        navigate(`/alQuran/${surah.surahNo}`)
                      }}>আয়াতসমূহ</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <ScrollButton />
    </div>
  )
}
