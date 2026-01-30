import Hero from "../components/hero/Hero.jsx";
import Who from "../components/who/Who.jsx";
import Process from "../components/process/Process.jsx";
import Content from "../components/content/Content.jsx";
import Cards from "../components/cards/Cards.jsx";
import Team from "../components/team/Team.jsx";
import heroImage from "../../images/hero/hero--about.jpg";
import img1 from "../../images/content/1.jpg";
import img2 from "../../images/content/2.jpg";

const About = () => {
  const contentRows = [
    {
      id: 1,
      label: "Our Mission",
      title: "Inspire, Innovate, Share",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: {
        src: img1,
      },
    },
    {
      id: 2,
      rowClass: "",
      reverse: true,
      label: "Our Vision",
      title: "Laser focus",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: {
        src: img2,
      },
    },
  ];
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
      <Content className="content--blue" rows={contentRows} />
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
