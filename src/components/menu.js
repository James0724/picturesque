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
    <nav className={`brand_nav ${visible ? "active" : ""}`} role="navigation">
      <div className="top-menu">
        <div className="container-fluid">
          <div className="menu-container">
            <div id="safari_logo" className="logo">
              <Link href="/">
                <div className="unset_img">
                  <Image
                    src="/assets/images/log.png"
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
              <nav class={` navitem ${isMenuOpen ? "open" : ""}`}>
                <div className="nav-container">
                  <ul
                    class={`menu-items ${isMenuOpen ? "open" : ""}`}
                    onClick={() => {
                      closeMenu();
                    }}
                  >
                    <li class={`menu-nav__item ${isMenuOpen ? "open" : ""}`}>
                      <Link href="/" class="menu-nav__link">
                        Home
                      </Link>
                    </li>

                    <li class={`menu-nav__item ${isMenuOpen ? "open" : ""}`}>
                      <Link href="/about" class="menu-nav__link">
                        About
                      </Link>
                    </li>

                    <li class={`menu-nav__item ${isMenuOpen ? "open" : ""}`}>
                      <Link href="projects.html" class="menu-nav__link">
                        Projects
                      </Link>
                    </li>

                    <li class={`menu-nav__item ${isMenuOpen ? "open" : ""}`}>
                      <Link href="/contact" class="menu-nav__link">
                        Contacts
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            {/* <div className="col  d-none nav_items d-lg-block d-xl-block">
              <a href="/">Home</a>
            </div>
            <div className="col d-none nav_items d-lg-block d-xl-block">
              <a href="/">About Us</a>
            </div>
            <div className="has-dropdown col d-none nav_items d-lg-block d-xl-block">
              <a href="tours.html">Safaris</a>
              <ul className="dropdown">
                <li>
                  <a href="#">All Destinations</a>
                </li>
                <li>
                  <a href="#">Game Drive Safaris</a>
                </li>
                <li>
                  <a href="#">Nature Walk Safaris</a>
                </li>
                <li>
                  <a href="#">Marine Park Safaris</a>
                </li>
                <li>
                  <a href="hotels.html">Cultural Safaris</a>
                </li>
                <li>
                  <a href="#">City Excursion Safaris</a>
                </li>
              </ul>
            </div>

            <div className="col d-none nav_items d-lg-block d-xl-block">
              <a href="#">Blogs</a>
            </div>
            <div className="col d-none nav_items d-lg-block d-xl-block">
              <a href="#">Enquiries</a>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
