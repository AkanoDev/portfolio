import Navbar from "./components/NavBar";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import About from "./components/About";
import Contacts from "./components/Contacts";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function App() {
  return (
    <div className="app dark:bg-dark-mode dark:text-white">
      <header className="lg:h-screen h-auto">
        <nav className="px-8 border border-gray-800 border-t-0 border-l-0 border-r-0 border-b-1">
          <Navbar />
        </nav>

        <main className="h-5/6 flex flex-col justify-center lg:px-40 px-5 py-10 lg:gap-16 gap-20 ">
          <Hero />
          <Skill />
        </main>
      </header>

      <div className="lg:px-40 px-5">
        <section className="flex flex-col gap-8">
          <About />
          <Projects />
          <Contacts />
        </section>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

function Hero() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 flex flex-col-reverse place-items-center lg:gap-32 gap-8">
        <div className="flex flex-col lg:items-start lg:text-start md:items-start md:text-start items-center text-center gap-y-4 text-lightest-black dark:text-white">
          <h2 className="font-semibold text-4xl uppercase">Web Developer</h2>
          <p>
            My adventure began with the magic of HTML and the styling wonders of
            CSS. Armed with a curiosity to make things move and groove, I delved
            into the world of JavaScript to bring interactivity and life to my
            creations.
          </p>
          <a href="./cv/RedickJakeTaalCV.pdf" download>
            <button className="py-2 px-5 rounded bg-hard-black hover:rounded-full text-white transition-all">
              Download CV
            </button>
          </a>
        </div>
        <div className="relative flex justify-center bg-dark-mode  dark:bg-white h-72 w-72 rounded-full">
          <img
            src="./images/hero/hero.png"
            alt="hero"
            className="h-72 w-72 object-contain absolute rounded-b-full"
          />
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <div className="h-24 bg-dark-mode dark:border-white border border-white border-t-1 border-r-0 border-l-0 border-b-0">
      <ul className="h-full flex justify-center items-center text-3xl">
        <li className="px-2">
          <FaFacebook className="text-white" />
        </li>
        <a href="https://github.com/AkanoDev">
          <li className="px-2">
            <FaGithub className="text-white" />
          </li>
        </a>
        <a href="https://www.linkedin.com/in/redick-jake-taal-80845b280/">
          <li className="px-2">
            <FaLinkedin className="text-white" />
          </li>
        </a>
      </ul>
    </div>
  );
}
