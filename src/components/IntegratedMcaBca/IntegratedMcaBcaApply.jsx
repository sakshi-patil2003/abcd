import React from "react";
import backgroundImage from "../../assets/images/plane.avif"; // Make sure the path is correct
 
const IntegratedMcaBcaApply = () => {
  // Function to scroll to top when Apply Now button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };
 
  return (
    <div
      className="px-8 md:px-16  text-center relative bg-contain bg-no-repeat bg-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Updated background color
    >
      {/* Overlay with primary color */}
      <div className="absolute inset-0 bg-[#FCFAEE] opacity-70 z-0"></div>
 
      <div className="relative z-10">
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-[#555555]">Admission Process: Get<span className="text-[#f37021]">  Started </span> Today!</h2>
        <p className="sm:text-sm md:text-lg  mb-6 text-[#555555]">
          Follow these simple steps to apply for the Integrated BCA + MCA at ICEM College Pune:
        </p>
 
        {/* Container for steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-8 mx-auto">
          {/* Step 1 */}
          <div
            className="relative text-[#555555] p-6 shadow-xl w-full rounded-lg"
            style={{ backgroundColor: "#F5F0EB" }}
          >
            <div
              className="absolute top-[-15px] left-[-15px] bg-[#555555] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
            >
              1
            </div>
            <p className="sm:text-sm md:text-lg">Fill out the online application form on our website.</p>
          </div>
 
          {/* Step 2 */}
          <div
            className="relative text-[#555555] p-6 shadow-xl w-full rounded-lg"
            style={{ backgroundColor: "#F5F0EB" }}
          >
            <div
              className="absolute top-[-15px] left-[-15px] bg-[#555555] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
            >
              2
            </div>
            <p className="sm:text-sm md:text-lg">Submit the required documents (mark sheets, ID, etc.)</p>
          </div>
 
          {/* Step 3 */}
          <div
            className="relative text-[#555555] p-6 shadow-xl w-full rounded-lg"
            style={{ backgroundColor: "#F5F0EB" }}
          >
            <div
              className="absolute top-[-15px] left-[-15px] bg-[#555555] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
            >
              3
            </div>
            <p className="sm:text-sm md:text-lg">Pay the application fee securely online.</p>
          </div>
 
          {/* Step 4 */}
          <div
            className="relative text-[#555555] p-6 shadow-xl w-full rounded-lg"
            style={{ backgroundColor: "#F5F0EB" }}
          >
            <div
              className="absolute top-[-15px] left-[-15px] bg-[#555555] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg" >
              4 
            </div>
            <p className="sm:text-sm md:text-lg">Attend the counseling and interview session.</p>
          </div>
 
          {/* Step 5 */}
          <div
            className="relative text-[#555555] p-6 shadow-xl w-full rounded-lg"
            style={{ backgroundColor: "#F5F0EB" }}
          >
            <div
              className="absolute top-[-15px] left-[-15px] bg-[#555555] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
            >
              5
            </div>
            <p className="sm:text-sm md:text-lg">Confirm your seat and join ICEM College!</p> {/* Updated text color */}
          </div>
        </div>
      </div>
 
      {/* Text content */}
      <div className="relative px-8 md:px-16 py-4">
        <div className="text-center mb-4 ">
          <h1 className="text-3xl md:text-5xl font-bold text-[#555555] mb-4 mt-2">
            Admissions <span className="text-[#f37021]">Open</span> for 2025!
          </h1>
          <p className="sm:text-base md:text-lg text-[#555555] mb-8">
            Secure your seat & start your journey in the world of technology with ICEM!
          </p>
          <button
            onClick={scrollToTop} // On click scroll to top
            className="bg-[#555555] border-2 text-white py-2 px-6 rounded-full text-xl hover:bg-[#003C84] hover:border-white transition-all"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};
 
export default IntegratedMcaBcaApply;
 