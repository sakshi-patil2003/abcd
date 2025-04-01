import React from 'react';
import placementBanner from '../../assets/images/Entc-Images/banner.avif'; // Adjust the path accordingly
 
const EntcPlacement = () => {
  return (
    <div className="w-full">
      <img src={placementBanner} alt="ICEM Top Placements Banner" className="w-full h-auto" />
    </div>
  );
};
 
export default EntcPlacement;