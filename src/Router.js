import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Archive from "./pages/Archive/Archive";
import About from "./pages/About/About";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/me" element={<Home />} />
        <Route path="/me/Archive" element={<Archive />} />
        <Route path="/me/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;