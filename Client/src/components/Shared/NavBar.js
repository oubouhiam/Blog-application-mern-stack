import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

export default function NavBar() {
  const [top, setTop] = useState(true);
  

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);
  return (
    <header
      className={`text-gray-600 body-font m-auto fixed w-full z-30 bg-white md:bg-opacity-100 transition duration-300 ease-in-out ${
        !top && "bg-white blur shadow-lg"
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row ">
        <img className="" src={logo} width="50" height="50" alt="Hero" />
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-gray-900   justify-center">
          <Link to="/" className="mr-5 hover:text-red-700">
            Home
          </Link>
          <Link to="/Category" className="mr-5 hover:text-red-700">
            Category
          </Link>
          <Link to="/About" className="mr-5 hover:text-red-700">
            About
          </Link>
          <Link to="/Contact" className="mr-5 hover:text-red-700">
            Contact
          </Link>
        </nav>
        <Link
          to="/login"
          className="inline-flex w-24 items-center bg-red-700 border-0 py-1 px-4 focus:outline-none hover:bg-gray-200 rounded text-white hover:text-red-700 mt-4 md:mt-0"
        >
          Login
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </header>
  );
}
