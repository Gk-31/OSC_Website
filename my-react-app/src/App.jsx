// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Playlists from "./pages/Playlists";
import Recruit from "./pages/Recruit";
import RecruitmentForm from "./pages/RecruitmentForm";
import Events from "./pages/Events";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Recruit" element={<Recruit />} />
        <Route path="/apply" element={<RecruitmentForm />} />
        <Route path="/events" element={<Events />} />
        <Route path="/" element={<Playlists />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;