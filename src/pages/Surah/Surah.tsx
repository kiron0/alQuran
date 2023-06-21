import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { alQuran } from '../../data/alQuran'
import useScrollToTop from '../../hooks/useScrollToTop';
import ScrollButton from '../../shared/ScrollButton/ScrollButton';

export default function Surah() {
          useScrollToTop();
          const { surah } = useParams();
          const surahNumber = parseInt(surah as string);
          const navigate = useNavigate();

          return (
                    <div className='pb-28 md:pb-10'>
                              <h1 className='text-center py-10 text-xl md:text-2xl font-bold px-3 md:w-3/4 mx-auto'>
                                        {
                                                  alQuran.map(surah => {
                                                            return (
                                                                      surah.surahNo === surahNumber && (
                                                                                <>
                                                                                          <span key={surah.surahNo} className='font-SutonnyMJ text-2xl md:text-3xl'>{surah.surahNo}</span>. {surah.surahName} ({surah.surahArName})
                                                                                </>
                                                                      )
                                                            )
                                                  })
                                        }
                              </h1>
                              <div className='flex justify-center items-center gap-5'>
                                        <button onClick={() => navigate(-1)} className='glass py-2 px-4 flex items-center rounded-xl text-black mb-8 gap-1'><i className='bx bx-arrow-back text-xl'></i>Go Back</button>
                                        <button onClick={() => navigate("/")} className='glass py-2 px-4 hidden md:flex items-center rounded-xl text-black mb-8 gap-1'><i className='bx bx-home-heart text-xl'></i>Go Home</button>
                              </div>
                              {
                                        alQuran.map((surah, index) => {
                                                  return (
                                                            surah.surahNo === surahNumber && (
                                                                      <div className='grid grid-cols-1 gap-5 px-3 md:px-0 w-full md:w-2/3 lg:w-1/2 mx-auto mt-5' key={index}>
                                                                                {
                                                                                          surah.verses.length > 0 ? (
                                                                                                    surah.verses.map((book, index) => {
                                                                                                              return (
                                                                                                                        <div className='glass duration-500 px-5 py-5 rounded-xl select-none cursor-not-allowed' key={index}>
                                                                                                                                  <h1 className='text-lg font-bold text-center absolute top-0 right-2'><span className='font-SutonnyMJ text-xl'>{book.verseKey}</span></h1>
                                                                                                                                  <h1 className='text-lg font-bold text-center mt-3'>{book?.arText}</h1>
                                                                                                                                  {book.readText && <h1 className='text-md text-center'><span className='font-semibold'>বাংলা উচ্চারণঃ </span>{book.readText}</h1>}
                                                                                                                                  {book.bnText && <h1 className='text-md text-center'><span className='font-semibold'>বাংলা অনুবাদঃ </span>{book.bnText}</h1>}
                                                                                                                        </div>
                                                                                                              )
                                                                                                    })
                                                                                          ) : (
                                                                                                    <div className='glass duration-500 md:bg-gray-200 px-5 py-10 rounded-xl'>
                                                                                                              <h1 className='text-lg font-bold text-center font-SutonnyMJ'>আয়াত পাওয়া যায়নি</h1>
                                                                                                    </div>
                                                                                          )
                                                                                }
                                                                      </div>
                                                            )
                                                  )
                                        })
                              }
                              <ScrollButton />
                    </div>
          )
}
