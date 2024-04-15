import React, { useState } from "react";

import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import { motion } from 'framer-motion';
import Stats from "./Components/Stats";
import Collection from "./Components/Collection";
import Brands from "./Components/Brands";
import SliderComponent from "./Components/SliderComponent";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      
        <motion.div initial={{ opacity: 0, scaleY: -1, origin: 0 }} animate={{ opacity: 1, scaleY: 1, origin: 0 }} transition={{ delay: 0.5, duration: 1.5 }} className="body">
          <Nav isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
          <Hero  isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        </motion.div>
        <Stats />
        <Collection />
        <Brands />
        <SliderComponent />
        <Contact />
        <Footer />
      
   </>
  );
}

export default App;