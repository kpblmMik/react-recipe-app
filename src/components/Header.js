import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from "../contexts/ThemeContext";
import { Sun, Moon } from 'lucide-react';

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (

  <header className={`flex justify-between items-center p-4 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
    <nav className="container mx-auto">
      <Link to="/" className="text-xl">Recipe App</Link>
    </nav>
    <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-300 dark:bg-gray-600">
        {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
      </button>
  </header>
);
}

export default Header;