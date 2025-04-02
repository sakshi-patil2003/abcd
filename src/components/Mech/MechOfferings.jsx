import { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // mport AOS CSS
import offer2Image from '../../assets/images/MECH-images/offer-5.avif';  // Import the robotics image
import offer3Image from '../../assets/images/MECH-images/offer-4.avif';  // Import the thermal engineering image
import offer4Image from '../../assets/images/MECH-images/offer-3.avif';  // Import the energy solutions image
import offer5Image from '../../assets/images/MECH-images/offer-2.avif';  // Import the prototyping image
import offer6Image from '../../assets/images/MECH-images/offer-1.avif';  // Import the internships image
import offer1Image from '../../assets/images/MECH-images/offer-6.avif';  // Import the CAD/CAM image

function MechOfferings() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const elements = document.querySelectorAll('.circle');
    const icons = document.querySelectorAll('.icon');

    elements.forEach((circle, index) => {
      const icon = icons[index];

      gsap.set(circle, { opacity: 0, x: -50 });
      gsap.set(icon, { rotationY: 180 });

      circle.parentElement.addEventListener('mouseenter', () => {
        gsap.to(circle, { opacity: 1, x: 0, duration: 0.3 });
        gsap.to(icon, { rotationY: 0, duration: 0.3 });
      });

      circle.parentElement.addEventListener('mouseleave', () => {
        gsap.to(circle, { opacity: 0, x: -50, duration: 0.3 });
        gsap.to(icon, { rotationY: 180, duration: 0.3 });
      });
    });
  }, []);

  return (
    <div className="px-4 md:px-8 lg:px-16 py-6 md:py-8 bg-[#ffffff] poppins-regular">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-[#000]" data-aos="fade-up">
        Mechanical Engineering Offerings
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-8 gap-x-4 md:gap-x-8 lg:gap-x-10">
        {/* Advanced CAD/CAM Systems */}
        <div
          className="bg-[linear-gradient(#d9774f,_#f97316_51%,_#fb923c)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer1Image}
            alt="CAD/CAM Systems"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Engineering Mechanics</h3>
            <p className="text-base text-white">The study of forces, motion, and equilibrium in mechanical systems.</p>
          </div>
        </div>


        {/* Cutting-edge Robotics & Automation */}
        <div
          className="bg-[linear-gradient(#d9774f,_#f97316_51%,_#fb923c)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer2Image}
            alt="Robotics & Automation"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Strength of Materials</h3>
            <p className="text-base text-white">Analyzing material behavior under stress, strain, and external loads</p>
          </div>
        </div>

        {/* Thermal Engineering & HVAC Systems */}
        <div
          className="bg-[linear-gradient(#d9774f,_#f97316_51%,_#fb923c)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer3Image}
            alt="Thermal Engineering"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Thermodynamics</h3>
            <p className="text-base text-white">Understanding energy transfer, heat flow, and power generation.</p>
          </div>
        </div>

        {/* Sustainable Energy Solutions */}
        <div
          className="bg-[linear-gradient(#d9774f,_#f97316_51%,_#fb923c)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer4Image}
            alt="Energy Solutions"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Fluid Mechanics & Hydraulics</h3>
            <p className="text-base text-white">Examining fluid behavior in motion and its engineering applications.</p>
          </div>
        </div>


        {/* Mechanical System Design & Prototyping */}
        <div
          className="bg-[linear-gradient(#d9774f,_#f97316_51%,_#fb923c)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer5Image}
            alt="System Design & Prototyping"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Automobile Engineering</h3>
            <p className="text-base text-white">Designing and optimizing vehicle systems for efficiency and safety.</p>
          </div>
        </div>

        {/* Core Engineering Internships and Industrial Training */}
        <div
          className="bg-[linear-gradient(#d9774f,_#f97316_51%,_#fb923c)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer6Image}
            alt="Internships & Training"
            className="w-full h-48 object-cover mb-4"
          />
          <div className="text-center px-4 p-2">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Control Systems & Mechatronics</h3>
            <p className="text-base text-white">Integrating mechanics, electronics, and automation for precision control.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MechOfferings;
    {/* 3. 
4. 
5. Manufacturing Processes
6. Machine Design
7. Automobile Engineering
8. Control Systems & Mechatronics
9. Computer-Aided Design (CAD) & Finite Element Analysis (FEA) */}