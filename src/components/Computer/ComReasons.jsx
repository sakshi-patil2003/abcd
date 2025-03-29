import React from "react";
import { FaLaptop, FaCode, FaChalkboardTeacher, FaBriefcase, FaGlobe, FaTrophy, FaDesktop } from "react-icons/fa";

function ComReasons() {
  return (
    <div className="px-8 md:px-14 py-2 poppins-regular">
      <h1 className="text-2xl md:text-4xl font-semibold text-left mb-6 text-[#000000]">
        Why Choose ICEM for Your Computer Engineering Journey?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8">
        {/* Industry-Integrated Curriculum */}
        <div className="flex items-start bg-[#f0f8ff] p-4 shadow-lg shadow-[#66ccff]/50 rounded-lg">
          <FaLaptop className="text-[#1e90ff] mr-4 text-4xl" />
          <div className="py-2">
            <h3 className="text-lg font-semibold text-[#4682b4]">Industry-Integrated Curriculum</h3>
            <p className="text-sm text-[#4682b4]">Learn trending tech like AI, Cloud, & DevOps!</p>
          </div>
        </div>

        {/* Live Projects & Internships */}
        <div className="flex items-start bg-[#f0f8ff] p-4 shadow-lg shadow-[#66ccff]/50 rounded-lg">
          <FaCode className="text-[#32cd32] mr-4 text-4xl" />
          <div className="py-2">
            <h3 className="text-lg font-semibold text-[#4682b4]">Live Projects & Internships</h3>
            <p className="text-sm text-[#4682b4]">Gain hands-on experience with real-world projects!</p>
          </div>
        </div>

        {/* Expert Faculty & Industry Mentors */}
        <div className="flex items-start bg-[#f0f8ff] p-4 shadow-lg shadow-[#66ccff]/50 rounded-lg">
          <FaChalkboardTeacher className="text-[#ff5d12] mr-4 text-4xl" />
          <div className="py-2">
            <h3 className="text-lg font-semibold text-[#4682b4]">Expert Faculty & Industry Mentors</h3>
            <p className="text-sm text-[#4682b4]">Learn from top professionals in the field!</p>
          </div>
        </div>

        {/* Top Placements */}
        <div className="flex items-start bg-[#f0f8ff] p-4 shadow-lg shadow-[#66ccff]/50 rounded-lg">
          <FaBriefcase className="text-[#006BB3] mr-4 text-4xl" />
          <div className="py-2">
            <h3 className="text-lg font-semibold text-[#4682b4]">Top Placements</h3>
            <p className="text-sm text-[#4682b4]">Get hired by leading tech giants & startups!</p>
          </div>
        </div>

        {/* Global Career Prospects */}
        <div className="flex items-start bg-[#f0f8ff] p-4 shadow-lg shadow-[#66ccff]/50 rounded-lg">
          <FaGlobe className="text-[#1e90ff] mr-4 text-4xl" />
          <div className="py-2">
            <h3 className="text-lg font-semibold text-[#4682b4]">Global Career Prospects</h3>
            <p className="text-sm text-[#4682b4]">Opportunities in MNCs across the world!</p>
          </div>
        </div>

        {/* Hackathons & Coding Competitions */}
        <div className="flex items-start bg-[#f0f8ff] p-4 shadow-lg shadow-[#66ccff]/50 rounded-lg">
          <FaTrophy className="text-[#ff5d12] mr-4 text-4xl" />
          <div className="py-2">
            <h3 className="text-lg font-semibold text-[#4682b4]">Hackathons & Coding Competitions</h3>
            <p className="text-sm text-[#4682b4]">Compete, innovate & build solutions!</p>
          </div>
        </div>

        {/* State-of-the-Art Labs */}
        <div className="flex items-start bg-[#f0f8ff] p-4 shadow-lg shadow-[#66ccff]/50 rounded-lg">
          <FaDesktop className="text-[#32cd32] mr-4 text-4xl" />
          <div className="py-2">
            <h3 className="text-lg font-semibold text-[#4682b4]">State-of-the-Art Labs</h3>
            <p className="text-sm text-[#4682b4]">Work in high-tech IT & Apple labs!</p>
          </div>
        </div>

        {/* Exciting Campus Life */}
        <div className="flex items-start bg-[#f0f8ff] p-4 shadow-lg shadow-[#66ccff]/50 rounded-lg">
          <FaTrophy className="text-[#008000] mr-4 text-4xl" />
          <div className="py-2">
            <h3 className="text-lg font-semibold text-[#4682b4]">Exciting Campus Life</h3>
            <p className="text-sm text-[#4682b4]">Sports, events & tech fests to fuel your passion!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComReasons;
