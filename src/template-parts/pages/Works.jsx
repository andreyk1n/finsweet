import useDocumentMeta from "../components/useDocumentMeta/useDocumentMeta.js";
import Works from "../components/works/Works.jsx";
import HeroWork from "../components/heroWork/HeroWork.jsx";

const Contacts = () => {
  useDocumentMeta({
    title: "Finsweet | Our works",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  });
  return (
    <>
      <HeroWork />
      <Works />
    </>
  );
};

export default Contacts;
