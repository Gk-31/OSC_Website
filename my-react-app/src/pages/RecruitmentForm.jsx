import React from 'react';
import CustomSelect from '../components/ComitteeSelect/ComitteeSelect';

const RecruitmentForm = () => {
  return (
    // تم تغيير py-6 إلى py-2 لتقليل الهوامش الخارجية
    <div className="min-h-screen bg-[#FFF8E7] flex flex-col items-center justify-center py-2 px-4 font-sans">
      {/* Main Card Container - تم تقليل p-10 إلى p-6 أو p-8 */}
      <div className="w-full max-w-2xl bg-white/50 backdrop-blur-sm p-5 sm:p-8 rounded-[2rem] shadow-xl border border-[#FA9B46]/20">

        {/* Header - تم تقليل mb-10 إلى mb-6 */}
        <header className="mb-6 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#333] tracking-tight">
            OSC <span className="text-[#F39148]">Recruitment</span>
          </h1>
          <p className="text-gray-500 mt-1 font-medium text-sm">Join our community and build the future.</p>
        </header>

        {/* Form - تم تقليل الـ space-y-5 إلى space-y-3 */}
        <form className="space-y-3">
          {/* Full Name */}
          <div className="group">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-5 py-3 rounded-2xl border-2 border-[#FA9B46]/30 bg-white focus:border-[#FA9B46] focus:outline-none focus:ring-4 focus:ring-[#FA9B46]/10 placeholder:text-gray-400 text-gray-700 transition-all duration-200 shadow-sm"
            />
          </div>

          {/* Email Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-3 rounded-2xl border-2 border-[#FA9B46]/30 bg-white focus:border-[#FA9B46] focus:outline-none focus:ring-4 focus:ring-[#FA9B46]/10 placeholder:text-gray-400 text-gray-700 transition-all duration-200 shadow-sm"
            />
            <input
              type="email"
              placeholder="Confirm Email"
              className="w-full px-5 py-3 rounded-2xl border-2 border-[#FA9B46]/30 bg-white focus:border-[#FA9B46] focus:outline-none focus:ring-4 focus:ring-[#FA9B46]/10 placeholder:text-gray-400 text-gray-700 transition-all duration-200 shadow-sm"
            />
          </div>

          {/* Select Committee */}
          <CustomSelect />

          {/* Academic Year - تم تقليل الـ p-5 والـ space-y-4 */}
          <div className="p-4 rounded-2xl border-2 border-[#FA9B46]/30 bg-white/50 space-y-2 shadow-sm">
            <label className="text-md font-bold text-[#333] block">Academic Year</label>
            <div className="flex flex-wrap gap-4">
              {[1, 2, 3, 4].map((year) => (
                <label key={year} className="flex items-center gap-2 cursor-pointer text-gray-700 group">
                  <div className="relative flex items-center">
                    <input
                      type="radio"
                      name="academicYear"
                      value={year}
                      className="peer h-4 w-4 cursor-pointer appearance-none rounded-full border-2 border-[#FA9B46] checked:border-[#FA9B46] transition-all"
                    />
                    <div className="absolute w-2 h-2 rounded-full bg-[#FA9B46] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
                  </div>
                  <span className="text-sm font-medium group-hover:text-[#FA9B46] transition-colors">Year {year}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Phone Number */}
          <input
            type="tel"
            placeholder="WhatsApp Phone Number"
            className="w-full px-5 py-3 rounded-2xl border-2 border-[#FA9B46]/30 bg-white focus:border-[#FA9B46] focus:outline-none focus:ring-4 focus:ring-[#FA9B46]/10 placeholder:text-gray-400 text-gray-700 transition-all duration-200 shadow-sm"
          />

          {/* College Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="College"
              className="w-full px-5 py-3 rounded-2xl border-2 border-[#FA9B46]/30 bg-white focus:border-[#FA9B46] focus:outline-none focus:ring-4 focus:ring-[#FA9B46]/10 placeholder:text-gray-400 text-gray-700 transition-all duration-200 shadow-sm"
            />
            <input
              type="text"
              placeholder="College ID"
              className="w-full px-5 py-3 rounded-2xl border-2 border-[#FA9B46]/30 bg-white focus:border-[#FA9B46] focus:outline-none focus:ring-4 focus:ring-[#FA9B46]/10 placeholder:text-gray-400 text-gray-700 transition-all duration-200 shadow-sm"
            />
          </div>

          {/* Submit Button - تم تقليل الـ py والـ pt */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#F39148] hover:bg-[#E07B32] text-white font-bold py-3 rounded-2xl transition-all duration-300 text-lg shadow-md hover:shadow-lg transform active:scale-[0.98]"
            >
              Apply Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecruitmentForm;