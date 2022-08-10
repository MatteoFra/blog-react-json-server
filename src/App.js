import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Blog from './pages/Blog';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog />} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
