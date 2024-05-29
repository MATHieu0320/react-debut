// rsc
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Artiste from "./pages/Artiste";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Artiste" element={<Artiste />}></Route>

        {/* si apres le / c autre chose que les pages alors il va sur Home en bas */}
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
