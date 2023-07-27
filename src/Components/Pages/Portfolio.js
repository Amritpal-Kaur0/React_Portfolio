import React from 'react';
import Footer from '../footer'
import githubIcon from '../../assets/github-icon.png'; 
import project1Img from '../../assets/Rentix (1).png'
import project2Img from '../../assets/Eventfinder.png'
import project3Img from '../../assets/note-taker (1).png'
import project4Img from '../../assets/Tech-blog (1).png'
import project5Img from '../../assets/WorkSchedular (1).png'
import project6Img from '../../assets/Weatherapp (1).png'


export default function Portfolio() {
  // Sample data for cards (you can replace these with your actual project details)
  const projects = [
    {
      id: 1,
      title: 'Rentixx',
      imageUrl: project1Img,
      githubLink: 'https://github.com/Amritpal-Kaur0/ReNTIXX_',
      deployedSiteLink:'https://rentixx-64a3fa155998.herokuapp.com/',
    },
    {
      id: 2,
      title: 'EventFinderr',
      imageUrl: project2Img,
      githubLink: 'https://github.com/Amritpal-Kaur0/EventFinderr',
      deployedSiteLink: 'https://amritpal-kaur0.github.io/EventFinderr/',
    },
    {
      id: 3,
      title: 'Note-Taker',
      imageUrl: project3Img,
      githubLink: 'https://github.com/Amritpal-Kaur0/NOTE-Taker',
      deployedSiteLink: 'https://amrit-note-taker.herokuapp.com//',
    },
    {
      id: 4,
      title: 'Tech-Blog',
      imageUrl: project4Img,
      githubLink: 'https://github.com/Amritpal-Kaur0/TEch--BloGG',
      deployedSiteLink: 'https://hayer-techblog-a4b94ceb5446.herokuapp.com/',
    },
    {
      id: 5,
      title: 'Work Day Scheduler',
      imageUrl: project5Img,
      githubLink: 'https://github.com/Amritpal-Kaur0/WorkDaySchedular',
      deployedSiteLink: 'https://amritpal-kaur0.github.io/WorkDaySchedular/',
    },
    {
      id: 6,
      title: 'Weather App',
      imageUrl: project6Img,
      githubLink: 'https://github.com/Amritpal-Kaur0/5Weather',
      deployedSiteLink: 'https://amritpal-kaur0.github.io/5Weather/',
    },
    
    
  ];

  return (
    <div className="flex bg-amber-100 flex-wrap justify-center pb-16">
      {projects.map((project) => (
        <div key={project.id} className=" card max-w-sm rounded overflow-hidden shadow-lg shadow-black m-4">
          <div className="relative box">
            <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="absolute top-0 left-0 w-full p-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2"
              >
                <img src={githubIcon} alt="GitHub" className="w-8 h-8 bg-white blur-[1px] " />
              </a>
              <h3 className="text-white text-xl font-bold">{project.title}</h3>
            </div>
          </div>
          <div className="px-6 py-4 card-title ">
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
          </div>
        </div>
      ))}
      <Footer/>
    </div>
  );
}
