import React, { useState, Suspense, lazy } from 'react';
import { darkTheme, getTheme, lightTheme, setTheme } from './Components/Theme';
import NavBar from './Components/Header/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

// Lazy-loaded components
const Home = lazy(() => import('./Components/Pages/Home'));
const Menu = lazy(() => import('./Components/Pages/Menu'));
const MyFavorites = lazy(() => import('./Components/Pages/Favorites'));
const MealGenerator = lazy(() => import('./Components/Pages/MealGenerator'));
const AboutMe = lazy(() => import('./Components/Pages/AboutMe'));
const Meals = lazy(() => import('./Components/Pages/Meals'));


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(getTheme() === 'dark');
  const selectedTheme = getTheme() === 'dark' ? darkTheme : lightTheme;

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    setTheme(newTheme);
  };

  return (
    <ThemeProvider theme={selectedTheme}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/my-favorites" element={<MyFavorites />} />
            <Route path="/meal-generator" element={<MealGenerator />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/menu/:category" element={<Meals />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
