import Image from "next/image";
import Link from "next/link";

export default function AboutIntro() {
  return (
    <div className="about__intro">
      <div className="container">
        <div className="heading text-for-bright-bg d-lg-none d-xl-none">
          <div className="heading__small">
            <h3>We are Picturesque</h3>
          </div>
          <div className="heading__large">
            <h1>Experience serenity inspired by the land</h1>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-lg-8">
            <div className="h-100 d-flex justify-content-center ">
              <div className="heading_container">
                <div className="heading_wrapper">
                  <div className="heading text-for-bright-bg d-none d-lg-block d-xl-block ">
                    <div className="heading__small">
                      <h3>We are Picturesque</h3>
                    </div>
                    <div className="heading__large">
                      <h1>Experience serenity inspired by the land</h1>
                    </div>
                  </div>
                  <p className="text-black">
                    We are a dynamic, proudly Kenya safari company. we have
                    professional licenced guides speaking four languages
                    English, Spanish, French and Swahili. Throught our work we
                    uphold environmental princriples and we aim to help our
                    community. We are at your service to make your dream
                    vacation a reality the way you want it to be with high
                    quality profesional services delivered by experienced,
                    knowledgeable and freindly staff.
                  </p>
                  <Link href="/the-setting" className="button intro_btn">
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
                      <div className="button-text">More about us</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="intro_image_container">
              <div className="intro_image">
                <div className="unset_img">
                  <Image
                    src="/assets/images/zebras-g81046a2ea_1920.jpg"
                    fill
                    priority
                    alt="Elephants"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
