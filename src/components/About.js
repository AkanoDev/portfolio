export default function About() {
  return (
    <div
      className="flex flex-col lg:h-screen h-auto lg:gap-32 gap-4 py-7"
      id="about"
    >
      <h2 className="text-md font-semibold uppercase text-lightest-black dark:text-white underline">
        About me
      </h2>
      <div className="flex justify-center items-center flex-wrap gap-2 ">
        <img src="./images/hero/hero.png" alt="..." className="h-96" />
        <AboutDescription />
      </div>
    </div>
  );
}

function AboutDescription() {
  return (
    <div className="about-description dark:border-white">
      <p>
        Hello! I'm Redick Jake Taal, an aspiring front-end developer with a
        passion for designing dynamic and attractive user interfaces.
        Experienced in HTML, CSS, and JavaScript. My toolset also includes React
        for creating dynamic, responsive web apps and Tailwind CSS for effective
        styling. I'm passionate about creating interesting digital experiences,
        and I approach every project with a combination of technical know-how
        and creativity. I'm delighted to work with others on projects that push
        the limits of web development since I'm eager to learn and contribute.
        Together, let's write code to create logical, user-focused solutions
        that have an influence in the digital world!
      </p>
    </div>
  );
}
