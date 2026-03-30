import "./App.css";
import Fotter from "./components/Fotter";
import HeroSection from "./components/HeroSection";
import Navber from "./components/Navber";
import PricingSection from "./components/PricingSection";
import ReadySection from "./components/ReadySection";
import StatsSection from "./components/StatsSection";
import StepsSection from "./components/StepsSection";

function App() {
  return (
    <>
      <Navber></Navber>
      <HeroSection></HeroSection>
      <StatsSection></StatsSection>
      <StepsSection></StepsSection>
      <PricingSection></PricingSection>
      <ReadySection></ReadySection>
      <Fotter></Fotter>
    </>
  );
}

export default App;
