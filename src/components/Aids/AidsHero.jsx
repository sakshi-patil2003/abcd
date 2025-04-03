import React from "react";
import robotImage from "../../assets/images/AIDS-Imagegs/aids-robot-tab (1).avif";
// import mouseIcon from "../../assets/images/AIDS-Imagegs/whitemouse.avif";

function AidsHero() {
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * 0.4,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative px-8 md:px-16 pt-12 text-white flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#0c3249] via-[#1e5f76] to-[#41b9d0]">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="relative w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
        <img
          src={robotImage}
          alt="Robot"
          className="animate-robot object-contain h-auto"
        />
        <div className="absolute top-10 left-4 md:left-8 lg:left-16 p-8 z-20 text-start">
          <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-4">
            Decode the Future with Artificial Intelligence & Data Science at ICEM!
          </h1>
          {/* New heading added below the existing one */}
          <h1 className="text-lg md:text-2xl font-semibold mt-4 italic">
          30 Years of Excellence in Education | 5 Specializations | 100% Placement Assistance
          </h1>
          <p className="hidden md:block text-lg md:text-3xl font-extralight mt-4">
            Apply now for the exciting field of AIDS Research & Development!
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center md:items-end w-full md:w-1/2 z-20 mb-20">
        <div className="p-6 max-w-md w-full shadow-md bg-opacity-30 bg-[#41b9d0] border-2 border-[#1e5f76] rounded-lg">
          <form className="space-y-4">
            {[{ type: "text", id: "name", placeholder: "Enter your name" },
              { type: "email", id: "email", placeholder: "Enter your email" },
              { type: "tel", id: "mobile", placeholder: "Enter your mobile number" }].map((input, index) => (
              <input
                key={index}
                type={input.type}
                id={input.id}
                className="w-full p-1.5 bg-gradient-to-r from-white via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#8BC5FF] focus:outline-none focus:ring-2 focus:ring-[#006BB3]"
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
                className="w-full p-1.5 bg-gradient-to-r from-white via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#8BC5FF] focus:outline-none focus:ring-2 focus:ring-[#006BB3]"
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
              className="w-full p-1.5 bg-gradient-to-r from-white via-[#f0f8ff] to-[#d6f0ff] text-black rounded border border-[#8BC5FF] focus:outline-none focus:ring-2 focus:ring-[#006BB3]"
              placeholder="Enter CET Score"
              required
            />
            <button type="submit" className="w-full py-2 bg-[#006BB3] text-white rounded-lg hover:bg-[#00508D]">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Scroll Down Indicator (Optional) */}
      {/* <div className="absolute bottom-5 right-5 z-20 text-white text-lg flex cursor-pointer" onClick={handleScrollDown}>
        <div className="flex items-center justify-center mr-4">
          <img src={mouseIcon} alt="Scroll Down" className="w-8 h-12 animate-bounce" />
        </div>
        <div className="flex flex-col items-start">
          <p className="text-lg">Scroll Down</p>
          <p className="text-sm text-gray-300">to know more</p>
        </div>
      </div> */}

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
