import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./template-parts/partials/header/Header.jsx";
import Footer from "./template-parts/partials/footer/Footer.jsx";

import ScrollToTop from "./template-parts/components/ScrollToTop/ScrollToTop.jsx";

import Main from "./template-parts/pages/Main.jsx";
import About from "./template-parts/pages/About.jsx";
import Features from "./template-parts/pages/Features.jsx";
import Pricing from "./template-parts/pages/Pricing.jsx";
import Blog from "./template-parts/pages/Blog.jsx";
import Contacts from "./template-parts/pages/Contacts.jsx";
import Post from "./template-parts/pages/Post.jsx";
import Works from "./template-parts/pages/Works.jsx";
import Work from "./template-parts/pages/Work";

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/finsweet" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/works" element={<Works />} />
        <Route path="/work/:id" element={<Work />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
