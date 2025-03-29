import { useEffect } from 'react';
import { gsap } from 'gsap';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS
import offer1Image from '../../assets/images/IT-Images/fullstack (2).avif';  // Import the existing image 1
import offer2Image from '../../assets/images/IT-Images/Cloud Services & Virtualization.avif';  // Import the existing image 2
import offer3Image from '../../assets/images/IT-Images/cloud.avif';  // Import the existing image 3
import offer4Image from '../../assets/images/IT-Images/IT Security & Risk Management.avif';  // Import the existing image 4
import offer5Image from '../../assets/images/IT-Images/ai-it.avif';  // Import the existing image 5
import offer6Image from '../../assets/images/IT-Images/iot.avif';  // Import the existing image 6
import offer7Image from '../../assets/images/IT-Images/erp.avif';  // Import the existing image 7
import offer8Image from '../../assets/images/IT-Images/mobai.avif';  // Import the existing image 8
import techDots from '../../assets/images/circuit-dots.png';  // Import the tech-dots PNG image
import technologyImage from '../../assets/images/technology-word.jpg'; // Example image to apply inside the word "Technology"

function ItOfferings() {
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

  // Inline styles for the "Technology" text effect
  const techStyle = {
    backgroundImage: `url(${technologyImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'transparent',
    fontWeight: 'bold',
    WebkitBackgroundClip: 'text',  // for Safari
    backgroundClip: 'text',
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 py-6 md:py-8 bg-[#ffffff] poppins-regular relative overflow-hidden box-border">
      {/* Tech Dots Image */}
      <img
        src={techDots}
        alt="Tech Dots"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2 md:w-2/3 lg:w-1/2 object-contain"
      />

      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-[#390161]" data-aos="fade-up">
        <span className="technology-text">
          Information <span style={techStyle}>Technology</span> Offerings
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8 justify-center">
        {/* IT Program 1: IT Infrastructure Management */}
        <div
          className="bg-[linear-gradient(#F7F0FC,_#9002F5,_#390161)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer1Image}
            alt="IT Infrastructure Management"
            className="w-full h-48 md:h-56 lg:h-64 object-cover mb-4"
          />
          <div className="text-center px-4 py-2">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Software Engineering & Web Technologies</h3>
            <p className="text-sm md:text-base text-white"> Master full-stack development and software</p>
          </div>
        </div>

        {/* IT Program 2: Cloud Services & Virtualization */}
        <div
          className="bg-[linear-gradient(#F7F0FC,_#9002F5,_#390161)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer2Image}
            alt="Cloud Services & Virtualization"
            className="w-full h-48 md:h-56 lg:h-64 object-cover mb-4"
          />
          <div className="text-center px-4 py-2">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Data Science & Big Data Analytics</h3>
            <p className="text-sm md:text-base text-white">Learn how to handle and analyze massive datasets.</p>
          </div>
        </div>

        {/* IT Program 3: IT Security & Risk Management */}
        <div
          className="bg-[linear-gradient(#F7F0FC,_#9002F5,_#390161)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer3Image}
            alt="IT Security & Risk Management"
            className="w-full h-48 md:h-56 lg:h-64 object-cover mb-4"
          />
          <div className="text-center px-4 py-2">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Cloud Computing & Virtualization</h3>
            <p className="text-sm md:text-base text-white">Explore AWS, Azure, and modern cloud platforms.</p>
          </div>
        </div>

        {/* IT Program 4: Network Administration */}
        <div
          className="bg-[linear-gradient(#F7F0FC,_#9002F5,_#390161)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer4Image}
            alt="Network Administration"
            className="w-full h-48 md:h-56 lg:h-64 object-cover mb-4"
          />
          <div className="text-center px-4 py-2">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Cybersecurity & Ethical Hacking</h3>
            <p className="text-sm md:text-base text-white">Protect digital assets and strengthen network security.</p>
          </div>
        </div>

        {/* IT Program 5: Database Administration */}
        <div
          className="bg-[linear-gradient(#F7F0FC,_#9002F5,_#390161)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer5Image}
            alt="Database Administration"
            className="w-full h-48 md:h-56 lg:h-64 object-cover mb-4"
          />
          <div className="text-center px-4 py-2">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Artificial Intelligence & Machine Learning </h3>
            <p className="text-sm md:text-base text-white">Build intelligent systems and automation</p>
          </div>
        </div>

        {/* IT Program 6: IT Support & Services */}
        <div
          className="bg-[linear-gradient(#F7F0FC,_#9002F5,_#390161)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer6Image}
            alt="IT Support & Services"
            className="w-full h-48 md:h-56 lg:h-64 object-cover mb-4"
          />
          <div className="text-center px-4 py-2">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">IoT & Smart Systems</h3>
            <p className="text-sm md:text-base text-white">Connect devices and develop smart applications for industries..</p>
          </div>
        </div>
        
        {/* IT Program 7: ERP Systems */}
        <div
          className="bg-[linear-gradient(#F7F0FC,_#9002F5,_#390161)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer7Image}
            alt="Enterprise Resource Planning (ERP)"
            className="w-full h-48 md:h-56 lg:h-64 object-cover mb-4"
          />
          <div className="text-center px-4 py-2">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Enterprise Resource Planning (ERP) Systems</h3>
            <p className="text-sm md:text-base text-white">Connect devices and develop smart applications for industries</p>
          </div>
        </div>

        {/* IT Program 8: Mobile App Development */}
        <div
          className="bg-[linear-gradient(#F7F0FC,_#9002F5,_#390161)] shadow-xl flex flex-col items-center justify-start text-center h-full relative"
          data-aos="fade-up"
        >
          <img
            src={offer8Image}
            alt="Mobile App Development"
            className="w-full h-48 md:h-56 lg:h-64 object-cover mb-4"
          />
          <div className="text-center px-4 py-2">
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Mobile App Development </h3>
            <p className="text-sm md:text-base text-white">Create cutting-edge Android & iOS applications.</p>
          </div>
        </div>
        
      </div>
      <h3 className='text-center text-[#390161] font-semibold md:text-xl mt-2'>At ICEM, you don’t just study IT—you build, innovate, and lead in the digital era!</h3>
    </div>
  );
}

export default ItOfferings;
