import Image from "next/image";
import { Button } from "./uiElements";

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
          <div className="col-md-8 text-spacing-pad">
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
                  <p className="intro_text pt-2">
                    Experience breathtaking views on our featured desinations
                    with exclusive private wild game viewing, unrivalled style,
                    comfort and a range of activities for a full immersion in
                    nature and local culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-spacing-pad ">
            <Button LinkName={"Explore"} LinkAddress={"/#"} />
          </div>
        </div>

        <div className="content-holder content-spacing">
          <div className="row g-2">
            <div className="article-wrap col-sm-6 col-md-4 ">
              <article className="article has-hover-s3">
                <div className="img-wrap">
                  <div className="unset_img">
                    <Image
                      src="/assets/images/elephants.jpg"
                      fill
                      className="attachment-550x358 size-550x358 wp-post-image"
                      alt="backgroundimage"
                    />
                  </div>

                  <div className="img-caption">6 Days</div>
                  <div className="hover-article">
                    {/* <div className="icons">
                    <a href="#">
                      <span className="icon-favs"></span>
                    </a>
                    <a href="https://themes.waituk.com/entrada-modern/product/mountain-hiking-tour/">
                      <span className="icon-reply"></span>
                    </a>
                  </div> */}
                    <div className="info-footer">
                      <span className="price">
                        from
                        <span>
                          <span>$</span>
                          <span>1,299</span>
                        </span>
                      </span>
                      <div className="link-more">
                        <Button LinkName={"Explore"} LinkAddress={"/#"} />
                      </div>
                    </div>
                  </div>
                </div>
                <h3>
                  <a href="https://themes.waituk.com/entrada-modern/product/mountain-hiking-tour/">
                    6 day highlights of Maasai mara
                  </a>
                </h3>
                <p>
                  Get closer to thrilling wildlife interactions and see
                  creatures big and small on morning and afternoon game drives.
                </p>
              </article>
            </div>
            <div className="article-wrap col-sm-6 col-md-4">
              <article className=" article has-hover-s3">
                <div className="img-wrap">
                  <div className="unset_img">
                    <Image
                      src="/assets/images/rhino-g33e949cc8_1920.jpg"
                      fill
                      className="attachment-550x358 size-550x358 wp-post-image"
                      alt="backgroundimage"
                    />
                  </div>

                  <div className="img-caption">6 Days</div>
                  <div className="hover-article">
                    <div className="info-footer">
                      <span className="price">
                        from
                        <span>
                          <span>$</span>
                          <span>1,299</span>
                        </span>
                      </span>
                      <div className="link-more">
                        <Button LinkName={"Explore"} LinkAddress={"/#"} />
                      </div>
                    </div>
                  </div>
                </div>
                <h3>
                  <a href="https://themes.waituk.com/entrada-modern/product/mountain-hiking-tour/">
                    6 day Mout kenya Hiking Tour
                  </a>
                </h3>
                <p>
                  Get closer to thrilling wildlife interactions and see
                  creatures big and small on morning and afternoon game drives.
                </p>
              </article>
            </div>
            <div className="article-wrap col-sm-6 col-md-4">
              <article className=" article has-hover-s3">
                <div className="img-wrap">
                  <div className="unset_img">
                    <Image
                      src="/assets/images/rhino-g33e949cc8_1920.jpg"
                      fill
                      className="attachment-550x358 size-550x358 wp-post-image"
                      alt="backgroundimage"
                    />
                  </div>

                  <div className="img-caption">18 Days</div>
                  <div className="hover-article">
                    <div className="info-footer">
                      <span className="price">
                        from
                        <span>
                          <span>$</span>
                          <span>1,149</span>
                        </span>
                      </span>
                      <div className="link-more">
                        <Button LinkName={"Explore"} LinkAddress={"/#"} />
                      </div>
                    </div>
                  </div>
                </div>
                <h3>
                  <a href="https://themes.waituk.com/entrada-modern/product/jungle-safari-in-africa/">
                    8 day Highlights of lenya
                  </a>
                </h3>
                <p>
                  Get closer to thrilling wildlife interactions and see
                  creatures big and small on morning and afternoon game drives.
                </p>
              </article>
            </div>
            <div className="article-wrap col-sm-6 col-md-4">
              <article className=" article has-hover-s3">
                <div className="img-wrap">
                  <div className="unset_img">
                    <Image
                      src="/assets/images/elephants.jpg"
                      fill
                      className="attachment-550x358 size-550x358 wp-post-image"
                      alt="backgroundimage"
                    />
                  </div>

                  <div className="img-caption">9 Hrs</div>
                  <div className="hover-article">
                    {/* <div className="star-rating">
                    <input className="front_rating" type="hidden" value="5" />
                  </div> */}

                    <div className="info-footer">
                      <span className="price">
                        from
                        <span>
                          <span>$</span>
                          <span>799</span>
                        </span>
                      </span>
                      <div className="link-more">
                        <Button LinkName={"Explore"} LinkAddress={"/#"} />
                      </div>
                    </div>
                  </div>
                </div>
                <h3>
                  <a href="https://themes.waituk.com/entrada-modern/product/paris-city-tour/">
                    Nairobi city tour excursions
                  </a>
                </h3>
                <p>
                  Get closer to thrilling wildlife interactions and see
                  creatures big and small on morning and afternoon game drives.
                </p>
              </article>
            </div>
            <div className="article-wrap col-sm-6 col-md-4">
              <article className=" article has-hover-s3">
                <div className="img-wrap">
                  <div className="unset_img">
                    <Image
                      src="/assets/images/rhino-g33e949cc8_1920.jpg"
                      fill
                      className="attachment-550x358 size-550x358 wp-post-image"
                      alt="backgroundimage"
                    />
                  </div>

                  <div className="img-caption">11 Days</div>
                  <div className="hover-article">
                    <div className="info-footer">
                      <span className="price">
                        from
                        <span>
                          <span>$</span>
                          <span>429</span>
                        </span>
                      </span>
                      <div className="link-more">
                        <Button LinkName={"Explore"} LinkAddress={"/#"} />
                      </div>
                    </div>
                  </div>
                </div>
                <h3>
                  <a href="https://themes.waituk.com/entrada-modern/product/city-tours-in-europe/">
                    11 days Best of Nakuru
                  </a>
                </h3>
                <p>
                  Get closer to thrilling wildlife interactions and see
                  creatures big and small on morning and afternoon game drives.
                </p>
              </article>
            </div>
            <div className="article-wrap col-sm-6 col-md-4">
              <article className=" article has-hover-s3">
                <div className="img-wrap">
                  <div className="unset_img">
                    <Image
                      src="/assets/images/elephants.jpg"
                      fill
                      className="attachment-550x358 size-550x358 wp-post-image"
                      alt="backgroundimage"
                    />
                  </div>

                  <div className="img-caption">10 Hrs</div>
                  <div className="hover-article">
                    <div className="info-footer">
                      <span className="price">
                        from
                        <span>
                          <span>$</span>
                          <span>1,099</span>
                        </span>
                      </span>
                      <div className="link-more">
                        <Button LinkName={"Explore"} LinkAddress={"/#"} />
                      </div>
                    </div>
                  </div>
                </div>
                <h3>
                  <a href="https://themes.waituk.com/entrada-modern/product/its-a-jungle-out-there/">
                    Mombasa excursions
                  </a>
                </h3>
                <p>
                  Get closer to thrilling wildlife interactions and see
                  creatures big and small on morning and afternoon game drives.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
