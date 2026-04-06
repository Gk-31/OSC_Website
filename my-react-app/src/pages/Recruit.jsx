import React from 'react';
import Footer from '../components/Footer/Footer';
const Recruit = () => {
  return (
    <div className="min-h-screen bg-[#181818] text-white font-serif p-8 md:p-16 relative overflow-hidden">
      <img src="/group.svg" alt="decoration" className="w-full py-8 flex items-center justify-center  pointer-events-none w-[200px] h-[247px]" />
      <h1 className="text-3xl font-bold text-center mt-10"> To Join Us  Register in The Form Here </h1>
      <p className="text-center mt-4">Join our team! We are looking for passionate individuals to contribute to our open source projects.</p>
      <div className="flex justify-center mt-6">
        <a href="/apply" className="bg-osc-orange text-white px-6 py-3 rounded-lg hover:bg-osc-orange-dark transition duration-300  mb-20 font-bold"> Recruitment Form </a>
      </div>
      <Footer />
    </div>

  );
};


export default Recruit;        
