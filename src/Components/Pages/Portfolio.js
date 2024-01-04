import React from 'react';
import Footer from '../footer'
import githubIcon from '../../assets/github-icon.png'; 

import project1Img from '../../assets/Rentix (1).png'
import projectImg from '../../assets/CloudConnect.png'
import project2Img from '../../assets/Eventfinder.png'
import project3Img from '../../assets/note-taker (1).png'
import project4Img from '../../assets/Tech-blog (1).png'
import project5Img from '../../assets/WorkSchedular (1).png'
import project6Img from '../../assets/Weatherapp (1).png'
import project7Img from '../../assets/Readme generator.png'
import project8Img from '../../assets/Social-media backend.png'
import project9Img from '../../assets/PWA text editor.png'
import project10Img from '../../assets/Pinterest.png'
import project11Img from '../../assets/Book Search.gif'
import project12Img from '../../assets/E-commerce Api.png'
import project13Img from '../../assets/Recipes with Amrit.png'
import project14Img from '../../assets/Course_Sell with jwt.png'


export default function Portfolio() {
  // Sample data for cards (you can replace these with your actual project details)
  const projects = [
    {
      id: 0,
      title: 'CloudConnect',
      imageUrl: projectImg,
      githubLink: 'https://github.com/Amritpal-Kaur0/CloudConnect',
      deployedSiteLink:'https://cloud-connect-585fc15863b5.herokuapp.com/',
      description:'CloudConnect is a full-stack web application that allows users to upload and share files with other users. Users can sign up, log in, create profiles, upload files, and explore a curated feed of random persons.',
    },
    {
      id: 1,
      title: 'Rentixx',
      imageUrl: project1Img,
      githubLink: 'https://github.com/Amritpal-Kaur0/ReNTIXX_',
      description:'The Rentix is a RESTful API web service that serves as the backend and frontend(using handlebars) for an event rental company. It provides a platform for customers to browse and rent various items for their events, such as venues, equipment, and decorations, and even transportation.',
    },
    {
      id: 2,
      title: 'EventFinderr',
      imageUrl: project2Img,
      githubLink: 'https://github.com/Amritpal-Kaur0/EventFinderr',
      description:'Looking for exciting events happening in World during the weekend? Look no further! My event finder tool helps you discover a variety of fun activities',
    
    },
    {
      id: 3,
      title: 'Note-Taker',
      imageUrl: project3Img,
      githubLink: 'https://github.com/Amritpal-Kaur0/NOTE-Taker',
      description:'This is a simple note-taking application built using Express.js, a fast and minimalist web framework for Node.js. The app allows users to create, view and delete notes, providing a convenient way to organize and manage their thoughts and ideas.',
      
    },
    {
      id: 4,
      title: 'Tech-Blog',
      imageUrl: project4Img,
      githubLink: 'https://github.com/Amritpal-Kaur0/TEch--BloGG',
      description:'This project is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This application is build using node.js, express.js, mongodb, sequelize and many more.',
      
    },
    {
      id: 5,
      title: 'Work Day Scheduler',
      imageUrl: project5Img,
      githubLink: 'https://github.com/Amritpal-Kaur0/WorkDaySchedular',
      deployedSiteLink: 'https://work-day-schedular.vercel.app/',
      description:'This is a work day scheduler where user can save the task according to the time (present ,past.future in different colors). This application is build using html, css, javascript, api and many more.',
      
    },
    {
      id: 6,
      title: 'Weather App',
      imageUrl: project6Img,
      githubLink: 'https://github.com/Amritpal-Kaur0/5Weather',
      description:'This is a weather application where user can search the weather of any city. This application is build using html, css, javascript, api and many more.',
      
    },
    {
      id: 7,
      title: 'Readme Generator',
      imageUrl: project7Img,
      githubLink: 'https://github.com/Amritpal-Kaur0/README-FUN',
      description:'This is a readme generator where user can generate the readme file by answering the questions. This application is build using node.js, inquirer and many more.',
      
    },
    {
      id: 8,
      title: 'Social Media Backend',
      imageUrl: project8Img,
      githubLink: 'https://github.com/Amritpal-Kaur0/Social-Network-Api',
      description:'This is a social media backend api where user can add, update, delete and view the users, thoughts and reactions. This application is build using node.js, express.js, mongodb, mongoose, sequelize and many more.',
      
    },
    {
      id: 9,
      title: 'PWA Text Editor',
      imageUrl: project9Img,
      githubLink: 'https://github.com/Amritpal-Kaur0/Pwa-text-editor',
      description:'This is a text editor(Web app) where user can write the text and can save the text. This application is build using react, node.js, express.js, mongodb, graphql, apollo server and many more.',
      
    },
    {
      id: 10,
      title: 'Pinterest Auth PassportJS',
      imageUrl: project10Img,
      githubLink: 'https://github.com/Amritpal-Kaur0/Pinterest',
      description:'Pinterest(Using EJS and Passport js) is a full-stack web application that replicates the core features of Pinterest. Users can sign up, log in, create profiles, upload posts, and explore a curated feed of random images.',
      
    },
    {
      id: 11,
      title: 'Book Search Engine',
      imageUrl: project11Img,
      githubLink: 'https://github.com/Amritpal-Kaur0/Book-Search-Engine',
      description:'This is a book search engine where user can search the book and can save the book. This application is build using react, node.js, express.js, mongodb, graphql, apollo server and many more.',
    },
    {
      id: 12,
      title: 'E-commerce Api',
      imageUrl: project12Img,
      githubLink: 'https://github.com/Amritpal-Kaur0/E-commerce-BackEnd',
      description:'This is an e-commerce backend api where user can add, update, delete and view the products. This application is build using node.js, express.js, mongodb, mongoose, sequelize and many more.',
      
    },
    {
      id: 13,
      title: 'Recipes with Amrit',
      imageUrl: project13Img,
      githubLink: 'https://github.com/Amritpal-Kaur0/Recipes-with-Amrit',
      deployedSiteLink:'https://amritpal-kaur0.github.io/Recipes-with-Amrit/',
      description:'This is a recipe website where user can search the recipe with name of item(like egg). This application is build using html, css, javascript, api and many more.',
      
    },
    {
      id: 14,
      title: 'Course_sell with jwt',
      imageUrl: project14Img,
      githubLink: 'https://github.com/Amritpal-Kaur0/Course_Sellingwithjwt',
      description:'This is a course selling website api where user can buy the course and can also sell the course. This application is build using node.js, express.js, mongodb, jwt, bcrypt, zod and many more.',
    },
    
    
  ];

  return (
    <div className="flex bg-amber-100 flex-wrap justify-center pb-16">
      {projects.map((project) => (
        <div key={project.id} className=" card max-w-sm rounded overflow-hidden shadow-lg shadow-black m-4">
          <div className="relative box m-3">
            <img src={project.imageUrl} alt={project.title} className="w-full h-60 object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="absolute top-0 left-0 w-full p-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2"
              >
                <img src={githubIcon} alt="GitHub" className="w-10 h-12   bg-white blur-[1px] " />
              </a>
              <h3 className="text-white text-xl font-bold">{project.title}</h3>
            </div>
          </div>
          <div className="px-4 py-2 text-lg  "> {project.description}</div>  
           
          
          {/* <div className="px-6 py-4 card-title "> 
             <div className="flex justify-center">
              <a
                href={project.deployedSiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn p-2 px-4  bg-amber-400 hover:bg-amber-500  rounded-xl  text-white"
              >
                View Deployed Site
              </a>
            </div> 
          </div> */}
        </div>
      ))}
      <Footer/>
    </div>
  );
}
