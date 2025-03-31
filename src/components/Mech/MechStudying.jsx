import React from "react";
import {
  FaTools,
  FaIndustry,
  FaCogs,
  FaLightbulb,
  FaHandsHelping,
  FaChartLine,
} from "react-icons/fa";
import std1 from '/public/Mech-Images/std1.avif';
import std2 from '/public/Mech-Images/std2.avif';
import indira from '../../assets/images/ICEM 1.jpg';

function MechStudying() {
  return (
    <div className="flex flex-col md:flex-row px-8 md:px-16 py-6 poppins-regular">
      {/* Left Side (Image Section with full height and 50% width) */}
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
        {/* First Column: One Row with One Image */}
        <div className="col-span-2 h-full">
          <img
            src={indira}
            alt="Image 1"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Second Column: Two Rows with Two Images */}
        <div className="grid grid-rows-1 gap-2 h-full">
          <div className="row-span-1 flex gap-3 h-full">
            <img
              src={std2}
              alt="Image 2"
              className="w-full h-full object-cover"
            />
            <img
              src={std1}
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right Side (Updated Text Content Section) */}
      <div className="w-full md:w-1/2 pl-0 md:pl-8 mt-6 md:mt-0">
        <h1 className="text-2xl md:text-4xl font-semibold text-left mb-4 text-[#000000]">
          Grow. Connect. Lead with Indira!!  
        </h1>
        <h1 className="text-2xl md:text-4xl font-extralight text-left text-[#ff5d12] mb-6">
          Mechanical Engineering
        </h1>
        <p className="text-left text-base md:text-lg mb-6">
        Indira College of Engineering & Management offers a comprehensive mechanical engineering program that blends theoretical knowledge with hands-on experience. Nestled within a vast, vibrant, and lush green campus, the institute provides an inspiring learning environment where innovation meets excellence. The fresh, open spaces and state-of-the-art infrastructure create the perfect setting for students to thrive academically and personally. Our students gain exposure to cutting-edge technologies, industrial practices, and expert mentoring, preparing them for a successful career in the engineering field. 
        </p>

        {/* 2x3 Grid for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-2 ">
          {/* Card 1 */}
          <div className="bg-[#fff4e6] p-4 shadow-lg shadow-[#ffcc66]/50 flex justify-between items-center rounded-lg">
            <span className="flex items-center">
              <FaTools className="text-[#ff5d12] mr-4 text-4xl" />
              <span className="text-sm text-[#8B4513]">
                15+ YEARS OF MECHANICAL EXCELLENCE
              </span>
            </span>
          </div>
          {/* Card 2 */}
          <div className="bg-[#fff4e6] p-4 shadow-lg shadow-[#ffcc66]/50 flex justify-between items-center rounded-lg">
            <span className="flex items-center">
              <FaIndustry className="text-[#006BB3] mr-4 text-4xl" />
              <span className="text-sm text-[#8B4513]">450+ INDUSTRY PARTNERS</span>
            </span>
          </div>
          {/* Card 3 */}
          <div className="bg-[#fff4e6] p-4 shadow-lg shadow-[#ffcc66]/50 flex justify-between items-center rounded-lg">
            <span className="flex items-center">
              <FaCogs className="text-[#006BB3] mr-4 text-4xl" />
              <span className="text-sm text-[#8B4513]">INNOVATIVE RESEARCH & DEVELOPMENT</span>
            </span>
          </div>
          {/* Card 4 */}
          <div className="bg-[#fff4e6] p-4 shadow-lg shadow-[#ffcc66]/50 flex justify-between items-center rounded-lg">
            <span className="flex items-center">
              <FaLightbulb className="text-[#006BB3] mr-4 text-4xl" />
              <span className="text-sm text-[#8B4513]">
                EXPOSURE TO CUTTING-EDGE TECHNOLOGIES
              </span>
            </span>
          </div>
          {/* Card 5 */}
          <div className="bg-[#fff4e6] p-4 shadow-lg shadow-[#ffcc66]/50 flex justify-between items-center rounded-lg">
            <span className="flex items-center">
              <FaHandsHelping className="text-[#008000] mr-4 text-4xl" />
              <span className="text-sm text-[#8B4513]">HANDS-ON TRAINING IN WORKSHOPS</span>
            </span>
          </div>
          {/* Card 6 */}
          <div className="bg-[#fff4e6] p-4 shadow-lg shadow-[#ffcc66]/50 flex justify-between items-center rounded-lg">
            <span className="flex items-center">
              <FaChartLine className="text-[#ff5d12] mr-4 text-4xl" />
              <span className="text-sm text-[#8B4513]">EXCEPTIONAL GROWTH OPPORTUNITIES</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MechStudying;
