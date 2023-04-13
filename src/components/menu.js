import Image from "next/image";

export const Menu = () => {
  return (
    <nav className="colorlib-nav" role="navigation">
      <div className="top-menu">
        <div className="container-fluid full-width">
          <div className="row pb-2 d-none d-lg-block d-xl-block">
            <ul className="d-none d-lg-block d-xl-block">
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <div className="separetor d-none d-lg-block d-xl-block"></div>
          <div className="row pt-2 ">
            <div className="col-1">
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
            </div>
            <div className="col-11  menu-1 d-flex align-items-center justify-content-end">
              <ul className="d-none d-lg-block d-xl-block">
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li className="has-dropdown">
                  <a href="tours.html">Safari Packages</a>
                  <ul className="dropdown">
                    <li>
                      <a href="#">Destination</a>
                    </li>
                    <li>
                      <a href="#">Cruises</a>
                    </li>
                    <li>
                      <a href="#">Hotels</a>
                    </li>
                    <li>
                      <a href="#">Booking</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="blog.html">Safari Blogs</a>
                </li>
                <li>
                  <a href="about.html">About</a>
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
