import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ 
    days: "00", 
    hours: "00", 
    minutes: "00" 
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: "00", hours: "00", minutes: "00" });
      } else {
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        setTimeLeft({
          days: d < 10 ? `0${d}` : d.toString(),
          hours: h < 10 ? `0${h}` : h.toString(),
          minutes: m < 10 ? `0${m}` : m.toString()
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-3 text-3xl font-bold text-osc-orange font-mono tracking-tighter">
        <div className="flex flex-col items-center">
          <span>{timeLeft.days}</span>
          <span className="text-[9px] text-white/50 uppercase tracking-widest mt-0.5">Days</span>
        </div>
        <span className="mt-0.5">:</span>
        <div className="flex flex-col items-center">
          <span>{timeLeft.hours}</span>
          <span className="text-[9px] text-white/50 uppercase tracking-widest mt-0.5">Hours</span>
        </div>
        <span className="mt-0.5">:</span>
        <div className="flex flex-col items-center">
          <span>{timeLeft.minutes}</span>
          <span className="text-[9px] text-white/50 uppercase tracking-widest mt-0.5">Minutes</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
