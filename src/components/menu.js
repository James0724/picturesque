import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  //   const closeExperiencesMenu = () => {
  //    setIsMenuOpen(false);
  //  };

  return (
    <nav className="brand_nav" role="navigation">
      <div className="top-menu">
        <div className="container-fluid">
          <div className="row align-items-center d-none">
            <div id="safari_logo" className="col">
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
            <div className="col-8 d-lg-none d-xl-none ">
              <div className="ham_container" onClick={toggleMenu}>
                <div class={`hamburger ${isMenuOpen ? "open" : "close"}`}>
                  <i class="hamburger__icon"></i>
                  <i class="hamburger__icon"></i>
                  <i class="hamburger__icon"></i>
                </div>
                <div
                  className={`sidebar__menu ${isMenuOpen ? "close" : "open"}`}
                ></div>
              </div>
            </div>

            <div className="col  d-none nav_items d-lg-block d-xl-block">
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
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
