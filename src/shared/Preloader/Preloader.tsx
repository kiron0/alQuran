import React from 'react'
import Logo from "../../assets/quran.gif";

export default function Preloader() {
          return (
                    <div className='flex flex-col justify-center items-center h-screen'>
                              <img src={Logo} alt="logo" className="w-28 h-28" />
                    </div>
          )
}
