import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import ButtonWhatsApp from "./components/ButtonWhatsApp";
import Domicile from "./components/Domicile";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Domicile />
      <Team />
      <Cta />
      <Footer />
      <ButtonWhatsApp />
    </>
  );
}

export default App;
