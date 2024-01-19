import React from 'react';

const Skills = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 mb-24">
      <h2 className="text-3xl font-bold mb-4">Skills and Technologies</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Languages</h3>
        <p>JavaScript, HTML, CSS</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Front-end</h3>
        <p>React, React Router, Redux, Recoil, SASS, Bootstrap, TailwindCSS, Handlebars, EJS</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Backend</h3>
        <p>Node.js, Express.js, REST APIs, MVC, ORM</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Databases</h3>
        <p>SQL, MongoDB</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Authorization and Validation</h3>
        <p>JWT, Zod (for validation)</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Version Control</h3>
        <p>Git, GitHub, Gitlab</p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Deployment</h3>
        <p>Heroku, Vercel</p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Other Tools</h3>
        <p>Ms Office , Lighthouse , PageSpeed Insights , Agile Methodologies</p>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
        <p>Communication, Critical thinking & Problem-solving , collaboration , quick -learner.</p>
      </div>

    </div>
  );
};

export default Skills;

// import React from 'react';
// import skillbg from '../../assets/skillsbg.avif'

// const SkillsTree = () => {
//   const skills = {
//     // name: 'Root',
//     children: [
//       {
//         name: 'Frontend',
//         children: [
//           { name: 'HTML' },
//           { name: 'CSS' },
//           { name: 'JavaScript' },
//           { name: 'React' },
//           { name: 'PWA' },
//         ],
//       },
//       {
//         name: 'Backend',
//         children: [
//           { name: 'Express' },
//           { name: 'Node.js' },
//           { name: 'GraphQL' },
//           { name: 'SQL'
//            },
//           {
//             name: 'NoSQL',
//           },
//         ],
//       },
//       {
//         name: 'OOPs',
//       },
//     ],
//   }
  


  
//   const renderSkill = (skill) => {
//     return (
//       <li   key={skill.name} className=" box py-2 relative font-bold text-lg   flex  flex-wrap rounded justify-evenly">
//         {skill.name}
//         {skill.children && (
//           <ul className="pl-4  relative ">{skill.children.map((child) => renderSkill(child))}
//           </ul>
//         )}
//       </li>
//     );
//   };

//   return (
//     <div className="skills-tree box relative ">
//         <img src={skillbg} alt="background" className=" absolute w-full h-screen blur-[2px] hover:blur-[6px]" />
//       <h1 className="text-2xl font-bold  text-center left-5 md:left-20 absolute  p-4 btn  overline ">My Skills 👉</h1>
//       <ul  className=' p-6  '>  {renderSkill(skills)} </ul>
//     </div>
//   );
// };
// export default SkillsTree;



