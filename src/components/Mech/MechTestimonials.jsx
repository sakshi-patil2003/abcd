import React from "react";
import Slider from "react-slick"; // Importing react-slick

// Image Imports
import vikramImage from "../../assets/images/user-org-icon.png";


function MechTestimonials() {
  const testimonials = [
    {
      name: "Vikram Singh - Junior Mechanical Engineer",
      department: "Mechanical Engineering",
      year: "Batch-24",
      text: '"ICEM has been the launchpad for my engineering dreams. With world-class faculty, cutting-edge labs, and industry-focused training, I’ve gained the confidence to step into the professional world. The hands-on experience here has truly shaped my career!"',
      image: vikramImage,
    },
    {
      name: "Simran Kaur - Mechanical Engineer Trainee",
      department: "Mechanical Engineering",
      year: "Batch-23",
      text: 'My journey at ICEM has been nothing short of amazing! The curriculum, practical exposure, and placement opportunities have prepared me for industry challenges. I am grateful for the immense learning and growth I have experienced here.',
      image: vikramImage,
    },
    {
      name: "Arjun Rao - Junior Mechanical Engineer",
      department: "Mechanical Engineering",
      year: "Batch-25",
      text: 'ICEM prepares you for the real world. The Industry Readiness Programme, expert guidance, and technical workshops have given me a competitive edge. I feel fully equipped to excel in my career.',
      image: vikramImage,
    },
    {
      name: "Karan Desai - CAD Design Intern",
      department: "Mechanical Engineering",
      year: "Batch-24",
      text: 'The learning environment at ICEM is dynamic, inspiring, and filled with opportunities. The modern infrastructure, Apple labs, and top-notch faculty have helped me sharpen my technical and analytical skills, making me industry-ready.',
      image: vikramImage,
    },
    {
      name: "Aarti Sharma - Junior Mechanical Engineer",
      department: "Mechanical Engineering",
      year: "Batch-25",
      text: 'Engineering at ICEM has been an enriching journey of knowledge, innovation, and professional growth. The support from faculty and the placement cell has helped me secure a great opportunity in my field of interest.',
      image: vikramImage,
    },
    {
      name: "Aarti Sharma - Junior Mechanical Engineer",
      department: "Mechanical Engineering",
      year: "Batch-25",
      text: 'ICEM has given me a home away from home, where I’ve built friendships, explored my potential, and grown beyond academics. The mix of technical learning, cultural events, and career support makes ICEM an unforgettable experience.',
      image: vikramImage,
    },
    {
      name: "Aarti Sharma - Junior Mechanical Engineer",
      department: "Mechanical Engineering",
      year: "Batch-25",
      text: 'At ICEM, learning goes beyond textbooks. With hands-on projects, industrial visits, and expert mentorship, I have developed real-world problem-solving skills. The exposure here has been instrumental in shaping my engineering journey.',
      image: vikramImage,
    },
    {
      name: "Aarti Sharma - Junior Mechanical Engineer",
      department: "Mechanical Engineering",
      year: "Batch-25",
      text: 'Choosing ICEM for my engineering studies was the best decision. The rigorous training, campus placements, and exposure to emerging technologies have helped me secure a promising career. ICEM truly prepares you for the future!',
      image: vikramImage,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="mb-8 px-8 md:px-16">
      {/* Main Heading */}
      <div className="flex justify-center">
        <h2 className="text-3xl md:text-4xl mt-6 font-semibold text-[#ff7f4f] text-center">
          What Our Students Say
        </h2>
      </div>

      {/* Testimonial Slider */}
      <div className="bg-white shadow-lg p-4 sm:p-6">
        <Slider {...settings}>
          {testimonials.map((testimonial, i) => (
            <div key={i} className="p-2">
              {/* Testimonial Card */}
              <div className="bg-[#ffefda] border-2 border-[#ff7f4f] rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-[90%] sm:w-auto mx-auto sm:mx-0 flex flex-col justify-between h-[380px]">
                {/* Profile Icon at the Top */}
                <div className="flex justify-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white shadow-lg"
                  />
                </div>

                {/* Name */}
                <p className="text-lg font-semibold text-[#4e4e4e] text-center">
                  {testimonial.name}
                </p>
                {/* Department and Year */}
                <p className="text-sm text-[#ff7f4f] text-center">
                  {testimonial.department} | {testimonial.year}
                </p>
                <hr className="my-1 border-t border-gray-300" />
                {/* Testimonial Text */}
                <div className="flex-grow">
                  <p className="text-[#4e4e4e] text-center text-sm h-[120px] overflow-hidden ">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default MechTestimonials;
