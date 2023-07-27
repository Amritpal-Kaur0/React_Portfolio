import React from 'react';
import skillbg from '../../assets/skillsbg.avif'

const SkillsTree = () => {
  const skills = {
    // name: 'Root',
    children: [
      {
        name: 'Frontend',
        children: [
          { name: 'HTML' },
          { name: 'CSS' },
          { name: 'JavaScript' },
          { name: 'React' },
          { name: 'PWA' },
        ],
      },
      {
        name: 'Backend',
        children: [
          { name: 'Express' },
          { name: 'Node.js' },
          { name: 'GraphQL' },
          { name: 'SQL'
           },
          {
            name: 'NoSQL',
          },
        ],
      },
      {
        name: 'OOPs',
      },
    ],
  }
  


  
  const renderSkill = (skill) => {
    return (
      <li   key={skill.name} className=" box py-2 relative font-bold text-lg   flex  flex-wrap rounded justify-evenly">
        {skill.name}
        {skill.children && (
          <ul className="pl-4  relative ">{skill.children.map((child) => renderSkill(child))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div className="skills-tree box relative ">
        <img src={skillbg} alt="background" className=" absolute w-full h-screen blur-[2px] hover:blur-[6px]" />
      <h1 className="text-2xl font-bold  text-center left-5 md:left-20 absolute  p-4 btn  overline ">My Skills 👉</h1>
      <ul  className=' p-6  '>  {renderSkill(skills)} </ul>
    </div>
  );
};
export default SkillsTree;



