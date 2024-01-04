import React from 'react'

export default function footer() {
  return (
    <div className=''>
       <footer className='fixed bottom-0 left-0 right-0  p-6 bg-slate-500 text-center'>
         {/* social media icons  */}
         <div className="flex space-x-4 justify-center sm:justify-center">
              <a href="https://github.com/Amritpal-Kaur0">
                <i className=" p-4 uil uil-github "></i>
              </a>
              <a href="https://www.linkedin.com/in/amritpal-kaur-a3478a121/">
                <i className="uil uil-linkedin p-4"></i>
              </a>
              <a href="https://twitter.com/AmritGill3005">
                <i className="p-4 uil uil-twitter"></i>
              </a>
            </div>
      </footer>
    </div>
  )
}
