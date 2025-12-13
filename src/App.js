import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./template-parts/partials/header/Header.jsx";
import Hero from "./template-parts/components/hero/Hero.jsx";
import How from "./template-parts/components/how/How.jsx";
import Projects from "./template-parts/components/projects/Projects.jsx";
import Footer from "./template-parts/partials/footer/Footer.jsx";

function App() {
  return (
    <Router>
      <Header />

      <Hero />

      <How />

      <Projects />

      <Footer />
    </Router>
  );
}

export default App;
