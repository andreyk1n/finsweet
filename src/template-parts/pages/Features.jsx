import Hero from "../components/hero/Hero.jsx";
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
          }
        ]}
      />
    </>
  );
};

export default Features;
