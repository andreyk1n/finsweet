import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./template-parts/partials/header/Header.jsx";
import Hero from "./template-parts/components/hero/Hero.jsx";
import How from "./template-parts/components/how/How.jsx";
import Projects from "./template-parts/components/projects/Projects.jsx";
import Cards from "./template-parts/components/cards/Cards.jsx";
import Clients from "./template-parts/components/clients/Clients.jsx";
import Accordion from "./template-parts/components/accordion/Accordion.jsx";
import Footer from "./template-parts/partials/footer/Footer.jsx";


function App() {
  const accordionData = [
    {
      title: "Accordion 1",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
    },
    {
      title: "Accordion 2",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
    },
    {
      title: "Accordion 3",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit..."
    }]
  return (
    <Router>
      <Header />

      <Hero />

      <How />

      <Projects />

      <Cards
        className=""
        label="Features"
        title="Design that solves problems, one product at a time"
        items={[
          {
            icon: 1,
            title: "Uses Client First",
            text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
          },
          {
            icon: 2,
            title: "Two Free Revision Round",
            text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
          },
          {
            icon: 3,
            title: "Template Customization",
            text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
          },
          {
            icon: 4,
            title: "24/7 Support",
            text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
          },
          {
            icon: 5,
            title: "Quick Delivery",
            text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
          },
          {
            icon: 6,
            title: "Hands-on approach",
            text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. ",
          },
        ]}
      />

      <Clients />

      <Accordion
        title="Frequently asked questions"
        description="Contact us for more info"
        items={accordionData}
        defaultActiveIndex={0}
      />

      <Footer />
    </Router>
  );
}

export default App;
