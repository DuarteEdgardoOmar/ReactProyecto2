import React from "react";
import "boxicons";
import "./App.css";
// import { Footer } from "./componentes/Footer";
// import Cards from "./componentes/Cards";
// import Carousel from "./componentes/Carousel";
// import { Body } from "./componentes/Body";
// import HeroImage from "./componentes/HeroImage";
// import ShoppingCar from "./componentes/ShoppingCar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto.jsx";
import Seguros from "./pages/Seguros.jsx";
import Inicio from "./pages/Inicio";
import ShoppingCar from "./pages/ShoppingCar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Seguros" element={<Seguros />} />
        <Route path="/ShoppingCar" element={<ShoppingCar/>}/>
      </Routes>

      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
