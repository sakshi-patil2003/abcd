import React, { useEffect, useState, useMemo } from 'react';
import bgVideoMp4 from '../../assets/images/green-26mb.mp4';  

function ItHero() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Memoize the list of words to avoid unnecessary recalculation on each render
  const words = useMemo(() => ["Innovation", "Automation", "Precision", "Revolution"], []);

  // Typing effect logic optimized
  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      } else {
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 80 : 120);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <div className="relative pt-8 h-auto bg-cover bg-right md:bg-center bg-no-repeat text-white flex items-start">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src={bgVideoMp4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div> {/* Black overlay with 70% opacity */}

      {/* Wrapper for Heading and Form */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start z-20 w-full mb-4 sm:mb-6">
        
        {/* Heading - Visible on all screen sizes */}
        <div className="md:mt-6 py-2 px-4 text-center lg:text-left">
          <p className="font-semibold text-3xl md:text-5xl md:mb-6">
           <span className='text-[#A540FF]'> Mechanical Engineering</span> at Indira College of Engineering & Management
          </p>
          <div className="hidden lg:block">
            <p className="text-xl py-4 italic">
              30 Years of Excellence in Education | 5 Specializations | 100% Placement Assistance
            </p>
            <p className="text-3xl py-4">
              Transform the Digital World with <span className='text-[#A540FF] font-bold'>IT Engineering</span> at ICEM!
            </p>
          </div>
        </div>

        {/* Right side form container */}
        <div className="flex justify-center lg:justify-start z-20 w-full mb-4 sm:mb-6 md:mb-6 mt-4 lg:mt-0">
          <div className="p-6 max-w-md w-full shadow-md ml-5 rounded-md" style={{ backgroundColor: "rgba(139, 197, 255, 0.3)" }}>
            <form className="space-y-3 p-1">
              <div>
                <input
                  type="text"
                  id="name"
                  className="w-full p-1.5 bg-[#F7F0FC] text-black rounded border border-[#390161] focus:outline-none focus:ring-2 focus:ring-[#390161]"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className="w-full p-1.5 bg-[#F7F0FC] text-black rounded border border-[#390161] focus:outline-none focus:ring-2 focus:ring-[#390161]"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  id="mobile"
                  className="w-full p-1.5 bg-[#F7F0FC] text-black rounded border border-[#390161] focus:outline-none focus:ring-2 focus:ring-[#390161]"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
              <div>
                <select
                  id="state"
                  className="w-full p-1.5 bg-[#F7F0FC] text-black rounded border border-[#390161] focus:outline-none focus:ring-2 focus:ring-[#390161]"
                  required
                >
                  <option value="">Select State</option>
                  {/* Add state options here */}
                </select>
              </div>
              <div>
                <select
                  id="city"
                  className="w-full p-1.5 bg-[#F7F0FC] text-black rounded border border-[#390161] focus:outline-none focus:ring-2 focus:ring-[#390161]"
                  required
                >
                  <option value="">Select City</option>
                  {/* Add city options here */}
                </select>
              </div>

              <div>
                <select
                  id="course"
                  className="w-full p-1.5 bg-[#F7F0FC] text-black rounded border border-[#390161] focus:outline-none focus:ring-2 focus:ring-[#390161]"
                  required
                >
                  <option value="">Select Course</option>
                  <option value="Mech">Mechanical Engineering</option>
                  <option value="AI">Artificial Intelligence</option>
                  <option value="IT">Information Technology</option>
                  <option value="CS">Computer Science</option>
                  <option value="AIDS">Artificial Intelligence and Data Science</option>
                </select>
              </div>
              <div>
                <select
                  id="program"
                  className="w-full p-1.5 bg-[#F7F0FC] text-black rounded border border-[#390161] focus:outline-none focus:ring-2 focus:ring-[#390161]"
                  required
                >
                  <option value="">Select Program</option>
                  {/* Add program options here */}
                </select>
              </div>
              <div>
                <input
                  type="number"
                  id="cet-score"
                  className="w-full p-1.5 bg-[#F7F0FC] text-black rounded border border-[#390161] focus:outline-none focus:ring-2 focus:ring-[#390161]"
                  placeholder="Enter CET Score"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 bg-[#390161] text-white rounded-lg hover:bg-[#9002F5]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItHero;
