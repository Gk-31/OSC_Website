import React, { useState, useEffect } from "react";
import CustomSelect from '../components/ComitteeSelect/ComitteeSelect';

const RecruitmentForm = () => {
const [availableCommittees, setAvailableCommittees] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    academic_year: "",
    college: "",
    committee_1: "",
    committee_2: "",
    attendance_date: "",
    attendance_date_2: "",
  });
    useEffect(() => {
    const fetchCommittees = async () => {
      try {
        const res = await fetch(
          "https://oscgeeks-server-test.vercel.app/remainings"
        );
        const data = await res.json();

        const filteredCommittees = Object.entries(data.remainings)
          .filter(([_, count]) => count > 0)
          .map(([value]) => ({
            value,
          }));

        setAvailableCommittees(filteredCommittees);
      } catch (err) {
        console.error("Failed to load available committees:", err);
      }
    };

    fetchCommittees();
  }, []);

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    message: "",
  });
  const [confirmEmail, setConfirmEmail] = useState("");
  const validateForm = () => {
    const {
      id,
      name,
      email,
      phone,
      academic_year,
      college,
      committee_1,
      committee_2,
      attendance_date,
      attendance_date_2,
    } = formData;
  
    if (
      !id ||
      !name ||
      !email ||
      !confirmEmail ||
      !phone ||
      !academic_year ||
      !college ||
      !committee_1 
    ) {
      setStatus({
        loading: false,
        success: false,
        message: "Please fill in all required fields.",
      });
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus({
        loading: false,
        success: false,
        message: "Invalid email format.",
      });
      return false;
    }
    if (email !== confirmEmail) {
      setStatus({
        loading: false,
        success: false,
        message: "Email and confirmation email must match.",
      });
      return false;
    }
    if (!/^\d{11}$/.test(phone)) {
      setStatus({
        loading: false,
        success: false,
        message: "Phone number must be 11 digits.",
      });
      return false;
    }



    return true;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConfirmEmailChange = (e) => {
    setConfirmEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    setStatus({ loading: true, success: null, message: "" });

    try {
  
      const transformedData = {
        ...formData,
        committee_1:
          formData.committee_1 === "PR" ? "PR&LR" : formData.committee_1,
        committee_2: "",
        attendance_date: "",
        attendance_date_2: "",
      };

      const response = await fetch(
        "https://oscgeeks-server-test.vercel.app/add-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(transformedData),
        }
      );

      if (response.ok) {
        setStatus({
          loading: false,
          success: true,
          message: "Form submitted successfully!",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setStatus({
          loading: false,
          success: false,
          message: "Submission failed. Try again later.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        loading: false,
        success: false,
        message: "Something went wrong. Please try again.",
      });
    }
  };

  const collegeOptions = ["Computer Science", "Other"];

  
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
        <form  className="space-y-3" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="group">
            <input
              type="text"
              placeholder="Full Name"
               id="fullName"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-2xl border-2 border-[#FA9B46]/30 bg-white focus:border-[#FA9B46] focus:outline-none focus:ring-4 focus:ring-[#FA9B46]/10 placeholder:text-gray-400 text-gray-700 transition-all duration-200 shadow-sm"
            />
          </div>

          {/* Email Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
               value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-2xl border-2 border-[#FA9B46]/30 bg-white focus:border-[#FA9B46] focus:outline-none focus:ring-4 focus:ring-[#FA9B46]/10 placeholder:text-gray-400 text-gray-700 transition-all duration-200 shadow-sm"
            />
            <input
              type="email"
              id="confirmEmail"
              name="confirmEmail"
              value={confirmEmail}
              onChange={handleConfirmEmailChange}
              required
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
                          name="academic_year"
                    value={year}
                    checked={formData.academic_year === year}
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

          {/* Phone Number */}
          <input
            type="tel"
            id="phoneNumber"
            name="phone"
            placeholder="WhatsApp Phone Number"
             value={formData.phone}
              onChange={handleChange}
              required
            className="w-full px-5 py-3 rounded-2xl border-2 border-[#FA9B46]/30 bg-white focus:border-[#FA9B46] focus:outline-none focus:ring-4 focus:ring-[#FA9B46]/10 placeholder:text-gray-400 text-gray-700 transition-all duration-200 shadow-sm"
          />

          {/* College Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <select
             id="college-mobile"
              name="college"
             placeholder="College"
             value={formData.college}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 rounded-2xl border-2 border-[#FA9B46]/30 bg-white focus:border-[#FA9B46] focus:outline-none focus:ring-4 focus:ring-[#FA9B46]/10 placeholder:text-gray-400 text-gray-700 transition-all duration-200 shadow-sm"
            >
               <option value="" disabled>
                College
              </option>
                {collegeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <input
              type="number"
              id="collegeId"
              name="id"
              value={formData.id}
              onChange={handleChange}
              required
              placeholder="College ID"
              className="w-full px-5 py-3 rounded-2xl border-2 border-[#FA9B46]/30 bg-white focus:border-[#FA9B46] focus:outline-none focus:ring-4 focus:ring-[#FA9B46]/10 placeholder:text-gray-400 text-gray-700 transition-all duration-200 shadow-sm"
            />
          </div>

          {/* Submit Button - تم تقليل الـ py والـ pt */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#F39148] hover:bg-[#E07B32] text-white font-bold py-3 rounded-2xl transition-all duration-300 text-lg shadow-md hover:shadow-lg transform active:scale-[0.98]"
              disabled={status.loading}
            >
              Apply Now
            {status.loading ? "Submitting..." : "Submit"}

            </button>
          </div>
          {status.message && (
            <div
              className={`alert-message ${
                status.success ? "success" : "error"
              }`}
            >
              <FontAwesomeIcon
                icon={status.success ? faCircleCheck : faCircleXmark}
              />
              <span>{status.message}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default RecruitmentForm;