import Hero from "../components/hero/Hero.jsx";
import Who from "../components/who/Who.jsx";
import Process from "../components/process/Process.jsx";
import Content from "../components/content/Content.jsx";
import Cards from "../components/cards/Cards.jsx";
import Team from "../components/team/Team.jsx";
import heroImage from "../../images/hero/hero--about.jpg";

const About = () => {
  return (
    <>
      <Hero
        className="hero--about"
        label="About us"
        title="Our designs solve problems"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        image={{
          src: heroImage,
          alt: "Hero illustration",
        }}
      />

      <Who />

      <Process />

      <Content />

      <Cards
        className="cards--blue"
        label=""
        title="The benefits of working with us"
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

      <Team />
    </>
  );
};

export default About;
