import React from 'react';
import Navbar from "../Navbar/Navbar";

const ProjectsCard = ({ title, description, status, image }) => {
  const isActive = status === 'Active';

  return (
   
    <div className=" bg-[#f9fad6] rounded-2xl p-8 flex flex-col items-center text-black shadow-lg border border-black/5 ">
      {/* Project Image */}
      <div className=" w-full mb-6 flex justify-center rounded-50xl overflow-hidden aspect-video">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain p-4"
        />
      </div>

      {/* Header & Status */}
      <div className="w-full flex justify-between items-center mb-4">
        <h2 className="text-3xl font-sofia">{title}</h2>
        <div className="flex items-center gap-2">
          {/* Active Color: #4be908 | Archived Color: #ee7808 */}
          <span 
            className="w-3 h-3 rounded-full" 
            style={{ backgroundColor: isActive ? '#4be908' : '#ee7808' }}
          ></span>
          <span 
            className="italic font-sofia text-lg"
            style={{ color: isActive ? '#4be908' : '#ee7808' }}
          >
            {status}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-lg leading-relaxed font-sofia mb-8 text-left opacity-80">
        {description}
      </p>

      {/* Button */}
      <button className="bg-[#F67807] text-white py-3 px-12 rounded-xl text-xl font-sofia hover:scale-105 transition-transform shadow-md">
        Contribute Now!
      </button>
    </div>
  );
};

export default ProjectsCard;