import React, { useState } from "react";
import "./App.css";
import Fotter from "./components/Fotter";
import HeroSection from "./components/HeroSection";
import Navber from "./components/Navber";
import PricingSection from "./components/PricingSection";
import ProductSection from "./components/ProductSection";
import ReadySection from "./components/ReadySection";
import StatsSection from "./components/StatsSection";
import StepsSection from "./components/StepsSection";

function App() {
 
  const [cart, setCart] = useState([]);

  return (
    <>
     
      <Navber cartCount={cart.length} />
      
      <HeroSection />
      <StatsSection />

    
      <ProductSection cart={cart} setCart={setCart} />
      
      <StepsSection />
      <PricingSection />
      <ReadySection />
      <Fotter />
    </>
  );
}

export default App;