import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`} data-testid="app-selector">
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
        </Routes>
      </Main>
      <Footer />
    </div>
  );
}

const App = () => (
  <ThemeProvider>
    <Router>
      <AppContent />
    </Router>
  </ThemeProvider>
);

export default App;
