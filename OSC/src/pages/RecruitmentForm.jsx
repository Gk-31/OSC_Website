import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomSelect from '../components/ComitteeSelect/ComitteeSelect';


const RecruitmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    academic_year: '',
    phone: '',
    college: '',
    college_id: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.email !== formData.confirmEmail) {
      alert("Emails do not match!");
      return;
    }

    const dataToSend = {
      name: formData.name,
      email: formData.email,
      academic_year: Number(formData.academic_year), 
      phone: formData.phone,
      college: formData.college.toLowerCase(), 
      college_id: formData.college_id,
    };

    try {
      const response = await fetch('https://osc-recruit-form.vercel.app/form', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Application submitted successfully!");
        navigate("/")
      } else {
        const errorMessage = Array.isArray(result.message) 
          ? result.message.join("\n") 
          : result.message;
        alert(`Error:\n${errorMessage}`);
      }
    } catch (error) {
      console.error("Error submitting:", error);
      alert("Failed to Submit Check CORS");
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7] flex flex-col items-center justify-center py-2 px-4 font-sans text-right">
      <div className="w-full max-w-2xl bg-white/50 backdrop-blur-sm p-5 sm:p-8 rounded-[2rem] shadow-xl border border-[#FA9B46]/20">
      
        <header className="mb-6 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#333] tracking-tight">
            OSC <span className="text-[#F39148]">Recruitment</span>
          </h1>
          <p className="text-gray-500 mt-1 font-medium text-sm">Join our community and build the future.</p>
        </header>

        <form className="space-y-3" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="group">
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              onChange={handleChange}
              value={formData.name}
              required
              className="w-full px-5 py-3 rounded-2xl border-2 border-[#FA9B46]/30 bg-white focus:border-[#FA9B46] focus:outline-none focus:ring-4 focus:ring-[#FA9B46]/10 placeholder:text-gray-400 text-gray-700 transition-all duration-200 shadow-sm"
            />
          </div>

          {/* Emails */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
              required
              className="w-full px-5 py-3 rounded-2xl border-2 border-[#FA9B46]/30 bg-white focus:border-[#FA9B46] focus:outline-none focus:ring-4 focus:ring-[#FA9B46]/10 placeholder:text-gray-400 text-gray-700 transition-all duration-200 shadow-sm"
            />
            <input
              name="confirmEmail"
              type="email"
              placeholder="Confirm Email"
              onChange={handleChange}
              value={formData.confirmEmail}
              required
              className="w-full px-5 py-3 rounded-2xl border-2 border-[#FA9B46]/30 bg-white focus:border-[#FA9B46] focus:outline-none focus:ring-4 focus:ring-[#FA9B46]/10 placeholder:text-gray-400 text-gray-700 transition-all duration-200 shadow-sm"
            />
          </div>

          {/* Committee Select (تأكدي من تمرير القيمة لـ formData إذا كان الحقل مطلوباً في الباك) */}
          <CustomSelect />

          {/* Academic Year */}
          <div className="p-4 rounded-2xl border-2 border-[#FA9B46]/30 bg-white/50 space-y-2 shadow-sm">
            <label className="text-md font-bold text-[#333] block">Academic Year</label>
            <div className="flex flex-wrap gap-4">
              {[1, 2, 3, 4].map((year) => (
                <label key={year} className="flex items-center gap-2 cursor-pointer text-gray-700 group">
                  <div className="relative flex items-center">
                    <input
                      type="radio"
                      name="academic_year"
                      value={year}
                      onChange={handleChange}
                      required
                      className="peer h-4 w-4 cursor-pointer appearance-none rounded-full border-2 border-[#FA9B46] checked:border-[#FA9B46] transition-all"
                    />
                    <div className="absolute w-2 h-2 rounded-full bg-[#FA9B46] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
                  </div>
                  <span className="text-sm font-medium group-hover:text-[#FA9B46] transition-colors">Year {year}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Phone */}
          <input
            name="phone"
            type="tel"
            placeholder="WhatsApp Phone Number"
            onChange={handleChange}
            value={formData.phone}
            required
            className="w-full px-5 py-3 rounded-2xl border-2 border-[#FA9B46]/30 bg-white focus:border-[#FA9B46] focus:outline-none focus:ring-4 focus:ring-[#FA9B46]/10 placeholder:text-gray-400 text-gray-700 transition-all duration-200 shadow-sm"
          />

          {/* College Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <select
              name="college"
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-2xl border-2 border-[#FA9B46]/30 bg-white focus:border-[#FA9B46] focus:outline-none focus:ring-4 focus:ring-[#FA9B46]/10 text-gray-700 transition-all duration-200 shadow-sm"
            >
              <option value="">Select College</option>
              <option value="computer science">Computer Science</option>
              <option value="other">Other</option>
            </select>
            <input
              name="college_id"
              type="text"
              placeholder="College ID"
              onChange={handleChange}
              value={formData.college_id}
              required
              className="w-full px-5 py-3 rounded-2xl border-2 border-[#FA9B46]/30 bg-white focus:border-[#FA9B46] focus:outline-none focus:ring-4 focus:ring-[#FA9B46]/10 placeholder:text-gray-400 text-gray-700 transition-all duration-200 shadow-sm"
            />
          </div>

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