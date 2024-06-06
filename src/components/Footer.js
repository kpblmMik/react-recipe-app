import React from 'react';
import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`p-4 text-center bottom-0 w-full ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
      <div className="container mx-auto">
        &copy; 2024 Recipe App
      </div>
    </footer>
  );
}

export default Footer;
