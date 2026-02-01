import useDocumentMeta from "../components/useDocumentMeta/useDocumentMeta.js";
import Hero from "../components/hero/Hero.jsx";
import How from "../components/how/How.jsx";
import Projects from "../components/projects/Projects.jsx";
import Cards from "../components/cards/Cards.jsx";
import Clients from "../components/clients/Clients.jsx";
import Accordion from "../components/accordion/Accordion.jsx";
import Cta from "../components/cta/Cta.jsx";
import heroImage from "../../images/hero/image.svg";

function Main() {
    useDocumentMeta({
    title: "Finsweet | Home",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  });
  const accordionData = [
    {
      title: "How much time does it take?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "What is your class naming convention?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "How do you communicate?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "I have a bigger project. Can you handle it?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <>
      <Hero
        title="Building stellar websites for early startups"
        description="Nullam vitae purus at tortor mattis dapibus."
        image={{
          src: heroImage,
          alt: "Hero illustration",
        }}
        buttons={[
          {
            label: "View our work",
            className: "button--yellow",
            onClick: () => console.log("Work"),
            to: "/works",
          },
          {
            label: "View Pricing",
            className: "button--arrow",
            to: "/pricing",
            icon: (
              <svg width="25" height="12" viewBox="0 0 25 12">
                <path d="M24.5303 6.05377C24.8232 5.76087..." fill="#F4F6FC" />
              </svg>
            ),
          },
        ]}
      />
      <How />
      <Projects />

      <Cards
        label="Features"
        title="Design that solves problems, one product at a time"
        items={[
          {
            icon: 1,
            title: "Uses Client First",
            text: "Euismod faucibus turpis eu gravida mi.",
          },
          {
            icon: 2,
            title: "Two Free Revision Round",
            text: "Euismod faucibus turpis eu gravida mi.",
          },
          {
            icon: 3,
            title: "Template Customization",
            text: "Euismod faucibus turpis eu gravida mi.",
          },
          {
            icon: 4,
            title: "24/7 Support",
            text: "Euismod faucibus turpis eu gravida mi.",
          },
          {
            icon: 5,
            title: "Quick Delivery",
            text: "Euismod faucibus turpis eu gravida mi.",
          },
          {
            icon: 6,
            title: "Hands-on approach",
            text: "Euismod faucibus turpis eu gravida mi.",
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

      <Cta />
    </>
  );
}

export default Main;
