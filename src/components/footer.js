import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <section className="footer">
        <div className="end_footer_section_image">
          <div className="unset_img">
            <Image src="/assets/images/soil.png" fill alt="backgroundimage" />
          </div>
        </div>
        <div className="container">
          <div className="social-link-wrapper"></div>
          <div className="row pt-5 pb-5">
            <div className="col-md-4 d-flex flex-column align-items-center">
              <h6 className="footer_text">About Picturesque</h6>
              <div className="menu-item pt-2 pb-2">
                <a href="/about" className="links ">
                  About
                </a>
              </div>

              <div className="menu-item pt-2 pb-2">
                <a href="/journal" className="links">
                  Journal
                </a>
              </div>
              <div className="menu-item pt-2 pb-2">
                <a href="/careers" className="links">
                  Careers
                </a>
              </div>
              <div className="menu-item pt-2 pb-2">
                <a href="/contact" className="links">
                  Contact
                </a>
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column  align-items-center">
              <h6 className="footer_text"> Experiences</h6>

              <div className="menu-item pt-2 pb-2">
                <a href="/africa/namibia" className="links">
                  Game Drive Safaris
                </a>
              </div>
              <div className="menu-item pt-2 pb-2">
                <a href="/africa/rwanda" className="links">
                  Nature Walks Safaris
                </a>
              </div>
              <div className="menu-item pt-2 pb-2">
                <a href="/africa/botswana" className="links">
                  Marine Parks Safaris
                </a>
              </div>
              <div className="menu-item pt-2 pb-2">
                <a href="/africa/zambia" className="links">
                  City Excursions Safaris
                </a>
              </div>
              <div className="menu-item pt-2 pb-2">
                <a href="/africa/zimbabwe" className="links">
                  Mountain Climbing Safaris
                </a>
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center">
              <h6 className="footer_text">Journeys &amp; Services</h6>
              <div className="menu-item pt-2 pb-2">
                <a href="/journeys" className="links">
                  Our Journeys
                </a>
              </div>
              <div className="menu-item pt-2 pb-2">
                <a href="/journeys/journey-inspiration" className="links">
                  Journey Inspiration
                </a>
              </div>
              <div className="menu-item pt-2 pb-2">
                <a href="/journeys/our-services" className="links">
                  Our Services
                </a>
              </div>
            </div>
          </div>

          <div className="separetor pt-3 pb-3"></div>
          <div className="logo-wrapper d-flex justify-content-center pt-5">
            <div className="logo-img">
              <div className="unset_img">
                <Image
                  src="/assets/images/log.png"
                  priority
                  fill
                  alt="Elephants"
                />
              </div>
            </div>
          </div>
          <div className="copyright-wrapper d-flex flex-column align-items-center pt-5">
            <div className="bottom-links pt-2 pb-2">
              <a href="/disclaimer" className="links px-2 py-2">
                <span>Disclaimer</span>
              </a>
              <a href="/privacy-policy" className="links pr-2 pl-2">
                <span>Privacy Policy</span>
              </a>
            </div>
            <p className="text-small px-2 py-2">
              Copyright ©2022 Wilderness Safaris. All rights reserved
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
