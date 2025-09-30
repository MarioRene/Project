import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar/Sidebar";
import MainContent from "./components/MainContent";
import VideoGallery from "./components/Portafolio/components/VideoGallery";
import VideoPage from "./components/Portafolio/components/VideoPage";
import PortafolioSlider from "./components/PortafolioSlider/PortfolioSlider";
import PremiumPlans from "./components/planes/PremiumPlans"
import Ingreso from "./components/login/Ingreso"
import M_Mdmin from "./components/modulo_admin/M_Mdmin" 
import "./App.css";

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/portafolio" element={<VideoGallery />} />
        <Route path="/video/:id" element={<VideoPage />} />
        <Route path="/foto" element={<PortafolioSlider />} />
        <Route path="/servicios" element={<PremiumPlans />} />
        <Route path="/inicio" element={<Ingreso />} />
        <Route path="/admin" element={<M_Mdmin />} />
      </Routes>
    </>
  );
}

export default App;
