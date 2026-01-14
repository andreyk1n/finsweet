import Hero from "../components/hero/Hero.jsx";
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
    </>
  );
};

export default About;
