import React from "react";
import Slider from "react-slick"; // Importing react-slick

// Image Imports
import vikramImage from "../../assets/images/user-org-icon.png";
import simranImage from "../../assets/images/user-org.png";
import arjunImage from "../../assets/images/user-org-icon.png";
import meeraImage from "../../assets/images/user-org.png";
import karanImage from "../../assets/images/user-org-icon.png";
import nishaImage from "../../assets/images/user-org.png";
import aartiImage from "../../assets/images/user-org-icon.png";

function MechTestimonials() {
  const testimonials = [
    {
      name: "Vikram Singh - Junior Mechanical Engineer",
      department: "Mechanical Engineering",
      year: "Batch-24",
      text: '"ICEM provided me with the skills and knowledge I needed to succeed in the engineering world. The faculty and resources are top-notch!"',
      image: vikramImage,
    },
    {
      name: "Simran Kaur - Mechanical Engineer Trainee",
      department: "Mechanical Engineering",
      year: "Batch-23",
      text: '"The exposure to real-world projects and internships helped me land a job at a leading manufacturing firm straight out of college! The curriculum is well-structured and focused on practical skills."',
      image: simranImage,
    },
    {
      name: "Arjun Rao - Junior Mechanical Engineer",
      department: "Mechanical Engineering",
      year: "Batch-25",
      text: '"ICEM is a fantastic place to study, with the best infrastructure and an extremely supportive environment! The labs are fully equipped, and the faculty is very experienced."',
      image: arjunImage,
    },
    {
      name: "Meera Patel - Mechanical Engineering Intern",
      department: "Mechanical Engineering",
      year: "Batch-24",
      text: '"The practical experience I gained at ICEM really helped me adapt quickly to the fast-paced engineering industry! The focus on real-world applications and exposure to emerging technologies was invaluable."',
      image: meeraImage,
    },
    {
      name: "Karan Desai - CAD Design Intern",
      department: "Mechanical Engineering",
      year: "Batch-24",
      text: '"I had access to top-tier resources and mentorship, making my learning journey smooth and enriching! ICEM\'s environment encouraged creativity and collaboration."',
      image: karanImage,
    },
    {
      name: "Nisha Gupta - Junior Design Engineer",
      department: "Mechanical Engineering",
      year: "Batch-25",
      text: '"The real-world challenges and hands-on projects at ICEM were the highlight of my college life! The faculty ensures that we are always up-to-date with the latest industry trends and technologies."',
      image: nishaImage,
    },
    {
      name: "Aarti Sharma - Junior Mechanical Engineer",
      department: "Mechanical Engineering",
      year: "Batch-25",
      text: '"I really appreciate the practical approach of ICEM’s curriculum. The exposure to live projects and industry experts during my time there helped me grow as a professional."',
      image: aartiImage,
    }
  ];

  const settings = {
    dots: true, // Navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 slide at a time
    slidesToScroll: 1,
    vertical: false, // Horizontal scrolling
    centerMode: true, // Center the active slide
    centerPadding: "0", // No padding around centered slide
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Set autoplay speed (5 seconds here)
    pauseOnHover: false, // Disable stopping on hover
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Function to pair testimonials for each slide
  const pairedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    pairedTestimonials.push([testimonials[i], testimonials[i + 1]]);
  }

  return (
    <div className="w-full px-4 md:px-16"> {/* Set the main container to full width */}
      <div className="flex justify-center mb-8">
        <h2 className="text-4xl font-semibold text-[#ff7f4f] text-center w-full">
          What Our Students Say
        </h2>
      </div>

      <div className="bg-white shadow-lg p-8 rounded-lg">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Testimonial Section */}
          <div className="w-full lg:w-full"> {/* Make the testimonial section full width */}
            <Slider {...settings}>
              {pairedTestimonials.map((pair, index) => (
                <div key={index} className="flex flex-col gap-8 px-2">
                  <div className="p-6 flex flex-col mb-6 bg-[#ffefda] border border-[#ff7f4f] rounded-lg">
                    <div className="flex items-center mb-4">
                      <img
                        src={pair[0].image}
                        alt={pair[0].name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div className="text-left">
                        <p className="text-lg font-semibold text-[#4e4e4e]">{pair[0].name}</p>
                        <hr className="my-1 border-t border-gray-300" />
                        <p className="text-sm text-[#ff7f4f]">{pair[0].department} | {pair[0].year}</p>
                      </div>
                    </div>
                    <p className="text-[#4e4e4e]">{pair[0].text}</p>
                  </div>

                  {pair[1] && (
                    <div className="p-6 flex flex-col mb-6 bg-[#ffefda] border border-[#ff7f4f] rounded-lg">
                      <div className="flex items-center mb-4">
                        <img
                          src={pair[1].image}
                          alt={pair[1].name}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div className="text-left">
                          <p className="text-lg font-semibold text-[#4e4e4e]">{pair[1].name}</p>
                          <hr className="my-1 border-t border-gray-300" />
                          <p className="text-sm text-[#ff7f4f]">{pair[1].department} | {pair[1].year}</p>
                        </div>
                      </div>
                      <p className="text-[#4e4e4e]">{pair[1].text}</p>
                    </div>
                  )}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MechTestimonials;
