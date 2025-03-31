import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
import logo1 from "../../assets/images/Mech-Images/bluestar.avif";
import logo2 from "../../assets/Images/Mech-Images/faurecia.avif";
import logo3 from "../../assets/Images/Mech-Images/force.avif";
import logo4 from "../../assets/images/Mech-Images/hettich.avif";
import logo5 from "../../assets/Images/Mech-Images/kpit.avif";
import logo6 from "../../assets/Images/Mech-Images/rudder.avif";
import logo7 from "../../assets/Images/Mech-Images/skf.avif";
import logo8 from "../../assets/Images/Mech-Images/tata.avif";
import logo9 from "../../assets/Images/Mech-Images/techM.avif";
import logo10 from "../../assets/Images/Mech-Images/thai.avif";
import logo11 from "../../assets/Images/Mech-Images/thys.avif";
import logo12 from "../../assets/Images/Mech-Images/abc.avif";

const sponsorsData = [
  {
    title: "PARTICIPATING DELEGATES",
    logos: [
      logo1,
      logo2,
      logo3,
      logo4,
      logo5,
      logo6,
      
      
    ],
  },
  {
    title: "PARTICIPATING DELEGATES",
    logos: [
      
      logo7,
      logo8,
      logo9,
      logo10,
      logo11,
      logo12,
      
    ],
  },
];

const MechRecruiters = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
  return (
    <div className="flex poppins-regular flex-col justify-center items-center py-6 md:py-12 bg-white px-0 md:px-16 font-poppins overflow-hidden">
    {/* Heading above the slider */}
    <div className="text-xl md:text-3xl font-semibold text-gray-800 mb-6">
      Our Recruiters
    </div>

    <Slider {...settings} className="w-full">
      {sponsorsData.map((slide, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="flex flex-row justify-center items-center w-full px-4">
            <div
              className="grid grid-cols-3 md:grid-cols-6 gap-4 justify-items-center w-full px-6"
              style={{ gridTemplateRows: "repeat(2, auto)" }} // Enforcing only two rows
            >
              {slide.logos.map((logo, idx) => (
                <div key={idx} className="flex justify-center">
                  <img
                    src={logo}
                    alt={`Logo ${idx + 1}`}
                    className="rounded-none shadow-none w-auto h-auto object-contain" // Logos will scale dynamically without any background styling
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
  );
};

export default MechRecruiters;
