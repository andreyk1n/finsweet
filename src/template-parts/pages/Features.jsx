import Hero from "../components/hero/Hero.jsx";
import Cards from "../components/cards/Cards.jsx";
import Content from "../components/content/Content.jsx";
import Accordion from "../components/accordion/Accordion.jsx";
import heroImage from "../../images/hero/hero--features.svg";
import img3 from "../../images/content/3.jpg";
import img4 from "../../images/content/4.jpg";
import img5 from "../../images/content/5.jpg";
import img6 from "../../images/content/6.jpg";

const Features = () => {

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
    {
      title: "What is your class naming convention?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const content1 = [
    {
      id: 1,
      label: "Use Client-first",
      title: "Top agencies and freelancers around the world use",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      image: {
        src: img3,
      },
    },
  ];
  const content2 = [
    {
      id: 2,
      label: "Free Revision Rounds",
      title: "Get free Revisions and one week of free maintenance",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      image: {
        src: img4,
      },
    },
  ];
  const content3 = [
    {
      id: 3,
      label: "24/7 Support",
      title: "Working with us, you will be getting 24/7 priority support",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      image: {
        src: img5,
      },
    },
  ];
    const content4 = [
    {
      id: 4,
      label: "Quick Delivery",
      title: "Guranteed 1 week delivery for standard five pager website",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      image: {
        src: img6,
      },
    },
  ];
  return (
    <>
      <Hero
        title="All the features you need"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        image={{
          src: heroImage,
          alt: "Hero illustration",
        }}
        buttons={[
          {
            label: "View pricing",
            className: "button--yellow",
            onClick: () => console.log("Work"),
          },
        ]}
      />

      <Cards
        label=""
        className="cards--blue"
        title="The benefits of working with our team"
        items={[
          {
            icon: 6,
            title: "Customize with ease",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
          },
          {
            icon: 3,
            title: "Perfectly Responsive",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
          },
          {
            icon: 1,
            title: "Friendly Support",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.",
          },
        ]}
      />

      <Content className="" rows={content1} />

      <Content className="content--blue" rows={content2} reverse />

      <Content className="" rows={content3} />

      <Content className="content--yellow" rows={content4} reverse />

      <Accordion
        title="Frequently asked questions"
        description="Contact us for more info"
        items={accordionData}
        defaultActiveIndex={0}
      />
    </>
  );
};

export default Features;
