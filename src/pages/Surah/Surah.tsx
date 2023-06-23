import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { alQuran } from '../../data/alQuran'
import useScrollToTop from '../../hooks/useScrollToTop';
import ScrollButton from '../../shared/ScrollButton/ScrollButton';

export default function Surah() {
          useScrollToTop();
          const { surah } = useParams();
          const surahNumber = parseInt(surah as string);
          const navigate = useNavigate();

          const [isLoaded, setIsLoaded] = useState(false);
          const [isLoading, setIsLoading] = useState(true);

          const handleAudioLoaded = () => {
                    setIsLoaded(true);
                    setIsLoading(false);
          };

          const surahName = alQuran.filter(surah => surah.surahNo === surahNumber).map(surah => surah.surahName).toString();
          document.title = `${surahName} | Al Quran - আল কোরআন `;

          const [volume, setVolume] = useState<number>(30);
          let aud = document.getElementById("myAudio") as HTMLAudioElement;

          if (aud) {
                    aud.volume = volume / 100;
          }

          return (
                    <div className='pb-28 md:pb-10'>
                              <h1 className='text-center py-10 text-xl md:text-2xl font-bold px-3 md:w-3/4 mx-auto'>
                                        {
                                                  alQuran.map(surah => {
                                                            return (
                                                                      surah.surahNo === surahNumber && (
                                                                                <div key={surah.surahNo} className='flex flex-col'>
                                                                                          <p><span className='font-SutonnyMJ text-2xl md:text-3xl'>{surah.surahNo}</span>. {surah.surahName} ({surah.surahArName})</p>
                                                                                          <small>({surah.surahMeaning})</small>
                                                                                          <small>আয়াত সংখ্যাঃ <span className='font-SutonnyMJ text-lg md:text-2xl'>{surah.totalVerses}</span></small>
                                                                                </div>
                                                                      )
                                                            )
                                                  })
                                        }
                              </h1>
                              <div className='flex justify-center items-center gap-5'>
                                        <button onClick={() => navigate("/alQuran")} className='glass py-2 px-4 flex items-center rounded-xl text-black mb-8 gap-1'><i className='bx bx-arrow-back text-xl'></i>Go Back</button>
                                        <button onClick={() => navigate("/")} className='glass py-2 px-4 hidden md:flex items-center rounded-xl text-black mb-8 gap-1'><i className='bx bx-home-heart text-xl'></i>Go Home</button>
                              </div>
                              <div className='glass duration-500 py-3 mb-5 rounded-xl flex flex-col gap-5 justify-center items-center md:px-0 w-[93%] md:w-1/3 lg:w-1/5 mx-auto'>
                                        <select className="select w-full max-w-sm border-none focus:outline-none font-SutonnyMJ" onChange={(e) => navigate(`/alQuran/${e.target.value}`)}>
                                                  {
                                                            alQuran.map((surah, index) => {
                                                                      return (
                                                                                surah.surahNo === surahNumber && (
                                                                                          <option key={index} value={surah.surahNo} selected>{surah.surahNo}. {surah.surahName} ({surah.surahArName})</option>
                                                                                )
                                                                      )
                                                            }
                                                            )
                                                  }
                                                  {
                                                            alQuran.map((surah, index) => {
                                                                      return (
                                                                                <option key={index} value={surah.surahNo}>{surah.surahNo}. {surah.surahName} ({surah.surahArName})</option>
                                                                      )
                                                            }
                                                            )
                                                  }
                                        </select>
                              </div>
                              {
                                        alQuran.map((surah, index) => {
                                                  return (
                                                            <>
                                                                      <span>
                                                                                {
                                                                                          isLoaded && (
                                                                                                    surah.surahNo === surahNumber && surah.audio && (
                                                                                                              <div className='glass duration-500 py-5 rounded-xl flex flex-col gap-5 justify-center items-center md:px-0 w-[93%] md:w-2/3 lg:w-1/2 mx-auto'>
                                                                                                                        <audio id='myAudio' controls controlsList="nodownload noplaybackrate nofullscreen noremoteplayback" className='md:w-2/3 lg:w-1/2'>
                                                                                                                                  <source src={surah?.audio} type="audio/mpeg" />
                                                                                                                        </audio>
                                                                                                                        <div className='w-3/4 md:w-1/2 lg:w-1/3 flex flex-col items-center gap-2'>
                                                                                                                                  <input type="range" min={0} max={100} value={volume} onChange={
                                                                                                                                            (e) => {
                                                                                                                                                      setVolume(parseInt(e.target.value));
                                                                                                                                            }
                                                                                                                                  } className="range range-xs w-2/3" />
                                                                                                                                  <small className='text-center font-semibold'>
                                                                                                                                            Volume: {volume}%
                                                                                                                                  </small>
                                                                                                                        </div>
                                                                                                              </div>
                                                                                                    )
                                                                                          )
                                                                                }
                                                                                <audio onCanPlayThrough={handleAudioLoaded}
                                                                                          style={{ display: 'none' }} controls controlsList="nodownload noplaybackrate nofullscreen noremoteplayback" className=''>
                                                                                          <source src={surah?.audio} type="audio/mpeg" />
                                                                                </audio>
                                                                                {
                                                                                          surah.surahNo === surahNumber && (
                                                                                                    isLoading && (
                                                                                                              <div className='glass duration-500 px-5 py-5 rounded-xl flex flex-col gap-5 justify-center items-center md:px-0 w-[93%] md:w-2/3 lg:w-1/2 mx-auto'>
                                                                                                                        <span className="loading loading-infinity loading-lg"></span>
                                                                                                                        <h1 className='text-xl font-bold text-center'>Loading...</h1>
                                                                                                              </div>
                                                                                                    )
                                                                                          )
                                                                                }
                                                                      </span>
                                                                      {
                                                                                surah.surahNo === surahNumber && (
                                                                                          <div className='grid grid-cols-1 gap-5 px-3 md:px-0 w-full md:w-2/3 lg:w-1/2 mx-auto mt-5' key={index}>
                                                                                                    {
                                                                                                              surah.verses.length > 0 ? (
                                                                                                                        surah.verses.map((book, index) => {
                                                                                                                                  return (
                                                                                                                                            <div className='glass duration-500 px-5 py-5 rounded-xl select-none cursor-not-allowed' key={index}>
                                                                                                                                                      <h1 className='text-lg font-bold text-center absolute top-0 right-2'><span className='font-SutonnyMJ text-xl'>{book.verseKey}</span></h1>
                                                                                                                                                      <h1 className='text-lg font-bold text-center mt-3 mb-2'>{book?.arText}</h1>
                                                                                                                                                      {book.readText && <h1 className='text-md text-center mb-2'><span className='font-semibold'>বাংলা উচ্চারণঃ </span>{book.readText}</h1>}
                                                                                                                                                      {book.bnText && <h1 className='text-md text-center'><span className='font-semibold'>বাংলা অনুবাদঃ </span>{book.bnText}</h1>}
                                                                                                                                            </div>
                                                                                                                                  )
                                                                                                                        })
                                                                                                              ) : (
                                                                                                                        <div className='w-3/4 md:w-1/2 lg:w-1/3 mx-auto md:mt-10 glass duration-500 px-5 py-10 rounded-xl select-none cursor-not-allowed'>
                                                                                                                                  <h1 className='text-lg font-bold text-center font-SutonnyMJ'>আয়াত পাওয়া যায়নি</h1>
                                                                                                                        </div>
                                                                                                              )
                                                                                                    }
                                                                                          </div>
                                                                                )
                                                                      }
                                                            </>
                                                  )
                                        })
                              }
                              <ScrollButton />
                    </div>
          )
}
