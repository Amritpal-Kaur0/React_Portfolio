// import React from 'react';
// import bg from '../../assets/bg.jpg'
// import Footer from './footer'


// export default function About() {
//   return (
//     <div id="About" className='relative'>
//       <img src={bg} alt="background" className='w-full h-screen blur-[4px]' />
//       <div className=' box absolute top-40 left-20 right-20 bottom-32 bg-white opacity-80 flex items-center justify-center h-2/4'>
//         <div className='p-4 m-6'>
//           <h2 className="text-3xl  flex  justify-center font-bold mb-10">About Me</h2>
//           <p className= "about-para  text-wrap text-slate-950 font-serif">
//           I am a passionate and dedicated full stack web developer, constantly
//         seeking new challenges and opportunities to enhance my skills. With a
//         solid foundation in both front-end and back-end technologies, I strive
//         to create innovative and user-friendly web experiences.
//           </p>
//           <br />
//           <p className="about-para text-wrap text-slate-950 font-serif">
//           What sets me apart is my ability to seamlessly integrate the front-end
//         and back-end components, creating seamless and efficient web
//         applications. I am experienced in RESTful API development and understand
//         the importance of clean and scalable code architecture.
//           </p>
//         </div>
//       </div>
//       <Footer/>
//     </div>
     
   
//   );
// }


import React from 'react';
import bg from '../../assets/bg.jpg';
import Footer from './footer';

export default function About() {
  return (
    <div id="About " className="relative ">
      <img src={bg} alt="background" className="w-full h-screen blur-[4px]" />
      <div className=" box  absolute top-10 xs:top-45 left-10 right-10 bottom-26 sm:bottom-26 bg-white  flex items-center justify-center">
        {/* Remove "h-2/4" to allow the parent div to adjust its height */}
        <div className="p-4 m-6">
          <h2 className="text-3xl flex justify-center font-bold mb-10">About Me</h2>
          <p className="about-para text-wrap text-slate-950 font-serif ">
            I am a passionate and dedicated full stack web developer, constantly seeking new challenges and opportunities to enhance my skills. With a solid foundation in both front-end and back-end technologies, I strive to create innovative and user-friendly web experiences.
          </p>
          <br />
          <p className="about-para text-wrap text-slate-950 font-serif mb-20">
            What sets me apart is my ability to seamlessly integrate the front-end and back-end components, creating seamless and efficient web applications. I am experienced in RESTful API development and understand the importance of clean and scalable code architecture.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
