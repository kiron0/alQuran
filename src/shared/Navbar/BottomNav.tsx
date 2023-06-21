import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BottomNav() {
          return (
                    <div className="navbar w-[93%] mx-auto glass px-12 rounded-2xl md:hidden fixed bottom-4 left-0 right-0 z-50">
                              <div className="navbar-start">
                                        <NavLink to="/alQuran" className={({ isActive }) =>
                                                  isActive ? "py-2 px-3 rounded-full font-semibold glass bg-primary text-white duration-500" : "py-2 px-3 rounded-full font-semibold glass hover:bg-primary hover:text-white duration-500 text-black"
                                        }><i className='bx bx-book-heart text-xl'></i></NavLink>
                              </div>
                              <div className="navbar-center -mt-12">
                                        <NavLink to="/" className={({ isActive }) =>
                                                  isActive ? "py-3 px-4 rounded-full font-semibold glass bg-primary text-white duration-500" : "py-3 px-4 rounded-full font-semibold glass hover:bg-primary hover:text-white duration-500 text-black"
                                        }><i className="bx bx-home-heart text-2xl"></i></NavLink>
                              </div>
                              <div className="navbar-end">
                                        <NavLink to="/dev" className={({ isActive }) =>
                                                  isActive ? "py-2 px-3 rounded-full font-semibold glass bg-primary text-white duration-500" : "py-2 px-3 rounded-full font-semibold glass hover:bg-primary hover:text-white duration-500 text-black"
                                        }><i className='bx bx-code text-2xl'></i></NavLink>
                              </div>
                    </div>
          )
}
