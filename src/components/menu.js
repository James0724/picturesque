import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { debounce } from "../utilities/helper";

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);
  const [mainMenu, setMainMenu] = useState(true);

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

  const handleMainMenu = () => {
    if (scrollY < 100) {
      setMainMenu(true);
    } else {
      setMainMenu(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleMainMenu);
    return () => {
      window.removeEventListener("scroll", handleScroll),
        window.removeEventListener("scroll", handleMainMenu);
    };
  }, [prevScrollPos, visible, handleScroll, handleMainMenu]);

  return (
    <nav
      className={` nav-cont ${mainMenu ? "main-menu" : " "} ${
        visible && !mainMenu ? "active " : ""
      }`}
    >
      <div className="logo">
        <Link className="logo_text" href="/" onClick={closeMenu}>
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
      <ul className={`menu ${isMenuOpen ? "show" : " "}`}>
        <li className="menu_item">
          <Link href="/" onClick={closeMenu} className="menu_link">
            Home
          </Link>
        </li>
        <li className="menu_item">
          <Link href="/about" onClick={closeMenu} className="menu_link">
            About
          </Link>
        </li>
        <li className="menu_item">
          <Link href="" className="menu_link" onClick={closeMenu}>
            Safaris
          </Link>
        </li>
        <li className="menu_item">
          <Link href="" className="menu_link" onClick={closeMenu}>
            Journey
          </Link>
        </li>
      </ul>

      {/* <div className="phone">
        <span className="phone_order">Tell</span>
        <span className="phone_number">0724 000 000</span>
      </div> */}

      {/* <div class="login">
        <a class="login_link login_link--button" href="#">
          Login
        </a>
        <a class="login_link" href="#">
          Signup
        </a>
      </div> */}

      <div className="btn_menu " onClick={toggleMenu}>
        <div className={`hamburger ${isMenuOpen ? "close" : "open"}`}>
          <i className="hamburger__icon"></i>
          <i className="hamburger__icon"></i>
          <i className="hamburger__icon"></i>
        </div>
        <div className={`sidebar__menu ${isMenuOpen ? "open" : "close"}`}></div>
      </div>
    </nav>
  );
};

//<nav
//   className={`brand_nav ${visible ? "active" : ""}
//   }`}
//   role="navigation"
// >
//   <div className="top-menu">
//     <div className="container-fluid">
//       <div className="menu-container w-100">
//         <div id="safari_logo" className="logo">
//           <Link href="/">
//             <div className="unset_img">
//               <Image
//                 src="/assets/logo/Logo.png"
//                 fill
//                 priority
//                 alt="backgroundimage"
//               />
//             </div>
//           </Link>
//         </div>

//         <div className="menu">
//           <div
//             className="ham_container d-lg-none d-xl-none "
//             onClick={toggleMenu}
//           >
//             <div className={`hamburger ${isMenuOpen ? "close" : "open"}`}>
//               <i className="hamburger__icon"></i>
//               <i className="hamburger__icon"></i>
//               <i className="hamburger__icon"></i>
//             </div>
//             <div
//               className={`sidebar__menu ${isMenuOpen ? "open" : "close"}`}
//             ></div>
//           </div>
//           <div className="nav-wrap">
//             <nav className={` navitem ${isMenuOpen ? "open" : ""}`}>
//               <ul
//                 className={`menu-items ${isMenuOpen ? "open" : ""}`}
//                 onClick={() => {
//                   closeMenu();
//                 }}
//               >
//                 <li
//                   className={`menu-nav__item ${isMenuOpen ? "open" : ""}`}
//                 >
//                   <Link href="/" className="menu-nav__link">
//                     Home
//                   </Link>
//                 </li>

//                 <li
//                   className={`menu-nav__item ${isMenuOpen ? "open" : ""}`}
//                 >
//                   <Link href="/about" className="menu-nav__link">
//                     About
//                   </Link>
//                 </li>

//                 <li
//                   className={`menu-nav__item ${isMenuOpen ? "open" : ""}`}
//                 >
//                   <Link href="projects.html" className="menu-nav__link">
//                     Safaris
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </nav> */
