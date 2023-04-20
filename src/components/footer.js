import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contact-form text-bg-light ">
        <div className="container">
          <div className="grids-col-3">
            <h2 class="text-h2 ">Need some inspiration?</h2>
            <div className="col-span-2">
              <form action="#" className="container">
                <div class="row p-5">
                  <div class="col-6 mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div class="col-6 mb-3">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div class="col-12 mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div class="col-12 mb-3">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="7"
                      class="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <input
                      type="submit"
                      value="Send Message"
                      class="btn btn-primary"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="widget">
                <h3>
                  About <span className="text-primary">Divine Travel Nest</span>{" "}
                </h3>
                <p>
                  Divine Travel Nest was established out of commitment to
                  provide a sustainable safari tour services around east Africa,
                  with awesome and affordable experience.
                </p>
              </div>
              <div className="widget">
                <h3>Connect</h3>
                <ul className="list-unstyled social">
                  <li>
                    <a href="#">
                      <span className="icon-instagram"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-linkedin"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-pinterest"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-dribbble"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 ml-auto">
              <div className="widget">
                <h3>Links</h3>
                <ul className="list-unstyled float-left links">
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="widget">
                <h3>Company</h3>
                <ul className="list-unstyled float-left links">
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="widget">
                <h3>Contact</h3>
                Nairobi, Kenya
                <ul className="list-unstyled links mb-4">
                  <li>
                    <a href="tel://11234567890">0724 000 000</a>
                  </li>
                  <li>
                    <a href="tel://11234567890">0724 000 000</a>
                  </li>
                  <li>
                    <a href="mailto:info@mydomain.com">info@mydomain.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 text-center">
              <p>
                Copyright ©{new Date().getFullYear()} &#32; All rights reserved
                | Divine Travel Nest
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
