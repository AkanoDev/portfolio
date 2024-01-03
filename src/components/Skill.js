import { FaGripLinesVertical } from "react-icons/fa";

export default function Skill() {
  return (
    <div className="flex lg:flex-row md:flex-row flex-col items-center lg:gap-20 gap-4">
      <strong className="text-lightest-black flex items-center gap-2">
        <h2 className="text-md uppercase dark:text-white">Skills</h2>
        <FaGripLinesVertical className="text-lightest-black" />
      </strong>

      <ul className="flex items-center flex-wrap lg:gap-8 gap-2">
        <SkillList>
          <img
            src="./images/logos/html.png"
            alt="..."
            className="lg:w-16 w-12"
          />
        </SkillList>
        <SkillList>
          <img
            src="./images/logos/css.png"
            alt="..."
            className="lg:w-16 w-12"
          />
        </SkillList>
        <SkillList>
          <img
            src="./images/logos/javascript.png"
            alt="..."
            className="lg:w-16 w-12"
          />
        </SkillList>
        <SkillList>
          <img
            src="./images/logos/react.png"
            alt="..."
            className="lg:w-16 w-12"
          />
        </SkillList>
        <SkillList>
          <img
            src="./images/logos/tailwind.png"
            alt="..."
            className="lg:w-16 w-12"
          />
        </SkillList>
      </ul>
    </div>
  );
}

function SkillList({ children }) {
  return <li>{children}</li>;
}
