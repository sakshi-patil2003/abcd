import { useEffect } from 'react';
import { FaCog } from 'react-icons/fa';  // Mechanical cog icon
import { FaTools } from 'react-icons/fa'; // Tools icon
import { FaIndustry } from 'react-icons/fa'; // Factory icon

// Import AOS for animations
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

function MechPointers() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration (1 second)
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <div className="px-8 md:px-16 py-12 poppins-regular">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16">
        {/* Card 1: Program Format */}
        <div
          className="bg-[#fff4e6] p-6 z-10 shadow-lg flex items-center justify-center"
          data-aos="fade-up" // AOS animation trigger
          data-aos-delay="100" // Optional: Staggered animation
        >
          <div className="flex flex-col items-center justify-center">
            <FaCog size={40} className="text-[#ff5d12]" />
            <div className="text-center">
              <h2 className="text-lg sm:text-xl md:text-2xl">Program Format</h2>
              <p className=" text-xl sm:text-2xl font-semibold">Offline</p>
            </div>
          </div>
        </div>

        {/* Card 2: Duration */}
        <div
          className="bg-[#fff4e6] p-6 z-10 shadow-lg flex items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="200" // Optional: Staggered animation
        >
          <div className="flex flex-col items-center justify-center">
            <FaTools size={40} className="text-[#ff5d12]" />
            <div className="text-center">
              <h2 className="text-lg sm:text-xl md:text-2xl">Duration</h2>
              <p className=" text-xl sm:text-2xl font-semibold">4 Years</p>
            </div>
          </div>
        </div>

        {/* Card 3: Program Fees */}
        <div
          className="bg-[#fff4e6] p-6 z-10 shadow-lg flex items-center justify-center sm:col-span-2 md:col-span-1" // Center last card on tablet screen
          data-aos="fade-up"
          data-aos-delay="300" // Optional: Staggered animation
        >
          <div className="flex flex-col items-center justify-center">
            <FaIndustry size={40} className="text-[#ff5d12]" />
            <div className="text-center">
              <h2 className="text-lg sm:text-xl md:text-2xl">Program Fees</h2>
              <p className=" text-xl sm:text-2xl font-semibold">Rs. 108000/-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MechPointers;
