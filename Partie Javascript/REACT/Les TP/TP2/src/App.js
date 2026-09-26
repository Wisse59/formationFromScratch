import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import CoupCoeur from "./pages/CoupCoeur";

function App() {
  const [mesCoupsCoeurs, setMesCoupsCoeurs] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil mesCoupsCoeurs={mesCoupsCoeurs} setMesCoupsCoeurs={setMesCoupsCoeurs} />} />
        <Route path="/coupdecoeur" element={<CoupCoeur mesCoupsCoeurs={mesCoupsCoeurs} setMesCoupsCoeurs={setMesCoupsCoeurs} />} />
        <Route path="*" element={<Accueil mesCoupsCoeurs={mesCoupsCoeurs} setMesCoupsCoeurs={setMesCoupsCoeurs} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;