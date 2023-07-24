// import React from 'react';
// import {FaHome} from 'react-icons/fa';

// function NavTabs({ currentPage, handlePageChange }) {
//   return (
//      <div className=' navbar p-3 bg-slate-500 text-xl border-4 border-x-yellow-400 flex justify-around'>
//       <h1 className=' logo text-3xl italic  p-5 pt-4 text-amber-400'>Amrit</h1>
//     <ul className="nav nav-tabs flex text-amber-400 justify-end items-center">
//       <li className="nav-item m-4 flex  hover:pb-2 hover:text-amber-50"><FaHome className= ' hover:pb-2 hover:text-amber-500 h-6 w-6 mr-1' />
//         <a
//           href="#home"
//           onClick={() => handlePageChange('Home')}
          
//           className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
//         >
//           Home
//         </a>
//       </li>
//       <li className="nav-item hover:pb-2 hover:text-amber-500 m-4">
//         <a
//           href="#about"
//           onClick={() => handlePageChange('About')}
         
//           className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
//         >
//           About
//         </a>
//       </li>
//       <li className="nav-item  hover:pb-2 hover:text-amber-500">
//         <a
//           href="#portfolio"
//           onClick={() => handlePageChange('Portfolio')}
          
//           className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
//         >
//           Portfolio
//         </a>
//       </li>
//       <li className="nav-item  hover:pb-2 hover:text-amber-500 m-4">
//         <a
//           href="#Contact"
//           onClick={() => handlePageChange('Contact')}
         
//           className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//         >
//           Contact
//         </a>
//       </li>
//     </ul>
//     </div>
//   );
// }

// export default NavTabs;

import React from 'react';
import { FaHome } from 'react-icons/fa';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="navbar p-3 bg-slate-500 text-xl border-4 border-x-yellow-400 flex flex-col sm:flex-row justify-between items-center">
      <h1 className="logo text-3xl italic p-5 pt-4 text-amber-400">Amrit</h1>
      <ul className="nav nav-tabs flex text-amber-400 justify-end items-center">
        <li className="nav-item m-4 flex hover:pb-2 hover:text-amber-50">
          <FaHome className="hover:pb-2 hover:text-amber-500 h-6 w-6 mr-1" />
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>
        </li>
        <li className="nav-item hover:pb-2 hover:text-amber-500 m-4">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item hover:pb-2 hover:text-amber-500">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item hover:pb-2 hover:text-amber-500 m-4">
          <a
            href="#Contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
