import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from "../components/Navbar/Navbar";

const Recruit = () => {
  return (
    <div className="min-h-screen bg-[#181818] my-15 text-white font-serif pt-24 px-8 md:px-16 relative overflow-hidden">
      
      <Navbar />

     
      <div className="text-center">

        <img
          src="/group.svg"
          alt="decoration"
          className="mx-auto mb-6 w-[200px] h-[247px] pointer-events-none"
        />

        <h1 className="text-3xl font-bold mt-6">
          To Join Us Register in The Form Here
        </h1>

        <p className="mt-4 text-gray-300">
          Join our team! We are looking for passionate individuals to contribute to our open source projects.
        </p>

        <div className="flex justify-center mt-6">
          <a
            href="/apply"
            className="bg-[#fa9b46] text-black px-6 py-3 rounded-lg hover:scale-105 transition mb-20 font-bold"
          >
            Recruitment Form
          </a>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default Recruit;
