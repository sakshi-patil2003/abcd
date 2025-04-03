import React from "react";
 
function EntcAdmission() {
  const handleClick = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // Smooth scroll effect
    });
  }; 
  return (
    <div className="w-full p-6 bg-gradient-to-r from-[#3BA6A2] to-[#005D5D] text-white ">
      {/* Main Heading */}
      <h1 className="text-xl md:text-4xl font-bold text-center mb-2">
        Looking for the Best ENTC Engineering College in Pune?
      </h1>
 
      {/* Sub-heading */}
      <h2 className="text-lg md:text-3xl text-center font-semibold mb-2">
        Your search ends at <span className="text-[#32E2E2]">ICEM!</span>
      </h2>
 
      {/* Admission Process Box */}
      <div className=" text-white p-6 rounded-lg ">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-2">
          Admission Process: <span className="text-white">Get Started Today!</span>
        </h3>
        <p className="text-center text-lg md:text-xl mb-4">
          Engineering Admissions Open for 2025! Secure your seat & take the first step towards a future of innovation!
        </p>
 
        {/* Call-to-action button */}
        <div className="flex justify-center">
        <a
        href="#apply"
        onClick={handleClick} // Call handleClick on click
        className=" bg-[#41b9d0] text-[#0c3249] py-4 px-8 rounded-full text-xl font-semibold shadow-md hover:bg-gray-200 hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out mt-8">
         Apply Now
      </a>
          {/* <button className="bg-[#32E2E2] hover:bg-[#3BA6A2] hover:text-white text-[#005D5D] font-bold py-3 px-6 rounded-lg shadow-lg text-lg">
            Apply Now
          </button> */}
        </div>
      </div>
    </div>
  );
}
 
export default EntcAdmission;