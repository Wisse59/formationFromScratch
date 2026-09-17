//import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import CoupCoeur from "./pages/CoupCoeur";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/coupdecoeur" element={<CoupCoeur />} />
        <Route path="*" element={<Accueil />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;