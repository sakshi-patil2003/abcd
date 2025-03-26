import React from 'react';

// Import images
import logo from '../../src/assets/ICEM-Logo.png';
import autonomousLogo from '../../src/assets/images/ICEM-Autonomous-logo.png';

function Navbar() {
  return (
    <nav className="bg-gray-900 shadow-lg w-full">
      <div className="mx-auto flex items-center justify-between px-4 sm:px-8 md:px-16 py-4">
        
        {/* Left Logo */}
        <div className="p-2 flex-shrink-0">
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="h-auto max-w-[140px] sm:max-w-[170px] md:max-w-[200px]"
            />
          </a>
        </div>

        {/* Right Logo */}
        <div className="p-2 flex-shrink-0">
          <a href="/">
            <img
              src={autonomousLogo}
              alt="Autonomous Logo"
              className="h-auto max-w-[100px] sm:max-w-[120px] md:max-w-[160px]"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
