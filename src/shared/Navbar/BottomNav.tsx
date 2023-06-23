import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BottomNav() {
          return (
                    <div className="navbar flex justify-between bg-white rounded-tl-[2.5rem] rounded-tr-[2.5rem] h-20 shadow-[0px_-2.05128px_20.2564px_rgba(0,0,0,.15)] px-3 md:hidden fixed bottom-0 left-0 right-0 z-50">
                              <NavLink to="/alQuran" className={({ isActive }) =>
                                        isActive ? "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold glass bg-primary shadow-[0px_-2.05128px_20.2564px_rgba(0,0,0,.15)] text-white duration-500" : "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold hover:bg-primary hover:text-white duration-500 text-black"
                              }><i className='bx bx-book-heart text-xl'></i></NavLink>

                              <NavLink to="/hadith" className={({ isActive }) =>
                                        isActive ? "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold glass bg-primary text-white duration-500" : "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold hover:bg-primary hover:text-white duration-500 text-black"
                              }><i className='bx bx-book text-xl'></i></NavLink>

                              <NavLink to="/" className={({ isActive }) =>
                                        isActive ? "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold glass bg-primary text-white duration-500" : "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold hover:bg-primary hover:text-white duration-500 text-black"
                              }><i className="bx bx-home-heart text-2xl"></i></NavLink>

                              <NavLink to="/dev" className={({ isActive }) =>
                                        isActive ? "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold glass bg-primary text-white duration-500" : "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold hover:bg-primary hover:text-white duration-500 text-black"
                              }><i className='bx bx-code text-2xl'></i></NavLink>

                              <NavLink to="/support" className={({ isActive }) =>
                                        isActive ? "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold glass bg-primary text-white duration-500" : "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold hover:bg-primary hover:text-white duration-500 text-black"
                              }><i className='bx bx-donate-heart text-2xl'></i></NavLink>
                    </div>
          )
}
