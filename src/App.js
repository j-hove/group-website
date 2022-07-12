import React from "react";
import Header from "./components/Header";
import OurTeam from "./components/OurTeam";
import Footer from "./components/Footer";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Header />
      <OurTeam />
      <Footer year={new Date().getFullYear()} />
    </main>
  );
}
