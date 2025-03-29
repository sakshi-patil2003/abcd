import React from "react";
import { FaRobot, FaIndustry, FaCar, FaBriefcase, FaGlobe, FaTrophy, FaMicrophone } from "react-icons/fa";

function MechReasons() {
  return (
    <div className="px-8 md:px-14 py-2 poppins-regular">
      <h1 className="text-3xl md:text-4xl font-semibold text-left mb-6 text-[#000000]">
        Why Choose ICEM for Your Mechanical Engineering Journey?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8">
        {/* Industry-Aligned Curriculum */}
        <div className="flex items-start bg-[#fff4e6] p-4 shadow-lg shadow-[#ffcc66]/50 rounded-lg">
          <FaRobot className="text-[#ff5d12] mr-4 text-4xl" />
          <div className="py-2">
            <h3 className="text-lg font-semibold text-[#8B4513]">Industry-Aligned Curriculum</h3>
            <p className="text-sm text-[#8B4513]">Learn automation, robotics, and advanced manufacturing!</p>
          </div>
        </div>

        {/* State-of-the-Art Labs */}
        <div className="flex items-start bg-[#fff4e6] p-4 shadow-lg shadow-[#ffcc66]/50 rounded-lg">
          <FaIndustry className="text-[#006BB3] mr-4 text-4xl" />
          <div className="py-2">
            <h3 className="text-lg font-semibold text-[#8B4513]">State-of-the-Art Labs</h3>
            <p className="text-sm text-[#8B4513]">Work on live projects with high-tech workshops!</p>
          </div>
        </div>

        {/* Automobile & Aerospace Insights */}
        <div className="flex items-start bg-[#fff4e6] p-4 shadow-lg shadow-[#ffcc66]/50 rounded-lg">
          <FaCar className="text-[#ff5d12] mr-4 text-4xl" />
          <div className="py-2">
            <h3 className="text-lg font-semibold text-[#8B4513]">Automobile & Aerospace Insights</h3>
            <p className="text-sm text-[#8B4513]">Get exposure to cutting-edge mechanical domains!</p>
          </div>
        </div>

        {/* Top-Notch Placements */}
        <div className="flex items-start bg-[#fff4e6] p-4 shadow-lg shadow-[#ffcc66]/50 rounded-lg">
          <FaBriefcase className="text-[#006BB3] mr-4 text-4xl" />
          <div className="py-2">
            <h3 className="text-lg font-semibold text-[#8B4513]">Top-Notch Placements</h3>
            <p className="text-sm text-[#8B4513]">Secure jobs with core and IT companies!</p>
          </div>
        </div>

        {/* Global Career Opportunities */}
        <div className="flex items-start bg-[#fff4e6] p-4 shadow-lg shadow-[#ffcc66]/50 rounded-lg">
          <FaGlobe className="text-[#ff5d12] mr-4 text-4xl" />
          <div className="py-2">
            <h3 className="text-lg font-semibold text-[#8B4513]">Global Career Opportunities</h3>
            <p className="text-sm text-[#8B4513]">Shape the future of engineering worldwide!</p>
          </div>
        </div>

        {/* Thriving Sports Culture */}
        <div className="flex items-start bg-[#fff4e6] p-4 shadow-lg shadow-[#ffcc66]/50 rounded-lg">
          <FaTrophy className="text-[#008000] mr-4 text-4xl" />
          <div className="py-2">
            <h3 className="text-lg font-semibold text-[#8B4513]">Thriving Sports Culture</h3>
            <p className="text-sm text-[#8B4513]">Stay active and build teamwork with top-class sports facilities!</p>
          </div>
        </div>

        {/* Expert Guest Lectures */}
        <div className="flex items-start bg-[#fff4e6] p-4 shadow-lg shadow-[#ffcc66]/50 rounded-lg">
          <FaMicrophone className="text-[#ff5d12] mr-4 text-4xl" />
          <div className="py-2">
            <h3 className="text-lg font-semibold text-[#8B4513]">Expert Guest Lectures</h3>
            <p className="text-sm text-[#8B4513]">Learn from industry leaders and mechanical pioneers!</p>
          </div>
        </div>

        {/* Mega Events & Competitions */}
        <div className="flex items-start bg-[#fff4e6] p-4 shadow-lg shadow-[#ffcc66]/50 rounded-lg">
          <FaTrophy className="text-[#ff5d12] mr-4 text-4xl" />
          <div className="py-2">
            <h3 className="text-lg font-semibold text-[#8B4513]">Mega Events & Competitions</h3>
            <p className="text-sm text-[#8B4513]">Engage in tech fests, project expos, and national-level challenges!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MechReasons;
