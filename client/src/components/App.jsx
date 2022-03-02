import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./partials/Navbar";
import Footer from "./partials/Footer";
import Addcar from "./addData/Addcar";
import Model from "./Model";
import Cars from "./Cars";
import Home from "./Home";
import Addnews from "./addData/Addnews";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addcar" element={<Addcar />} />
        <Route path="addnews" element={<Addnews />} />
        <Route path="/model/:id" element={<Model />} />
        <Route path="/cars/:brand" element={<Cars />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
