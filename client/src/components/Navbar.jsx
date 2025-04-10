import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo & College Name */}
        <div className="flex items-center space-x-3">
          {/* Replace with your college logo image */}
          <img
            src="/logo.png" // 👈 Replace with your actual logo path
            alt="College Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-semibold text-blue-800">Association of Computer Engineering Students (ACES) </span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 font-medium text-gray-700">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Department</li>
          <li className="hover:text-blue-600 cursor-pointer">Events</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
