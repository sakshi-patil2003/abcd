import React from 'react';
import bannerImage from '../../assets/images/ComPlacement (2).jpg';

const ComPlacement = () => {
  return (
    <div className="w-full overflow-hidden"> {/* Prevent overflow of container */}
      {/* Responsive Image */}
      <img
        src={bannerImage}
        alt="Mech Placement"
        className="w-full h-auto object-cover sm:h-50 md:h-60 lg:h-[320px] xl:h-[330px]" // Ensuring good control over height on all breakpoints
      />
    </div>
  );
}

export default ComPlacement;
