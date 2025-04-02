import React, { memo } from "react";
import {
  FaTools,
  FaIndustry,
  FaCogs,
  FaLightbulb,
  FaHandsHelping,
  FaChartLine,
} from "react-icons/fa";
import indira from "../../assets/images/ICEM - College.avif";
import Image1 from "../../assets/images/IT-Images/app1.avif";
import Image2 from "../../assets/images/IT-Images/app2.avif";

// Card component for reuse
const Card = ({ icon: Icon, text }) => (
  <div className="bg-[#F7F0FC] p-4 shadow-lg shadow-[#390161]/50 flex justify-between items-center rounded-lg">
    <span className="flex items-center">
      <Icon className="text-[#390161] mr-4 text-3xl md:text-4xl" />
      <span className="text-sm text-[#390161]">{text}</span>
    </span>
  </div>
);

const ItStudying = () => {
  return (
    <div className="flex flex-col md:flex-row px-6 md:px-16 py-6 poppins-regular">
      {/* Left Side (Image Section with full height and 50% width) */}
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 mb-6 md:mb-0">
        {/* First Column: One Row with One Image */}
        <div className="col-span-2 h-full">
          <img
            src={indira}
            alt="Indira College of Engineering & Management"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Second Column: Two Rows with Two Images */}
        <div className="grid grid-rows-1 gap-2 h-full">
          <div className="row-span-1 h-full flex gap-4">
            <img
              src={Image1}
              alt="IT Image 1"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <img
              src={Image2}
              alt="IT Image 2"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Right Side (Text Content Section) */}
      <div className="w-full md:w-1/2 pl-0 md:pl-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-left mb-4 text-[#000000]">
          Grow. Connect. Lead with ICEM!!
        </h1>
        <h1 className="text-2xl md:text-4xl font-extralight text-left text-[#390161] mb-6">
          Information Technology
        </h1>
        <p className="text-left text-base md:text-lg mb-6 text-[#000000]">
          Indira College of Engineering & Management offers a comprehensive
          mechanical engineering program that blends theoretical knowledge with
          hands-on experience. Nestled within a vast, vibrant, and lush green
          campus, the institute provides an inspiring learning environment where
          innovation meets excellence. The fresh, open spaces and state-of-the-art
          infrastructure create the perfect setting for students to thrive
          academically and personally. Our students gain exposure to cutting-edge
          technologies, industrial practices, and expert mentoring, preparing them
          for a successful career in the engineering field.
        </p>

        {/* 2x3 Grid for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card Components */}
          <Card icon={FaTools} text="15+ YEARS OF IT EXCELLENCE" />
          <Card icon={FaIndustry} text="450+ INDUSTRY PARTNERS" />
          <Card icon={FaCogs} text="INNOVATIVE R&D IN IT" />
          <Card icon={FaLightbulb} text="EXPOSURE TO INDUSTRIAL GUEST LECTURES" />
          <Card icon={FaHandsHelping} text="IT and Apple Labs" />
          <Card icon={FaChartLine} text="EXCEPTIONAL GROWTH OPPORTUNITIES" />
        </div>
      </div>
    </div>
  );
};

export default memo(ItStudying);
