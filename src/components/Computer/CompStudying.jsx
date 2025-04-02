import React, { useEffect } from 'react';
import { FaStar, FaBuilding, FaUsers, FaLaptop, FaGraduationCap, FaChartLine } from 'react-icons/fa'; // Added FaChartLine for the new card icon
import MyImage from '../../assets/images/ICEM - College.avif'; // Import your first PNG image
import AnotherImage from '../../assets/images/IT-Images/app1.avif'; // Import your second PNG image
import ThirdImage from '../../assets/images/IT-Images/app2.avif'; // Import your third PNG image
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

function CompStudying() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Animation easing type
      once: true, // Animate only once when scrolling into view
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row px-8 md:px-16 py-6 poppins-regular">
      {/* 70% Left Side */}
      <div className="w-full md:w-[70%] pr-0 md:pr-8" data-aos="fade-right">
        <h1 className="text-4xl font-semibold text-left mb-4">Grow. Connect. Lead with Indira!!</h1>
        <h1 className="text-2xl font-extralight text-center text-[#0080FF] mb-6">Engineering & Management</h1>
        <p className="text-left text-md md:text-lg mb-5" data-aos="fade-up">
          Indira College of Engineering & Management offers a comprehensive mechanical engineering program that blends theoretical knowledge with hands-on experience. Nestled within a vast, vibrant, and lush green campus, the institute provides an inspiring learning environment where innovation meets excellence. The fresh, open spaces and state-of-the-art infrastructure create the perfect setting for students to thrive academically and personally. Our students gain exposure to cutting-edge technologies, industrial practices, and expert mentoring, preparing them for a successful career in the engineering field.
        </p>

        {/* 2x3 Grid for Cards */}
        <div className="grid grid-cols-2 grid-rows-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-4 shadow-lg shadow-blue-500/50 flex  justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaStar className="text-yellow-500 mr-4 text-4xl" /> 
              <span className="text-sm text-center">15+ YEARS OF ACADEMIC EXCELLENCE</span>
            </span>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-4 shadow-lg shadow-blue-500/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaUsers className="text-blue-500 mr-4 text-4xl" /> 
              <span className="text-sm text-center">450+ LEADING RECRUITERS</span>
            </span>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-4 shadow-lg shadow-blue-500/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaBuilding className="text-blue-500 mr-4 text-4xl" /> 
              <span className="text-sm text-center">EXPOSURE TO INDUSTRIAL GUEST LECTURES</span>
            </span>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-4 shadow-lg shadow-blue-500/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaLaptop className="text-blue-500 mr-4 text-4xl" /> 
              <span className="text-sm text-center">HIGHEST PACKAGE OFFERED</span>
            </span>
          </div>
          {/* Card 5 */}
          <div className="bg-white p-4 shadow-lg shadow-blue-500/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaGraduationCap className="text-green-500 mr-4 text-4xl" /> 
              <span className="text-sm text-center">IT and Apple Labs</span>
            </span>
          </div>
          {/* Card 6 */}
          <div className="bg-white p-4 shadow-lg shadow-blue-500/50 flex justify-between items-center rounded-lg" data-aos="zoom-in">
            <span className="flex flex-col md:flex-row items-center">
              <FaChartLine className="text-orange-500 mr-4 text-4xl" /> {/* New Icon */}
              <span className="text-sm text-center">EXCEPTIONAL GROWTH OPPORTUNITIES</span> {/* New Text */}
            </span>
          </div>
        </div>
      </div>

      {/* 30% Right Side with 3 Images */}
      <div className="w-full md:w-[45%] mt-6 flex flex-col justify-center">
        {/* First Image */}
        <div className="mb-6">
          <img 
            src={MyImage} 
            alt="Indira College Image" 
            className="w-full h-72 object-cover rounded-lg shadow-lg" 
          />
        </div>

        {/* Two other images side by side */}
        <div className="flex md:flex-row gap-2">
          <img 
            src={AnotherImage} 
            alt="Another Image" 
            className="h-7 w-40 md:w-1/2 h-56 object-cover rounded-lg shadow-lg" 
          />
          <img 
            src={ThirdImage} 
            alt="Third Image" 
            className=" h-7 w-40 md:w-1/2 h-56 object-cover rounded-lg shadow-lg" 
          />
        </div>
      </div>
    </div>
  );
}

export default CompStudying;
