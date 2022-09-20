import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 flex nav-center items-center content-center  lg:fixed lg:inset-x-0 lg:bottom-0 shadow-[0px_4px_58px_-15px_#262626] fontMontserrat">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="container  flex flex-col items-center justify-between">
            <div className="w-full relative flex  lg:w-auto lg:static lg:block lg:justify-start">
              <button
                className="text-gray-500 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fillRule="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
              </button>
            </div>
            <div
              className={
                "w-full block flex-grow lg:flex lg:justify-center lg:w-auto  text-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col   text-center  lg:flex-row  list-none lg:ml-auto ">
                <li className="nav-item">
                  <Link to="home"
                    className="px-3 py-2 flex items-center text-2xl uppercase font-regular leading-snug text-gray-500 hover:text-red-800 hover:font-bold"
                    href="#"
                  >
                    <span className="ml-2 text-gray text-lg">HOME</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="about"
                    className="px-3 py-2 flex items-center text-2xl uppercase font-regular leading-snug text-gray-500 hover:text-red-800 hover:font-bold"
                    href="#"
                  >
                    <span className="ml-2 text-gray text-lg">ABOUT</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="expirience"
                    className="px-3 py-2 flex items-center text-2xl uppercase font-regular leading-snug text-gray-500 hover:text-red-800 hover:font-bold"
                    href="#"
                  >
                    <span className="ml-2 text-gray text-lg">EXPIRIENCE/EDUCATION</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="briefcase"
                    className="px-3 py-2 flex items-center text-2xl uppercase font-regular leading-snug text-gray-500 hover:text-red-800 hover:font-bold"
                    href="#"
                  >
                    <span className="ml-2 text-gray text-lg">BRIEFCASE</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="contact"
                    className="px-3 py-2 flex items-center text-2xl uppercase font-regular leading-snug text-gray-500 hover:text-red-800 hover:font-bold"
                    href="#"
                  >
                    <span className="ml-2 text-gray text-lg">CONTACT</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
