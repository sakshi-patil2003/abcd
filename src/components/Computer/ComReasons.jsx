import React from "react";
import { FaLaptop, FaCode, FaChalkboardTeacher, FaBriefcase, FaGlobe, FaTrophy, FaDesktop } from "react-icons/fa";

function ComReasons() {
  return (
    <div className="px-6 md:px-10 lg:px-16 py-8 bg-[#F6FBFF]">
      <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center mb-6">
        Why Choose ICEM for Your Computer Engineering Journey?
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        
        {/* Industry-Integrated Curriculum */}
        <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl text-[#8BC5FF] mb-4">
            <FaLaptop />
          </div>
          <h3 className="text-xl font-semibold text-[#390161] mb-2">Industry-Integrated Curriculum</h3>
          <p className="text-sm md:text-base text-gray-700">Learn trending tech like AI, Cloud, & DevOps!</p>
        </div>

        {/* Live Projects & Internships */}
        <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl text-[#8BC5FF] mb-4">
            <FaCode />
          </div>
          <h3 className="text-xl font-semibold text-[#390161] mb-2">Live Projects & Internships</h3>
          <p className="text-sm md:text-base text-gray-700">Gain hands-on experience with real-world projects!</p>
        </div>

        {/* Expert Faculty & Industry Mentors */}
        <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl text-[#8BC5FF] mb-4">
            <FaChalkboardTeacher />
          </div>
          <h3 className="text-xl font-semibold text-[#390161] mb-2">Expert Faculty & Industry Mentors</h3>
          <p className="text-sm md:text-base text-gray-700">Learn from top professionals in the field!</p>
        </div>

        {/* Top Placements */}
        <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl text-[#8BC5FF] mb-4">
            <FaBriefcase />
          </div>
          <h3 className="text-xl font-semibold text-[#390161] mb-2">Top Placements</h3>
          <p className="text-sm md:text-base text-gray-700">Get hired by leading tech giants & startups!</p>
        </div>

        {/* Global Career Prospects */}
        <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl text-[#8BC5FF] mb-4">
            <FaGlobe />
          </div>
          <h3 className="text-xl font-semibold text-[#390161] mb-2">Global Career Prospects</h3>
          <p className="text-sm md:text-base text-gray-700">Opportunities in MNCs across the world!</p>
        </div>

        {/* Hackathons & Coding Competitions */}
        <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl text-[#8BC5FF] mb-4">
            <FaTrophy />
          </div>
          <h3 className="text-xl font-semibold text-[#390161] mb-2">Hackathons & Coding Competitions</h3>
          <p className="text-sm md:text-base text-gray-700">Compete, innovate & build solutions!</p>
        </div>

        {/* State-of-the-Art Labs */}
        <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl text-[#8BC5FF] mb-4">
            <FaDesktop />
          </div>
          <h3 className="text-xl font-semibold text-[#390161] mb-2">State-of-the-Art Labs</h3>
          <p className="text-sm md:text-base text-gray-700">Work in high-tech IT & Apple labs!</p>
        </div>

        {/* Exciting Campus Life */}
        <div className="bg-white shadow-md p-6 flex flex-col items-center text-center rounded-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl text-[#8BC5FF] mb-4">
            <FaTrophy />
          </div>
          <h3 className="text-xl font-semibold text-[#390161] mb-2">Exciting Campus Life</h3>
          <p className="text-sm md:text-base text-gray-700">Sports, events & tech fests to fuel your passion!</p>
        </div>
      </div>
    </div>
  );
}

export default ComReasons;
