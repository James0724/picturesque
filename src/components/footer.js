import Image from "next/image";
import { Button } from "./uiElements";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="contact-form text-bg-light p-5">
        <div className="container">
          <div className="grids-col-3">
            <div
              className="container
            py-3 "
            >
              <h2 className="text-banner">Contact us</h2>
              <div class="contact-info">
                <div class="address mt-4">
                  <i class="icon-room"></i>
                  <h4 class="mb-2">Location:</h4>
                  <p>Nairobi, Kenya</p>
                </div>
                <div class="open-hours mt-4">
                  <i class="icon-clock-o"></i>
                  <h4 class="mb-2">Open Hours:</h4>
                  <p>
                    Sunday-Friday:
                    <br />
                    11:00 AM - 2300 PM
                  </p>
                </div>
                <div class="email mt-4">
                  <i class="icon-envelope"></i>
                  <h4 class="mb-2">Email:</h4>
                  <p>info@gmail.com</p>
                </div>
                <div class="phone mt-4">
                  <i class="icon-phone"></i>
                  <h4 class="mb-2">Call:</h4>
                  <p>0724 000000</p>
                  <p>0724 000000</p>
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <h2 className="text-banner-sm px-3">
                If you have any query or would like to request for our services
                you can reach us by filling this form and we will get back to
                you as soon as possible
              </h2>
              <form action="#" className="container">
                <div className="row">
                  <div className="col-md mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-md mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="7"
                      className="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <Button
                      ClassName={"text-black"}
                      LinkName={"Send"}
                      LinkAddress={"/#"}
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
