export default function Skill() {
  return (
    <div className="flex items-center lg:gap-20 gap-4">
      <h2 className="text-md font-semibold uppercase text-lightest-black dark:text-white">
        Skills &ensp;|
      </h2>

      <ul className="flex items-center flex-wrap lg:gap-8 gap-2">
        <SkillList>
          <img src="./images/logos/html.png" alt="..." className="w-16" />
        </SkillList>
        <SkillList>
          <img src="./images/logos/css.png" alt="..." className="w-16" />
        </SkillList>
        <SkillList>
          <img src="./images/logos/javascript.png" alt="..." className="w-16" />
        </SkillList>
        <SkillList>
          <img src="./images/logos/react.png" alt="..." className="w-16" />
        </SkillList>
        <SkillList>
          <img src="./images/logos/tailwind.png" alt="..." className="w-16" />
        </SkillList>
      </ul>
    </div>
  );
}

function SkillList({ children }) {
  return <li>{children}</li>;
}
