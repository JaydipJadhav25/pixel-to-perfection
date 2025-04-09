import React from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  Building2Icon,
  CalendarIcon,
  PhoneIcon,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col shadow-lg">
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        ACES Portal
      </div>
      <nav className="flex-1 px-4 py-6 space-y-4">
        <Link
          to="/"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition"
        >
          <HomeIcon className="w-5 h-5" />
          <span>Home</span>
        </Link>

        <Link
          to="/department"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition"
        >
          <Building2Icon className="w-5 h-5" />
          <span>Department</span>
        </Link>

        <Link
          to="/events"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition"
        >
          <CalendarIcon className="w-5 h-5" />
          <span>Events</span>
        </Link>

        <Link
          to="/contact"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition"
        >
          <PhoneIcon className="w-5 h-5" />
          <span>Contact</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
gi