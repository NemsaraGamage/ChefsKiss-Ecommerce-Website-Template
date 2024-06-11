import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage';

// npm run deploy

const RouteConfig = () => {
  return (
    <Router>
      
      <Routes>
        {/* Mainpage routes */}
        <Route index element={<MainPage />} />
        <Route path='/MovieBlocks-Ecommerce-Website-Template' element={<MainPage />} />
       
        {/* <Route path="/comedy" element={<ComedyPage />} />

        <Route path="/tvshow" element={<TvShowSecPage />} />

        <Route path="/toppicks" element={<TopPicks />} /> */}
      </Routes>
    </Router>
  );
}

export default RouteConfig;