import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

// We can add a simple style tag to import the Google Font directly
const FontLoader = () => (
  <style>
    {`@import url('https://fonts.googleapis.com/css2?family=Sofia&display=swap');`}
  </style>
);

const CommitteeCard = ({ name, path }) => {
  const navigate = useNavigate();
  return (
    <div 
     onClick={() => navigate(path)}
      className="w-48 h-48 md:w-60 md:h-60 flex items-center justify-center rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
      style={{
        // Linear gradient: white at 10% and 20% as requested, fading to transparent
        background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 10%, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.05) 100%)',
        border: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(4px)'
      }}
    >
      <h3 
        className="md:text-5xl text-3xl font-sofia text-center px-4"
        style={{ 
          color: '#fdf8d4', 
          fontFamily: "'Sofia', cursive" 
        }}
      >
        {name}
      </h3>
    </div>
  );
};

const CommitteesGrid = () => {
  const committees = [
{ name: "Linux", path: "projects" },
    { name: "S&T", path: "/projects/st" },
    { name: "Flutter", path: "/projects/flutter" },
    { name: "PR", path: "/projects/pr" },
    { name: "UI", path: "/projects/ui" },
    { name: "Media", path: "/projects/media" },
    { name: "Blender", path: "/projects/blender" },
    { name: "BackEnd", path: "/projects/backend" },
    { name: "FrontEnd", path: "/projects/frontend" },
    { name: "HR", path: "/projects/hr"  }
  ];

  return (
    <div className="min-h-screen bg-[#181818] flex flex-col">
      <FontLoader />
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10">
          {committees.map((item, index) => (
            <CommitteeCard key={index} 
              name={item.name} 
              path={item.path} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CommitteesGrid;