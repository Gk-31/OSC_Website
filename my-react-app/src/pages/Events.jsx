import React, { useState } from 'react';
import EventCard from '../components/EventCard/EventCard';
import EventRegistration from '../components/EventRegistration/EventRegistration';
import Navbar from "../components/Navbar/Navbar";
import Footer from '../components/Footer/Footer';

const Events = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");

  const handleRSVP = (title) => {
    setSelectedEvent(title);
    setModalOpen(true);
  };

  const upcomingEvents = [
    {
      title: "Workshops",
      date: "May 15, 2026",
      time: "10:00 AM",
      location: "FCIS Hall A",
      description: "Hands-on session on advanced React patterns and performance optimization using Tailwind CSS 4 and Vite.",
      targetDate: "2026-05-15T10:00:00"
    },
    {
      title: "Webinars",
      date: "June 02, 2026",
      time: "08:00 PM",
      location: "Zoom Online",
      description: "Exploring the future of Open Source with industry veterans and community leaders worldwide.",
      targetDate: "2026-06-02T20:00:00"
    },
    {
      title: "Hackathons",
      date: "July 10, 2026",
      time: "09:00 AM",
      location: "Tech Hub Cairo",
      description: "24-hour coding challenge to build innovative community solutions and win amazing prizes.",
      targetDate: "2026-07-10T09:00:00"
    },
    {
      title: "Coming Soon",
      date: "Stay Tuned",
      time: "--:--",
      location: "TBA",
      description: "Something big is cooking! Keep an eye on our social media for the big reveal.",
      targetDate: null
    }
  ];

  const finishedEvents = [
    {
      title: "UI/UX Bootcamp",
      date: "March 10, 2026",
      time: "02:00 PM",
      location: "Design Lab",
      description: "Mastering the fundamentals of user-centric design, typography, and interactive prototyping."
    },
    {
      title: "Linux Essentials",
      date: "Feb 20, 2026",
      time: "11:00 AM",
      location: "Labs 3 & 4",
      description: "Getting started with command-line mastery, bash scripting, and basic system administration."
    },
    {
      title: "Flutter Kickoff",
      date: "Jan 15, 2026",
      time: "10:00 AM",
      location: "Online",
      description: "Building cross-platform mobile apps from scratch with Google's UI toolkit."
    }
  ];

  return (
    /* التعديل: أضفنا flex و flex-col و min-h-screen */
    <div className="min-h-screen flex flex-col bg-dark-bg text-white font-sans selection:bg-osc-orange selection:text-dark-bg">
      <Navbar />
      
      {/* التعديل: أضفنا flex-grow لضمان تمدد المحتوى ودفع الفوتر للأسفل */}
      <div className="flex-grow w-full max-w-6xl mx-auto px-6 md:px-12 py-10 space-y-12 mt-10">

        {/* Header Section */}
        <div className="space-y-2">
          <h1 className="text-4xl font-serif text-osc-orange tracking-tight leading-tight group">
            Upcoming Events<span className="text-white/20 ml-1 group-hover:text-osc-orange transition-colors duration-700">:-</span>
          </h1>
          <p className="text-white/40 text-base font-medium tracking-wide max-w-xl border-l-2 border-osc-orange/30 pl-4">
            Join our upcoming expeditions into technology and community. Secure your spot now.
          </p>
        </div>

        {/* Upcoming Section */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} onRSVP={handleRSVP} />
            ))}
          </div>
        </section>

        {/* Separator Decor */}
        <div className="flex items-center justify-center gap-3 py-4">
          <div className="h-px w-10 bg-osc-orange/20"></div>
          <div className="w-2 h-2 rounded-full border border-osc-orange/40"></div>
          <div className="h-px w-full max-w-xs bg-gradient-to-r from-osc-orange/20 to-transparent"></div>
        </div>

        {/* Finished Section */}
        <section className="pb-10">
          <div className="flex flex-col md:flex-row md:items-end gap-3 mb-10">
            <h2 className="text-3xl font-serif text-white/40 tracking-tighter">
              Past Expeditions
            </h2>
            <p className="text-white/20 text-sm mb-1 italic">Moments that defined our journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {finishedEvents.map((event, index) => (
              <EventCard key={index} {...event} isFinished={true} />
            ))}
          </div>
        </section>
      </div>

      <Footer />

      <EventRegistration
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        eventTitle={selectedEvent}
      />
    </div>
  );
};

export default Events;