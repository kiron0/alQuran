import React from 'react'
import { Link } from 'react-router-dom';
import bannerImg from "../../assets/logo.png";

const Fade = require("react-reveal/Fade");

export default function Home() {
  return (
    <section className="bg-base-100 body-font md:py-16 pb-28 md:pb-0">
      <div className="hero bg-base-100">
        <div className="hero-content flex-col justify-between lg:flex-row-reverse">
          <Fade right distance="20px">
            <div className="w-full md:w-2/3 lg:w-1/3 rounded overflow-hidden lg:ml-6">
              <div className="outline-none h-full">
                <img
                  src={bannerImg}
                  className=" md:rounded-lg h-full w-full"
                  alt=""
                />
              </div>
            </div>
          </Fade>
          <Fade left distance="30px">
            <div className="lg:w-1/2 pt-11 lg:pt-0 leading-loose">
              <span className="text-lg">
                <strong className="text-primary">
                  Al Quran - আল কোরআন
                </strong>.
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight">
                আসসালামু আলাইকুম,
              </h1>
              <p className="py-4 text-lg">
                আমাদের এই অ্যাপ এ আপনাকে স্বাগতম। এই অ্যাপ এ আপনি আল-কোরআন এর সকল সূরা এবং তাফসীর পাবেন। আপনি চাইলে আপনার পছন্দের সূরা এবং তাফসীর পড়তে পারেন নিচের বাটন এ ক্লিক করে।
              </p>
              <div className='flex justify-center md:justify-start items-center mt-3'>
                <Link to="/alQuran" className="glass py-2 px-8 text-black rounded-xl hover:bg-primary hover:text-white duration-500">
                  সূরা সমূহ
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}
