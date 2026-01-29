import Price from "../components/price/Price.jsx";
import Accordion from "../components/accordion/Accordion.jsx";

const Pricing = () => {
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
      title: "How do we communicate?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "I have a bigger project. Can you handle it?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "What is your class naming convention?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <>
      <Price />

      <Accordion
        title="Frequently asked questions"
        description="Contact us for more info"
        items={accordionData}
        defaultActiveIndex={0}
      />
    </>
  );
};

export default Pricing;
