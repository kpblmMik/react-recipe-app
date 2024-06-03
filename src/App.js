import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';

const App = () => (
  <Router>
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
        </Routes>
      </Main>
      <Footer />
    </div>
  </Router>
);

export default App;
