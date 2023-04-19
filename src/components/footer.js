import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div class="py-5 bg-tertiary">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 text-center mb-3 mb-lg-0 text-lg-start">
              <h3 class="text-banner m-0">
                Begin your adventurous journey here.
              </h3>
            </div>
            <div class="col-lg-5 text-center text-lg-end">
              <a href="#" class="btn btn-outline-white">
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="widget">
                <h3>
                  About <span class="text-primary">Divine Travel Nest</span>{" "}
                </h3>
                <p>
                  Divine Travel Nest was established out of commitment to
                  provide a sustainable safari tour services around east Africa,
                  with awesome and affordable experience.
                </p>
              </div>
              <div class="widget">
                <h3>Connect</h3>
                <ul class="list-unstyled social">
                  <li>
                    <a href="#">
                      <span class="icon-instagram"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-linkedin"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-pinterest"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-dribbble"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 ml-auto">
              <div class="widget">
                <h3>Links</h3>
                <ul class="list-unstyled float-left links">
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
            <div class="col-lg-2">
              <div class="widget">
                <h3>Company</h3>
                <ul class="list-unstyled float-left links">
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
            <div class="col-lg-3">
              <div class="widget">
                <h3>Contact</h3>
                Nairobi, Kenya
                <ul class="list-unstyled links mb-4">
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
          <div class="row mt-5">
            <div class="col-12 text-center">
              <p>
                Copyright ©{new Date().getFullYear()}
                All rights reserved | Divine Travel Nest
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
