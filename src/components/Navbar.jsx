import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'project', 'journey', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 50;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getNavLinkClass = (section) => {
    return `nav-link block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:dark:hover:bg-transparent md:dark:hover:text-white ${
      activeSection === section
        ? "text-gray-900 font-semibold dark:text-white md:hover:text-gray-900"
        : "text-gray-900 font-medium hover:text-gray-900 md:hover:text-gray-900 dark:text-gray-400"
    }`;
  };

  return (
    <nav className="bg-white dark:bg-gray-900/80 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Raqanzaa.
          </span>
        </a>
        
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a
                href="#home"
                className={getNavLinkClass("home")}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("home");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={getNavLinkClass("about")}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("about");
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#project"
                className={getNavLinkClass("project")}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("project");
                }}
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#journey"
                className={getNavLinkClass("journey")}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("journey");
                }}
              >
                Journey
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={getNavLinkClass("skills")}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("skills");
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={getNavLinkClass("contact")}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("contact");
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;