import "./App.css";
import Aos from "aos";
import { useEffect } from "react";
import Hero from "./pages/Hero"
import Navbar from "./components/Navbar/Navbar";
// Import Router
import { motion } from "framer-motion";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Contact />
    </>
  );
}

export default App;
