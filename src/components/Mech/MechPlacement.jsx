import React from 'react';
import placementImage from '/public/Mech-Images/MechB2.avif'; // Replace with your image path

const MechPlacement = () => {
  return (
    <div className="w-full">
      {/* Responsive Image */}
      <img
        src={placementImage}
        alt="Mech Placement"
        className="w-full h-auto object-cover sm:h-64 md:h-96 lg:h-[370px]"
      />
    </div>
  );
};

export default MechPlacement;
