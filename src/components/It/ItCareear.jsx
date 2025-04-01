import React from 'react';

const ItCareear = () => {
  return (
    <div className="bg-gradient-to-r from-[#390161] via-[#390161] to-[#390161] text-[#F7F0FC] py-16 px-8 sm:px-12 shadow-lg transform transition-all duration-700 ease-in-out">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title Section */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#F7F0FC]">
          Career Prospects & Placements
        </h2>

        {/* Description Section */}
        <p className="text-md sm:text-xl mb-8 leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
          The demand for IT professionals is at an all-time high! With companies like TCS, Infosys, Accenture, Capgemini, Wipro, and global tech giants hiring IT engineers, the career opportunities are limitless. At ICEM, we ensure you are industry-ready with 100% placement assistance, hands-on internships, and real-world tech projects that prepare you for success in software development, cybersecurity, cloud computing, and data science.
        </p>

        {/* Logos Section */}
        <div className="grid grid-cols-4 grid-row-1 gap-2 md:gap-8 sm:grid-cols-4 lg:grid-cols-4 sm:px-8">
          <div className="flex justify-center items-center  hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src="/public/IT-Com-AIDS/capgi.avif" alt="Google" className="max-w-full h-auto object-contain rounded-md" />
          </div>
          <div className="flex justify-center items-center  hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src="/public/IT-Com-AIDS/infosys.avif" alt="TCS" className="max-w-full h-auto object-contain rounded-md" />
          </div>
          <div className="flex justify-center items-center  hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src="/public/IT-Com-AIDS/Tcs.avif" alt="Infosys" className="max-w-full h-auto object-contain rounded-md" />
          </div>
          <div className="flex justify-center items-center  hover:scale-110 transition-transform duration-300 ease-in-out">
            <img src="/public/IT-Com-AIDS/wipro.avif" alt="Microsoft" className="max-w-full h-auto object-contain rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItCareear;
