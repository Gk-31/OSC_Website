import React from 'react';
import Countdown from '../Countdown/Countdown';

const EventCard = ({ title, date, time, location, description, targetDate, onRSVP, isFinished }) => {
  const isStayTuned = date === "Stay Tuned";

  return (
    <div className={`relative bg-dark-bg border-2 border-osc-orange shadow-[0_0_20px_rgba(250,155,70,0.1)] rounded-3xl p-6 flex flex-col gap-5 transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(250,155,70,0.15)] duration-400`}>
      {isFinished && (
        <div className="absolute top-4 right-4 bg-osc-orange text-dark-bg text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest z-10 shadow-lg">
          Completed
        </div>
      )}
      
      <h3 className="text-2xl md:text-3xl font-serif text-osc-orange text-center border-b border-osc-orange/10 pb-4 tracking-tight">
        {title}
      </h3>

      <div className="flex flex-col gap-3 text-white/80 text-sm font-medium leading-relaxed">
        <div className="flex items-start gap-2">
          <span className="text-osc-orange font-bold min-w-[80px] uppercase text-[10px] tracking-wider mt-1">Date:</span>
          <span className="text-[13px]">{date}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-osc-orange font-bold min-w-[80px] uppercase text-[10px] tracking-wider mt-1">Time:</span>
          <span className="text-[13px]">{time}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-osc-orange font-bold min-w-[80px] uppercase text-[10px] tracking-wider mt-1">Location:</span>
          <span className="text-[13px]">{location}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-osc-orange font-bold min-w-[80px] uppercase text-[10px] tracking-wider mt-1">Details:</span>
          <span className="line-clamp-2 text-white/60 font-normal text-[12px]">{description}</span>
        </div>
      </div>

      {!isFinished && targetDate && (
        <div className="py-4 my-1 border-y border-osc-orange/10">
          <Countdown targetDate={targetDate} />
        </div>
      )}

      <div className="mt-auto pt-2">
        {isFinished ? (
          <div className="w-full text-center py-2 text-osc-orange font-serif italic text-lg border border-osc-orange/20 rounded-xl bg-osc-orange/5">
            Past Event
          </div>
        ) : (
          <button 
            disabled={isStayTuned}
            onClick={() => onRSVP(title)}
            className={`w-full ${isStayTuned ? 'bg-osc-orange/40 text-dark-bg/60 cursor-not-allowed shadow-none' : 'bg-osc-orange hover:bg-[#ffb06b] text-dark-bg shadow-[0_4px_15px_rgba(250,155,70,0.25)]'} font-black py-3 px-6 rounded-xl transition-all transform active:scale-95 text-md uppercase tracking-wider`}
          >
            {isStayTuned ? "Stay Tuned" : "RSVP Now"}
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCard;
