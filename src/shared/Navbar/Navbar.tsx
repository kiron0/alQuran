import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { RiMenu4Fill } from 'react-icons/ri'

export default function Navbar() {
          const NavMenus = (
                    <>
                              <li className='lg:mr-6 py-2 lg:py-0'>
                                        <NavLink to="/alQuran" className={({ isActive }) =>
                                                  isActive ? "text-white glass py-3 px-8 rounded-md font-semibold flex justify-center items-center" : "py-4 px-8 rounded-xl glass font-semibold hover:bg-primary hover:text-white duration-500 text-black flex justify-center items-center"
                                        }>সূরা সমূহ</NavLink>
                              </li>
                              <li className='md:hidden py-2 lg:py-0'>
                                        <NavLink to="/dev" className={({ isActive }) =>
                                                  isActive ? "text-white glass py-3 px-8 rounded-md font-semibold flex justify-center items-center uppercase" : "uppercase py-4 px-8 rounded-xl glass font-semibold hover:bg-primary hover:text-white duration-500 text-black flex justify-center items-center"
                                        }>Developer</NavLink>
                              </li>
                    </>
          )

          return (
                    <div className="navbar glass hidden md:flex sticky top-0 z-50 md:px-16 lg:px-32">
                              <div className="navbar-start">
                                        <div className="dropdown">
                                                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                                            <RiMenu4Fill className="text-3xl" />
                                                  </label>
                                                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-4 p-2 shadow bg-base-100 rounded-box w-72">
                                                            {NavMenus}
                                                  </ul>
                                        </div>
                                        <Link to="/" className="normal-case font-semibold text-xl flex justify-center items-center gap-2"> <img src={Logo} alt="" className='w-8 md:w-10' /> Al Quran</Link>
                              </div>
                              <div className="navbar-center hidden lg:flex">
                                        <ul className="menu menu-horizontal px-1">
                                                  {NavMenus}
                                        </ul>
                              </div>
                              <div className="navbar-end hidden md:flex">
                                        <Link to="/dev" className="py-3 px-6 rounded-xl font-semibold glass hover:bg-primary hover:text-white duration-500 text-black uppercase">Developer</Link>
                              </div>
                    </div>
          )
}
