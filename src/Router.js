import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";
import About from "./pages/About/About";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/me" element={<Home />} />
        <Route path="/me/post" element={<Post />} />
        <Route path="/me/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;