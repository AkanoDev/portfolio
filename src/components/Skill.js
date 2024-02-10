export default function Skill() {
  return (
    <div className="flex lg:flex-row md:flex-row flex-col items-center lg:gap-20 gap-10">
      <strong className="text-lightest-black flex items-center">
        <h2 className="text-md uppercase dark:text-white">Skills</h2>
      </strong>

      <ul className="flex items-center flex-wrap justify-center gap-8">
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
            src="./images/logos/php.png"
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
        <SkillList>
          <img
            src="./images/logos/nodejs.png"
            alt="..."
            className="lg:w-14 w-11"
          />
        </SkillList>
        <SkillList>
          <img
            src="./images/logos/expressjs.png"
            alt="..."
            className="lg:w-16 w-12"
          />
        </SkillList>
        <SkillList>
          <img
            src="./images/logos/mongodb.png"
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
