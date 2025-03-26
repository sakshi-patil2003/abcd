import React from 'react';

// Import images
import logo from '../../src/assets/images/logos/ICEM - logo 2.png';
import autonomousLogo from '../../src/assets/images/ICEM-Autonomous-logo.png';

function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-lg w-full">
      <div className="mx-auto flex items-center justify-between px-3 sm:px-6 md:px-16 py-2 ">
        
        {/* Left Logo */}
        <div className="p-2 flex-shrink-0">
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="h-auto max-w-[180px] sm:max-w-[190px] md:max-w-[220px] lg:max-w-[260px] xl:max-w-[360px]"
            />
          </a>
        </div>

        {/* Right Logo */}
        <div className=" flex-shrink-0">
          <a href="/">
            <img
              src={autonomousLogo}
              alt="Autonomous Logo"
              className="h-auto max-w-[35px] sm:max-w-[30px] md:max-w-[90px] lg:max-w-[110px] xl:max-w-[80px]"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
