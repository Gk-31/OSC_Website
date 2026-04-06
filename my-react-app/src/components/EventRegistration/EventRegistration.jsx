import React from 'react';

const EventRegistration = ({ isOpen, onClose, eventTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md bg-[#181818] border-2 border-[#fa9b46] rounded-3xl p-10 shadow-[0_0_50px_rgba(250,155,70,0.15)] animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/40 hover:text-[#fa9b46] transition-all transform hover:rotate-90"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-3xl font-serif text-[#fa9b46] mb-8 border-b-2 border-[#fa9b46]/20 pb-4">
          Registration for {eventTitle}
        </h2>

        {/* Form */}
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-3">
            <label className="text-white/90 text-lg font-medium block">Name:</label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b-2 border-white/20 focus:border-[#fa9b46] outline-none text-white text-xl py-2 transition-all placeholder:text-white/10"
              placeholder="Enter your full name"
            />
          </div>
          <div className="space-y-3">
            <label className="text-white/90 text-lg font-medium block">Email:</label>
            <input 
              type="email" 
              className="w-full bg-transparent border-b-2 border-white/20 focus:border-[#fa9b46] outline-none text-white text-xl py-2 transition-all placeholder:text-white/10"
              placeholder="Enter your email"
            />
          </div>

          <div className="pt-4">
            <button 
              className="w-full bg-[#fa9b46] hover:bg-[#ffb06b] text-[#181818] font-bold py-4 rounded-xl transition-all transform active:scale-95 shadow-[0_4px_20px_rgba(250,155,70,0.4)] text-lg"
            >
              Confirm RSVP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventRegistration;
