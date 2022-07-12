import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import OurTeam from "./components/OurTeam";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Header />
      <Home />
      <About />
      <OurTeam />
      <Projects />
      <Contact />
      <Footer year={new Date().getFullYear()} />
    </main>
  );
}
