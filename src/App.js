import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./template-parts/partials/header/Header";
import Footer from "./template-parts/partials/footer/Footer";

function App() {
  return (
    <Router>
      <Header />


      <Footer />
    </Router>
  );
}

export default App;
