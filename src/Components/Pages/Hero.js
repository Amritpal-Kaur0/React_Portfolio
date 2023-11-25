
import React from 'react';
import bg from '../../assets/homebg.jpg';
import heroimg from '../../assets/myavatar.png';
import resumePdf from '../../assets/My_Resume.pdf';
import Footer from '../footer' 

export default function Home() {
  return (
    <div id="home" className="hero-container overflow-hidden ">
      <div className="relative min-w-screen h-screen hero-bg">
        <img src={bg} alt="hero background" className="w-full h-full object-cover blur-[6px]" />

        <div className="absolute bg-white opacity-92 p-4 sm:p-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3/4 flex flex-col-reverse sm:flex-row justify-center items-center">
          <div className="p-2 box info-side text-center sm:text-left flex-grow sm:flex-grow-0 mt-4 sm:mt-0">
            <h1 className="text-3xl font-bold mb-4 drop-shadow-xl shadow-black">
              Hi, I am Amrit
            </h1>
            <h4 className="text-slate-500 font-bold">-Full-Stack Web Developer</h4>
            <p className=" font-serif font-bold">
              "Ambitious full stack web developer with a passion for crafting
              exceptional digital experiences."
            </p>
           
            <br />
           <div className='pb-16'>
            <a href={resumePdf} target="blank" download> 
            <button className="btn p-2 px-4 bg-yellow-500 rounded-xl text-white shadow-3xl">
              Download CV &#8681; 
            </button>
            </a>
            </div>
          </div>
          <div className="hero-img mt-4 sm:mt-0 sm:ml-4 flex-grow-0 flex items-center justify-center sm:justify-end">
            <img
              className="hero-avatar max-w-full max-h-full"
          img src={heroimg}
              alt="my avatar"
            />
          </div>
        </div>
      </div>
     <Footer/>
    </div>
  );
}
