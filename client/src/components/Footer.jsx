import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Platform Branding */}
        <div className="text-xl font-bold">
          ACES Centralized Platform
        </div>

        {/* Quick Navigation Links */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-300">
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/events" className="hover:text-white transition">Events</a>
          <a href="/directory" className="hover:text-white transition">Directory</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg className="w-5 h-5 hover:text-pink-400 transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2.1.3 2.6.5.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.4 1.4.5 2.6.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2.1-.5 2.6-.2.6-.5 1-.9 1.5-.5.5-.9.8-1.5 1-.5.2-1.4.4-2.6.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2.1-.3-2.6-.5-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.4-1.4-.5-2.6C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2.1.5-2.6.2-.6.5-1 .9-1.5.5-.5.9-.8 1.5-1 .5-.2 1.4-.4 2.6-.5C8.4 2.2 8.8 2.2 12 2.2M12 0C8.7 0 8.3 0 7 .1 5.6.2 4.5.5 3.6.9 2.7 1.3 2 1.8 1.3 2.6.6 3.3.2 4.1 0 5 .1 6.2 0 6.6 0 12s.1 5.8.1 7c.1 1.4.3 2.5.7 3.4.4.9.9 1.6 1.7 2.3.7.7 1.4 1.2 2.3 1.6.9.4 2 .6 3.4.7 1.2.1 1.6.1 7 .1s5.8 0 7-.1c1.4-.1 2.5-.3 3.4-.7.9-.4 1.6-.9 2.3-1.6.7-.7 1.2-1.4 1.6-2.3.4-.9.6-2 .7-3.4.1-1.2.1-1.6.1-7s0-5.8-.1-7c-.1-1.4-.3-2.5-.7-3.4-.4-.9-.9-1.6-1.6-2.3C21.6.5 20.8.1 19.9 0c-1.2-.1-1.6-.1-7-.1S5.8 0 4.6.1C3.3.2 2.2.4 1.3.9c-.9.4-1.6.9-2.3 1.6C.5 3.3.1 4.1 0 5c-.1 1.2-.1 1.6-.1 7s0 5.8.1 7c.1 1.4.3 2.5.7 3.4.4.9.9 1.6 1.6 2.3.7.7 1.4 1.2 2.3 1.6.9.4 2 .6 3.4.7 1.2.1 1.6.1 7 .1s5.8 0 7-.1c1.4-.1 2.5-.3 3.4-.7.9-.4 1.6-.9 2.3-1.6.7-.7 1.2-1.4 1.6-2.3.4-.9.6-2 .7-3.4.1-1.2.1-1.6.1-7s0-5.8-.1-7c-.1-1.4-.3-2.5-.7-3.4-.4-.9-.9-1.6-1.6-2.3-.7-.7-1.4-1.2-2.3-1.6C19.5.5 18.4.2 17 .1 15.8 0 15.3 0 12 0zM12 5.8c-3.4 0-6.2 2.8-6.2 6.2S8.6 18.2 12 18.2s6.2-2.8 6.2-6.2S15.4 5.8 12 5.8zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-11.5c0 .8-.7 1.5-1.5 1.5S15.4 5.3 15.4 4.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5z"/>
            </svg>
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg className="w-5 h-5 hover:text-blue-400 transition" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.2c-1 0-1.8-.8-1.8-1.8S5.5 5.2 6.5 5.2s1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.5 10.2h-3v-4.6c0-1.1-.4-1.8-1.3-1.8-.7 0-1.1.5-1.3.9-.1.2-.1.5-.1.8v4.7h-3s.1-7.6 0-8.4h3v1.2c.4-.6 1-1.4 2.5-1.4 1.9 0 3.2 1.2 3.2 3.8v4.8z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-400 mt-4">
        © {new Date().getFullYear()} ACES | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
