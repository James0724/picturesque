import Image from "next/image";

export const Menu = () => {
  return (
    <nav className="colorlib-nav" role="navigation">
      <div className="top-menu">
        <div className="container-fluid">
          <div className="row ">
            <div id="colorlib-logo">
              <a href="index.html">
                <div className="unset_img">
                  <Image
                    src="/assets/images/log.png"
                    fill
                    alt="backgroundimage"
                  />
                </div>
              </a>
            </div>
            <div className="menu-1">
              <ul className="d-none d-lg-block d-xl-block">
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li className="has-dropdown">
                  <a href="tours.html">Experiences</a>
                  <ul className="dropdown">
                    <li>
                      <a href="#">Marine park safaris</a>
                    </li>
                    <li>
                      <a href="#">Cultural safaris</a>
                    </li>
                    <li>
                      <a href="#">Game drive safaris</a>
                    </li>
                    <li>
                      <a href="#">City excursion safaris</a>
                    </li>
                  </ul>
                </li>

                <li className="has-dropdown">
                  <a href="tours.html">Journeys</a>
                  <ul className="dropdown">
                    <li>
                      <a href="#">Family journeys</a>
                    </li>
                    <li>
                      <a href="#">Group journeys</a>
                    </li>
                    <li>
                      <a href="#">Solo journeys</a>
                    </li>
                    <li>
                      <a href="#">Couple journeys</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    // <div className="site-header">
    //   <div classNameName="container row">
    //     <div classNameName="col-2">
    //       <a href="#" className="brand">
    //         <div classNameName="unset_img">
    //           <Image src="/assets/images/log.png" fill alt="backgroundimage" />
    //         </div>
    //       </a>
    //     </div>
    //     <div classNameName="col-10 ">
    //       <nav className="nav float-end">
    //         <button className="nav__toggle" aria-expanded="false" type="button">
    //           menu
    //         </button>
    //         <ul className="nav__wrapper">
    //           <li className="nav__item">
    //             <a href="#">Home</a>
    //           </li>
    //           <li className="nav__item">
    //             <a href="#">About</a>
    //           </li>
    //           <li className="nav__item">
    //             <a href="#">Services</a>
    //           </li>
    //           <li className="nav__item">
    //             <a href="#">Hire us</a>
    //           </li>
    //           <li className="nav__item">
    //             <a href="#">Contact</a>
    //           </li>
    //         </ul>
    //       </nav>
    //     </div>
    //   </div>
    // </div>
  );
};
