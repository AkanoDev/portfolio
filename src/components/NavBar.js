import { useState } from "react";
import Button from "./Button";

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
}
export default function Navbar() {
  const [isBurger, setIsBurger] = useState(false);
  function handleBurger() {
    setIsBurger((burger) => !burger);
  }

  return (
    <div className="flex justify-between items-center h-16 text-lightest-black uppercase font-medium dark:text-white">
      <span>AkanoDev</span>
      <div className="flex">
        <ul className="lg:flex md:flex hidden items-center ">
          <a href="#home">
            <NavbarList className="list-none cursor-pointer px-5">
              Home
            </NavbarList>
          </a>
          <a href="#about">
            <NavbarList className="list-none cursor-pointer px-5">
              About
            </NavbarList>
          </a>
          <a href="#project">
            <NavbarList className="list-none cursor-pointer px-5">
              Projects
            </NavbarList>
          </a>
          <a href="#contact">
            <NavbarList className="list-none cursor-pointer px-5">
              Contacts
            </NavbarList>
          </a>
        </ul>

        <div className="flex items-center gap-2">
          <Button onClick={toggleTheme}>Darkmode</Button>
          <div
            className="sm:hidden block group cursor-pointer"
            onClick={handleBurger}
          >
            <span className="bar dark:bg-white"></span>
            <span className="bar dark:bg-white"></span>
            <span className="bar dark:bg-white"></span>

            {isBurger && (
              <ul className="lg:flex md:flex flex flex-col absolute left-0 right-0 top-16 pt-11 py-10 gap-10 bg-medium-white z-10 items-center dark:bg-dark-mode">
                <NavbarList className="list-none cursor-pointer hover:bg-light-white w-72 py-3 text-center delay-75 dark:hover:bg-hard-black">
                  Home
                </NavbarList>
                <NavbarList className="list-none cursor-pointer hover:bg-light-white w-72 py-3 text-center delay-75 dark:hover:bg-hard-black">
                  About
                </NavbarList>
                <NavbarList className="list-none cursor-pointer hover:bg-light-white w-72 py-3 text-center delay-75 dark:hover:bg-hard-black">
                  Projects
                </NavbarList>
                <NavbarList className="list-none cursor-pointer hover:bg-light-white w-72 py-3 text-center delay-75 dark:hover:bg-hard-black">
                  Contacts
                </NavbarList>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function NavbarList({ children, className }) {
  return <li className={className}>{children}</li>;
}
