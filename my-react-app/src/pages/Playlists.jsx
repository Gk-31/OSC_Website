import React from 'react';
import PlaylistCard from '../components/PlaylistCard/PlaylistCard';
import Footer from '../components/Footer/Footer';
import Navbar from "../components/Navbar/Navbar";

const Playlists = () => {
  const categories = [
    { name: "Linux", url: "https://www.youtube.com/playlist?list=PLanhLNyaKYBmAWvj6rAjvXJTJnePxw9-C" },
    { name: "UI UX", url: "https://youtube.com/..." },
    { name: "Frontend", url: "https://youtube.com/..." },
    { name: "Game", url: "https://www.youtube.com/playlist?list=PLanhLNyaKYBknf5g6olOAEYFMXYRA-ZAm" },
    { name: "Backend", url: "https://www.youtube.com/playlist?list=PLanhLNyaKYBkU8ZthGC34txVunPHzjlIh" },
    { name: "Flutter", url: "https://www.youtube.com/playlist?list=PLanhLNyaKYBkNj3xypRBlE-KBg3oW6xzX" },
    { name: "Blender", url: "https://www.youtube.com/playlist?list=PLanhLNyaKYBn_ORjvoM2rkPkBfTi5ch7t" },
    { name: "HR", url: "https://youtube.com/..." }
  ];

//   return (
//     <div className="min-h-screen bg-[#181818] text-white font-serif pt-24 px-6 md:px-16 relative">
      
//       <Navbar />

//       {/* Background decoration */}
//       <div className="absolute right-[-12%] top-1/2 -translate-y-1/2 opacity-50 pointer-events-none">
//         <img src="/Playlist.png" alt="decoration" className="w-[500px]" />
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">

//         {/* Header */}
//         <div className="flex items-center gap-3 mb-14">
//           <img src="/group.svg" alt="icon" className="w-8" />
//           <h1 className="text-3xl md:text-4xl text-[#fa9b46] font-semibold">
//             OSC Playlists
//           </h1>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl">

//           {categories.map((cat, index) => (
//             <PlaylistCard key={index} title={cat.name} link={cat.url} />
//           ))}

//         </div>

//       </div>

//      {/* <Footer /> */}
//  {/* Responsive Footer */}
// <div className="mt-auto flex flex-col md:flex-row items-center md:items-end justify-center md:justify-end gap-3 text-center md:text-right">

//   <img src="/Lock.png" alt="logo" className="w-10" />

//   <div className="text-[#e08a3c] text-sm leading-4">
//     <p>Open Source Community</p>
//     <p>FCIS Student Activity</p>
//     <p className="text-gray-400 text-xs mt-1">
//       Copy right OSC ©2024 All rights are reserved
//     </p>
//   </div>

// </div>
//     </div>
//   );

 return (
    <div className="min-h-screen bg-[#181818] text-white font-serif p-8 md:p-16 relative overflow-hidden">
        <Navbar />
      <div className="absolute right-[-19%] top-1/2 -translate-y-1/2 opacity-50 pointer-events-none">
        <img src="/Playlist.png" alt="decoration" className="w-[500px]" />
      </div>

      <div className="max-w-6xl mx-auto my-10 relative z-10">
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-3xl "><img src="/group.svg" alt="lock" /></span> 
          <h1 className="text-3xl text-oscOrange font-medium">OSC Play Lists</h1>
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-130 max-w-2xl ">
          {categories.map((cat, index) => (
            <PlaylistCard key={index} title={cat.name} link={cat.url} />
          ))}
        </div>
      </div>

 
    <Footer />
    
    </div>
  );
};

export default Playlists;