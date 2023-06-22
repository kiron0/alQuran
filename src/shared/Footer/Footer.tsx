import React from 'react'

export default function Footer() {
          return (
                    <div className="w-full mx-auto text-center bg-transparent mt-8 md:mt-0">
                              <div className='flex flex-col justify-center items-center py-6'>
                                        <small className='font-semibold'>কপিরাইট &copy; <span className='text-[16px] font-SutonnyMJ'>{new Date().getFullYear()}</span> - সকল অধিকার সংরক্ষিত।</small>
                                        <small>সাইটটি বানিয়েছেনঃ <a href="https://kiron.dev" target="_blank" rel="noopener noreferrer"><span className='text-primary hover:text-black duration-300'>তৌফিক হাসান কিরণ</span></a></small>
                              </div>
                    </div>
          )
}
