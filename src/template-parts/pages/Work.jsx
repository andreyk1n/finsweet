import { useParams } from "react-router-dom";
import useDocumentMeta from "../components/useDocumentMeta/useDocumentMeta";
import SingleWork from "../components/single-work/SingleWork";
import { works } from "../../data/works";

const Work = () => {
  const { id } = useParams();

  const work = works.find((w) => w.id === Number(id));

  useDocumentMeta({
    title: work ? `Finsweet | ${work.title}` : "Finsweet | Work",
    description: work?.description || "Project case study page",
  });

  if (!work) return null;

  return <SingleWork work={work} />;
};

export default Work;
