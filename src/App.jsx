import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import HomeSection from "./components/HomeSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
import JourneySection from "./components/JourneySection.jsx";
import SkillSection from "./components/SkillSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import "./App.css";

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gray-800">
      <Navbar />
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HomeSection />
        <AboutSection />
        <ProjectSection />
        <JourneySection />
        <SkillSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
