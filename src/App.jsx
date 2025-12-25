import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import * as bootstrap from 'bootstrap'
import Accueil from "./pages/Accueil";
import Contact from "./pages/contact";
import Navigation from "./navigation";
import Footer from "./footer";
import Services from "./pages/services";
import Portfolio from "./pages/portfolio";
import Mentions from "./pages/mentions";

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