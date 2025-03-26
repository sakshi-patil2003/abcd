import React, { useEffect } from 'react';
// Import the images
import ProgramImage from '../../assets/images/3d-mech-org.jpg';
import HatImage from '../../assets/images/hat.png';  // Import the floating hat image
import GearImage1 from '../../assets/images/gear-a.png';  // Import the first floating gear image
import GearImage2 from '../../assets/images/gear-b.png';  // Import the second floating gear image
import car from '../../assets/Car split Down Model.jpg';

// Import AOS and its CSS
import AOS from 'aos';
import 'aos/dist/aos.css';

function MechOverview() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Easing function for the animation
      once: true, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 px-8 md:px-16 py-6 poppins-regular">
      {/* Left Part: Heading and Paragraph */}
      <div className="flex-1" data-aos="fade-right">
        <h2
          className="text-3xl md:text-2xl font-bold text-center text-[#ff5d12] mb-4 relative p-8"
          style={{
            backgroundImage: `url(${ProgramImage})`, // Background image for the text
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',  // Ensure text is readable
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', // Add shadow for text clarity
          }}
        >
          Where Innovation Meets Motion
        </h2>
        <h2 className="font-semibold text-2xl md:text-3xl text-black"></h2>
        <p className="text-xl sm:text-2xl md:text-xl text-gray-600 tracking-wide mt-4">
          Ever wondered what it takes to design a Formula 1 car, build a Mars rover, or create a next-gen robotic arm? Mechanical Engineering is the powerhouse behind these revolutionary innovations! At Indira College of Engineering and Management (ICEM), we turn ideas into reality by blending technology, creativity, and real-world applications.
        </p>
      </div>



      {/* Floating animation CSS */}
   
    </div>
  );
}

export default MechOverview;
