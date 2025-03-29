import React from 'react';
import bannerImage from '../../assets/images/ItPlacement.jpg'; // Replace with your banner image path

const ItPlacement = () => {
  return (
<div className="w-full">
      {/* Responsive Image */}
      <img
        src={bannerImage}
        alt="Mech Placement"
        className="w-full h-auto object-cover sm:h-64 md:h-96 lg:h-[370px]"
      />
    </div>
  );
};

export default ItPlacement;
