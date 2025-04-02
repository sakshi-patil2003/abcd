import React from 'react';
import bannerImage from '../../assets/images/Com-Images/CompPlacement.avif';

const ComPlacement = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Responsive Image with Breakpoints */}
      <img
        src={bannerImage}
        alt="Mech Placement"
        className="w-full h-auto object-cover 
          sm:h-48 md:h-60 lg:h-72 xl:h-[330px] 2xl:h-[350px] 
          transition-all duration-300 ease-in-out" // Added transition effect for smooth resizing
      />
    </div>
  );
}

export default ComPlacement;
