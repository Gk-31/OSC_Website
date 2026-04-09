import React from 'react';
import ProjectsCard from '../components/ProjectsCard/ProjectsCard';  
import Footer from '../components/Footer/Footer';
import Navbar from "../components/Navbar/Navbar";

const Projects = () => {
  const projects = [
    {
      title: "Linux Wiki",
      status: "Active",
      image: "/group.png", 
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      title: "Linux Wiki",
      status: "Archived",
      image: "/group.png",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }
  ];

  return (
<div className="min-h-screen  bg-[#181818] text-white flex flex-col p-6 md:p-12">
      <Navbar />
      <div className=" pt-20 flex-grow max-w-7xl mx-auto w-full mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((item, index) => (
            <ProjectsCard key={index} {...item} /> 
          ))}
        </div>
      </div>

      <Footer /> 
      
    </div>
    
  );
};

export default Projects;