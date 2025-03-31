import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define the image paths (can be dynamically imported or hardcoded)
const sponsorsData = [
  {
    title: "IT RECRUITERS",
    logos: [
      "/public/IT-Com-AIDS/palo.avif",
      "/public/IT-Com-AIDS/philips.avif",
      "/public/IT-Com-AIDS/yash.avif",
      "/public/IT-Com-AIDS/jaspay.avif",
      "/public/IT-Com-AIDS/zs.avif",
      "/public/IT-Com-AIDS/avalara.avif",
      "/public/IT-Com-AIDS/capgi.avif",
      "/public/IT-Com-AIDS/dataaxle.avif",
      "/public/IT-Com-AIDS/e-zest.avif",
      "/public/IT-Com-AIDS/gslab.avif",
      "/public/IT-Com-AIDS/fis.avif",
      "/public/IT-Com-AIDS/gslab.avif",
    ],
  },
  {
    title: "IT RECRUITERS",
    logos: [
      "/public/IT-Com-AIDS/infosys.avif",
      "/public/IT-Com-AIDS/kpit.avif",
      "/public/IT-Com-AIDS/kpmg.avif",
      "/public/IT-Com-AIDS/l&T.avif",
      "/public/IT-Com-AIDS/nttdata.avif",
      "/public/IT-Com-AIDS/Persistent.avif",
      "/public/IT-Com-AIDS/pubmatic.avif",
      "/public/IT-Com-AIDS/sas.avif",
      "/public/IT-Com-AIDS/Tcs.avif",
      "/public/IT-Com-AIDS/tibco.avif",
      "/public/IT-Com-AIDS/e-zest.avif",
      "/public/IT-Com-AIDS/veritas.avif",
    ],
  },
];

const CompRecruter = () => {
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
    <div className="flex flex-col justify-center items-center py-2 md:py-12 bg-white px-4 md:px-16 overflow-hidden">
      {/* Heading above the slider */}
      <div className="text-xl md:text-4xl font-semibold text-[#001E5D] mb-2 text-center">
        Our IT Recruiters
      </div>

      <Slider {...settings} className="w-full">
        {sponsorsData.map((slide, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex flex-row justify-center items-center w-full px-4">
              <div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center w-full px-4"
                style={{ gridTemplateRows: "repeat(2, auto)" }} // Enforcing only two rows
              >
                {slide.logos.map((logo, idx) => (
                  <div key={idx} className="flex justify-center">
                    <img
                      src={logo}
                      alt={`Logo ${idx + 1}`}
                      className="rounded-none shadow-none w-full h-auto object-contain" // Logos will scale dynamically without any background styling
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

export default CompRecruter;
