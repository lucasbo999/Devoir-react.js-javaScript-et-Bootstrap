import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./Accueil";
import Contact from "./contact";
import Navigation from "./navigation";
import Footer from "./footer";
import Services from "./services";
import Portfolio from "./portfolio";
import Mentions from "./mentions";

function App() {
  return (
  <BrowserRouter>
    <Navigation />
    
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/mentions légales" element={<Mentions />} />
    </Routes>

    <Footer />
  </BrowserRouter>

);
}

export default App;