import React from "react";
import { FaRobot, FaIndustry, FaCar, FaBriefcase, FaGlobe, FaTrophy, FaMicrophone } from "react-icons/fa";

function MechReasons() {
  return (
    <div className="px-6 md:px-10 lg:px-16 py-8 bg-[#fff4e6]">
      <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-center text-[#390161] mb-6">
        Why Choose ICEM for Your Mechanical Engineering Journey?
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        
        {/* Industry-Aligned Curriculum */}
        <div className="bg-white shadow-md p-6 text-center rounded-lg hover:shadow-xl transition-shadow flex flex-col items-center">
          <FaRobot className="text-4xl text-[#ff5d12] mb-4" />
          <h3 className="text-xl font-semibold text-[#390161] mb-2">Industry-Aligned Curriculum</h3>
          <p className="text-sm md:text-base text-gray-700">Learn automation, robotics, and advanced manufacturing!</p>
        </div>

        {/* State-of-the-Art Labs */}
        <div className="bg-white shadow-md p-6 text-center rounded-lg hover:shadow-xl transition-shadow flex flex-col items-center">
          <FaIndustry className="text-4xl text-[#006BB3] mb-4" />
          <h3 className="text-xl font-semibold text-[#390161] mb-2">State-of-the-Art Labs</h3>
          <p className="text-sm md:text-base text-gray-700">Work on live projects with high-tech workshops, IT Labs, and Apple Labs.</p>
        </div>

        {/* Automobile & Aerospace Insights */}
        <div className="bg-white shadow-md p-6 text-center rounded-lg hover:shadow-xl transition-shadow flex flex-col items-center">
          <FaCar className="text-4xl text-[#ff5d12] mb-4" />
          <h3 className="text-xl font-semibold text-[#390161] mb-2">Automobile & Aerospace Insights</h3>
          <p className="text-sm md:text-base text-gray-700">Get exposure to cutting-edge mechanical domains!</p>
        </div>

        {/* Top-Notch Placements */}
        <div className="bg-white shadow-md p-6 text-center rounded-lg hover:shadow-xl transition-shadow flex flex-col items-center">
          <FaBriefcase className="text-4xl text-[#006BB3] mb-4" />
          <h3 className="text-xl font-semibold text-[#390161] mb-2">Top-Notch Placements</h3>
          <p className="text-sm md:text-base text-gray-700">Secure jobs with core and IT companies!</p>
        </div>

        {/* Global Career Opportunities */}
        <div className="bg-white shadow-md p-6 text-center rounded-lg hover:shadow-xl transition-shadow flex flex-col items-center">
          <FaGlobe className="text-4xl text-[#ff5d12] mb-4" />
          <h3 className="text-xl font-semibold text-[#390161] mb-2">Global Career Opportunities</h3>
          <p className="text-sm md:text-base text-gray-700">Shape the future of engineering worldwide!</p>
        </div>

        {/* Thriving Sports Culture */}
        <div className="bg-white shadow-md p-6 text-center rounded-lg hover:shadow-xl transition-shadow flex flex-col items-center">
          <FaTrophy className="text-4xl text-[#008000] mb-4" />
          <h3 className="text-xl font-semibold text-[#390161] mb-2">Thriving Sports Culture</h3>
          <p className="text-sm md:text-base text-gray-700">Stay active and build teamwork with top-class sports facilities!</p>
        </div>

        {/* Expert Guest Lectures */}
        <div className="bg-white shadow-md p-6 text-center rounded-lg hover:shadow-xl transition-shadow flex flex-col items-center">
          <FaMicrophone className="text-4xl text-[#ff5d12] mb-4" />
          <h3 className="text-xl font-semibold text-[#390161] mb-2">Expert Guest Lectures</h3>
          <p className="text-sm md:text-base text-gray-700">Learn from industry leaders and mechanical pioneers!</p>
        </div>

        {/* Mega Events & Competitions */}
        <div className="bg-white shadow-md p-6 text-center rounded-lg hover:shadow-xl transition-shadow flex flex-col items-center">
          <FaTrophy className="text-4xl text-[#ff5d12] mb-4" />
          <h3 className="text-xl font-semibold text-[#390161] mb-2">Mega Events & Competitions</h3>
          <p className="text-sm md:text-base text-gray-700">Engage in tech fests, project expos, and national-level challenges!</p>
        </div>
      </div>
    </div>
  );
}

export default MechReasons;
