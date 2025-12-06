import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./template-parts/partials/header/Header.jsx";
import Footer from "./template-parts/partials/footer/Footer";
import Hero from "./template-parts/components/hero/Hero.jsx";


function App() {
  return (
    <Router>
      <Header />

      <Hero />

      <Footer />
    </Router>
  );
}

export default App;
