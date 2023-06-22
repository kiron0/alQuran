import React from 'react'
import { NavLink } from 'react-router-dom'

export default function BottomNav() {
          return (
                    <div className="navbar glass px-12 md:hidden fixed bottom-0 left-0 right-0 z-50">
                              <div className="navbar-start">
                                        <span className='flex flex-col justify-center items-center'>
                                                  <NavLink to="/alQuran" className={({ isActive }) =>
                                                            isActive ? "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold glass bg-primary text-white duration-500" : "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold hover:bg-primary hover:text-white duration-500 text-black"
                                                  }><i className='bx bx-book-heart text-xl'></i></NavLink>
                                                  <small className='text-xs -mb-1 mt-1'>সূরা সমূহ</small>
                                        </span>
                              </div>
                              <div className="navbar-center">
                                        <span className='flex flex-col justify-center items-center'>
                                                  <NavLink to="/" className={({ isActive }) =>
                                                            isActive ? "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold glass bg-primary text-white duration-500" : "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold hover:bg-primary hover:text-white duration-500 text-black"
                                                  }><i className="bx bx-home-heart text-2xl"></i></NavLink>
                                                  <small className='text-xs -mb-1 mt-1'>হোম</small>
                                        </span>
                              </div>
                              <div className="navbar-end">
                                        <span className='flex flex-col justify-center items-center'>
                                                  <NavLink to="/dev" className={({ isActive }) =>
                                                            isActive ? "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold glass bg-primary text-white duration-500" : "py-2 px-3 rounded-tl-3xl rounded-br-3xl font-semibold hover:bg-primary hover:text-white duration-500 text-black"
                                                  }><i className='bx bx-code text-2xl'></i></NavLink>
                                                  <small className='text-xs -mb-1 mt-1'>ডেভেলপার</small>
                                        </span>
                              </div>
                    </div>
          )
}
