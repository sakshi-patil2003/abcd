import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
import logo1 from '../../assets/images/MECH-images/bluestar.avif';
import logo2 from '../../assets/images/MECH-images/kpit.webp';
import logo3 from '../../assets/images/MECH-images/force.avif';
import logo4 from '../../assets/images/MECH-images/hettich.avif';
import logo5 from '../../assets/images/MECH-images/rudder.avif';
import logo6 from '../../assets/images/MECH-images/skf.avif';
import logo7 from '../../assets/images/MECH-images/tata.avif';
import logo8 from '../../assets/images/MECH-images/techM.avif';
import logo9 from '../../assets/images/MECH-images/thai.avif';
import logo10 from '../../assets/images/MECH-images/thys.avif';
import logo11 from '../../assets/images/MECH-images/abc.avif';
import logo12 from '../../assets/images/MECH-images/rudder.avif';

 
const sponsorsData = [
  {
    title: "PARTICIPATING DELEGATES",
    logos: [logo1, logo2, logo3, logo4, logo5, logo6,],
  },
  {
    title: "PARTICIPATING DELEGATES",
    logos: [ logo7, logo8, logo9, logo10,logo11, logo12,],
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
    <div className="flex flex-col justify-center items-center py-6 md:py-12 bg-white px-4 md:px-16 font-poppins overflow-hidden">
      <div className="text-xl md:text-4xl font-semibold text-[#104552] mb-6">
        Our Recruiters
      </div>
 
      <Slider {...settings} className="w-full">
        {sponsorsData.map((slide, index) => (
          <div key={index} className="w-full">
            {/* Grid with 5 columns ensuring full width */}
            <div className="grid grid-cols-6 gap-2 w-full">
              {slide.logos.map((logo, idx) => (
                <div key={idx} className="flex justify-center items-center">
                  <img
                    src={logo}
                    alt={`Logo ${idx + 1}`}
                    className="w-full h-auto max-h-32 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
 
export default MechRecruiters;