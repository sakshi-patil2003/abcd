import React from "react";
import robotImage from "../../assets/images/AIDS-Imagegs/aids-robot-tab (1).avif";

function AidsHero() {
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * 0.4,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative px-6 md:px-12 lg:px-16 pt-12 text-white flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-[#0c3249] via-[#1e5f76] to-[#41b9d0] min-h-screen">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="relative w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0">
        <img
          src={robotImage}
          alt="Robot"
          className="animate-robot object-contain h-auto max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
        />
        <div className="absolute top-10 left-4 lg:left-8 xl:left-16 p-6 md:p-8 z-20 text-start">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold leading-tight mb-4">
            Decode your Future with AIDS at ICEM!
          </h1>
          <h1 className="text-sm md:text-xl lg:text-2xl font-semibold mt-4 italic">
            30 Years of Excellence in Education | 5 Specializations | 100% Placement Assistance
          </h1>
          <p className="hidden md:block text-md md:text-lg lg:text-3xl font-semibold mt-4">
            Apply now for the exciting field of AIDS Research & Development!
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-end w-full lg:w-1/2 z-20 mb-10">
        <div className="p-4 md:p-6 max-w-sm md:max-w-md w-full shadow-md bg-opacity-30 bg-[#41b9d0] border-2 border-[#1e5f76] rounded-lg">
          <form className="space-y-3 md:space-y-4">
            {[{ type: "text", id: "name", placeholder: "Enter your name" },
              { type: "email", id: "email", placeholder: "Enter your email" },
              { type: "tel", id: "mobile", placeholder: "Enter your mobile number" }].map((input, index) => (
              <input
                key={index}
                type={input.type}
                id={input.id}
                className="w-full p-2 bg-gradient-to-r from-white via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#8BC5FF] focus:outline-none focus:ring-2 focus:ring-[#006BB3]"
                placeholder={input.placeholder}
                required
              />
            ))}
            {[{ id: "state", options: ["Select State"] },
              { id: "city", options: ["Select City"] },
              { id: "course", options: ["Select Course", "Information Technology", "Mechanical Engineering", "Electronics and Telecommunication Engineering", "Computer Engineering", "Artificial Intelligence and Data Science (AIDS)"] }
            ].map((select, index) => (
              <select
                key={index}
                id={select.id}
                className="w-full p-2 bg-gradient-to-r from-white via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#8BC5FF] focus:outline-none focus:ring-2 focus:ring-[#006BB3]"
                required
              >
                {select.options.map((option, idx) => (
                  <option key={idx} value={option === "Select State" || option === "Select City" || option === "Select Course" ? "" : option}>
                    {option}
                  </option>
                ))}
              </select>
            ))}
            <input
              type="number"
              id="cet-score"
              className="w-full p-2 bg-gradient-to-r from-white via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#8BC5FF] focus:outline-none focus:ring-2 focus:ring-[#006BB3]"
              placeholder="Enter CET Score"
              required
            />
            <button type="submit" className="w-full py-2 bg-[#006BB3] text-white rounded-lg hover:bg-[#00508D]">
              Submit
            </button>
          </form>
        </div>
      </div>

      <style>
        {`
          @keyframes robotMove {
            0%, 100% { transform: scaleX(-1) translateX(-30px) translateY(-10px); }
            25% { transform: scaleX(-1) translateX(-15px) translateY(-20px); }
            50% { transform: scaleX(-1) translateX(30px) translateY(-10px); }
            75% { transform: scaleX(-1) translateX(15px) translateY(-20px); }
          }
          .animate-robot { animation: robotMove 5s ease-in-out infinite alternate; }
        `}
      </style>
    </div>
  );
}

export default AidsHero;
