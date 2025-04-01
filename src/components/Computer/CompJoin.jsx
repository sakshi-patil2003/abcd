import React from 'react';
import backgroundImage from '../../assets/images/Com-Images/join-bg.avif'; // Adjust the path as necessary

function CompJoin() {
  return (
    <div className="relative">
      {/* Background image */}
      <div
        className="bg-cover bg-center absolute top-0 left-0 w-full h-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Blue overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-blue-700 opacity-70 z-10"></div>

      {/* Text content */}
      <div className="relative z-20 px-8 md:px-16 py-4">
        <div className="text-center mb-2">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 mt-2">
          Admissions Open for 2025!          </h1>
          <p className="text-xl text-gray-200 mb-8">
          Secure your seat & start your journey in the world of technology with ICEM! 
          </p>
          <button className="bg-transparent border-2 text-[#ffffff] py-2 px-6 rounded-full text-xl hover:bg-blue-700 hover:text-white transition-all">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompJoin;
