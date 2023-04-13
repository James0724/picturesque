import Image from "next/image";

export default function FeaturedDestinations() {
  return (
    <div className="featured pb-5">
      <div className="container">
        <div className="heading d-lg-none d-xl-none">
          <div className="heading__small">
            <h3>Top Destinations</h3>
          </div>
          <div className="heading__large">
            <h1>Our featured Destinations</h1>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-md-8 pt-1 pb-1">
            <div className="h-100 d-flex justify-content-center ">
              <div className="heading_container">
                <div className="heading_wrapper">
                  <div className="heading d-none d-lg-block d-xl-block ">
                    <div className="heading__small">
                      <h3>Top Destinations</h3>
                    </div>
                    <div className="heading__large">
                      <h1>Our featured Destinations</h1>
                    </div>
                  </div>
                  <p className="intro_text">
                    Experience breathtaking views on our featured desinations
                    with exclusive private wild game viewing, unrivalled style,
                    comfort and a range of activities for a full immersion in
                    nature and local culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 pt-1 pb-1">
            <a href="/the-setting" className="button intro_btn">
              <div className="d-flex align-items-center">
                <div className="button-diamond">
                  <div className="button-diamond-inner">
                    <div className="button-diamond-arrow-container">
                      <div className="arrow-line">
                        <div className="arrow-head arrow-head-right"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button-text">Explore</div>
              </div>
            </a>
          </div>
        </div>

        <div className="carousel">
          <div className="row">
            <div className="col-sm col-md-4 pt-2 pb-2 mobile-centered-div">
              <div className="item">
                <div className="unset_img">
                  <Image
                    src="/assets/images/pink-flamingo-1484781_960_720.jpg"
                    fill
                    alt="backgroundimage"
                  />
                </div>

                <div className="overlay">
                  <span>Nakuru</span>
                </div>
              </div>
            </div>
            <div className="col-sm col-md-4 pt-2 pb-2 mobile-centered-div">
              <div className="item">
                <div className="unset_img">
                  <Image
                    src="/assets/images/harshil-gudka-77zGnfU_SFU-unsplash.jpg"
                    fill
                    alt="backgroundimage"
                  />
                </div>

                <div className="overlay">
                  <span>Mombasa</span>
                </div>
              </div>
            </div>
            <div className="col-sm col-md-4 pt-2 pb-2 mobile-centered-div">
              <div className="item">
                <div className="unset_img">
                  <Image
                    src="/assets/images/pexels-photo-13348192.jpeg"
                    fill
                    alt="backgroundimage"
                  />
                </div>
                <div className="overlay">
                  <span>Nairobi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
