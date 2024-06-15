import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import Menu from './components/pages/Menu';
import Plans from './components/pages/Plans';

// npm run deploy

const RouteConfig = () => {
  return (
    <Router>
      
      <Routes>
        {/* Mainpage routes */}
        <Route index element={<MainPage />} />
        <Route path='/MovieBlocks-Ecommerce-Website-Template' element={<MainPage />} />
       
       {/* Menu Page */}
        <Route path="/menu" element={<Menu></Menu>} />

        {/* Plans Page */}
        <Route path="/plan" element={<Plans></Plans>} />

      </Routes>
    </Router>
  );
}

export default RouteConfig;