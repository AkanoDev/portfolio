import Button from "./Button";
import { projectdata } from "../data/projectdata";

export default function Projects() {
  return (
    <div className="flex flex-col h-auto lg:gap-32 gap-4 py-7" id="project">
      <h2 className="text-md font-semibold uppercase text-lightest-black underline dark:text-white">
        Small Projects
      </h2>
      <div className="flex justify-center items-center flex-wrap gap-8 ">
        {projectdata.map((proj) => (
          <Rectangles proj={proj} key={proj.title} />
        ))}
      </div>
    </div>
  );
}

function Rectangles({ proj }) {
  return (
    <div className="card">
      <img src={proj.image} alt={proj.title} className="object-cover h-full" />
      <div className="card-content">
        <p className="card-title">{proj.title}</p>
        <p className="card-description h-20">{proj.description}</p>
        <div className="flex justify-center gap-x-4">
          <a href={proj.demo}>
            <Button>Demo</Button>
          </a>
          <a href={proj.code}>
            <Button>Code</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
