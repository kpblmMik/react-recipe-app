import React from 'react';
import { useTheme } from "../contexts/ThemeContext";

const Main = ({ children }) => {
  const { theme } = useTheme();

  return (
    <main className={`flex-grow container mx-auto my-8 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
      {children}
    </main>
  );
}

export default Main;
