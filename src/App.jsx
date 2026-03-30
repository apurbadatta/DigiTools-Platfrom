import "./App.css";
import HeroSection from "./components/HeroSection";
import Navber from "./components/Navber";
import StatsSection from "./components/StatsSection";
import StepsSection from "./components/StepsSection";

function App() {
  return (
    <>
      <Navber></Navber>
      <HeroSection></HeroSection>
      <StatsSection></StatsSection>
      <StepsSection></StepsSection>
    </>
  );
}

export default App;
