import Hero from "../components/hero/Hero.jsx";
import Cards from "../components/cards/Cards.jsx";
import heroImage from "../../images/hero/hero--features.svg";

const Features = () => {
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
    </>
  );
};

export default Features;
