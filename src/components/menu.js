import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { debounce } from "../utilities/helper";

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 50) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <nav
      className={`brand_nav ${visible ? "active" : ""} 
      }`}
      role="navigation"
    >
      <div className="top-menu">
        <div className="container-fluid">
          <div className="menu-container w-100">
            <div id="safari_logo" className="logo">
              <Link href="/">
                <div className="unset_img">
                  <Image
                    src="/assets/logo/Logo.png"
                    fill
                    priority
                    alt="backgroundimage"
                  />
                </div>
              </Link>
            </div>

            <div className="menu">
              <div
                className="ham_container d-lg-none d-xl-none "
                onClick={toggleMenu}
              >
                <div className={`hamburger ${isMenuOpen ? "close" : "open"}`}>
                  <i className="hamburger__icon"></i>
                  <i className="hamburger__icon"></i>
                  <i className="hamburger__icon"></i>
                </div>
                <div
                  className={`sidebar__menu ${isMenuOpen ? "open" : "close"}`}
                ></div>
              </div>
              <div className="nav-wrap">
                <nav className={` navitem ${isMenuOpen ? "open" : ""}`}>
                  <ul
                    className={`menu-items ${isMenuOpen ? "open" : ""}`}
                    onClick={() => {
                      closeMenu();
                    }}
                  >
                    <li
                      className={`menu-nav__item ${isMenuOpen ? "open" : ""}`}
                    >
                      <Link href="/" className="menu-nav__link">
                        Home
                      </Link>
                    </li>

                    <li
                      className={`menu-nav__item ${isMenuOpen ? "open" : ""}`}
                    >
                      <Link href="/about" className="menu-nav__link">
                        About
                      </Link>
                    </li>

                    <li
                      className={`menu-nav__item ${isMenuOpen ? "open" : ""}`}
                    >
                      <Link href="projects.html" className="menu-nav__link">
                        Safaris
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
