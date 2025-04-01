import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 

const sponsorsData = [
  {
    title: "PARTICIPATING DELEGATES",
    logos: [
      "/src/assets/images/MECH-images/skf.avif",
      "/src/assets/images/MECH-images/kpit.avif",
      "/src/assets/images/MECH-images/force.avif",
      "/src/assets/images/MECH-images/hettich.avif",
      "/src/assets/images/MECH-images/kpit.avif",
      "/src/assets/images/MECH-images/rudder.avif",
    ],
  },
  {
    title: "PARTICIPATING DELEGATES",
    logos: [
      
      "/src/assets/images/MECH-images/bluestar.avif",
      "/src/assets/images/MECH-images/tata.avif",
      "/src/assets/images/MECH-images/techM.avif",
      "/src/assets/images/MECH-images/thai.avif",
      "/src/assets/images/MECH-images/thys.avif",
      "/src/assets/images/MECH-images/abc.avif",
      
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
    <div className="text-xl md:text-3xl font-bold text-gray-800 mb-6">
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
