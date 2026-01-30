import useDocumentMeta from "../components/useDocumentMeta/useDocumentMeta.js";
import Form from "../components/form/Form.jsx";

const Contacts = () => {
  useDocumentMeta({
    title: "Finsweet | Contacts",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  });
  return (
    <>
        <Form />
    </>
  );
};

export default Contacts;
