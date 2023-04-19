import PageAboutIntro from "@/components/pageAbout";
import { NewPageHero } from "@/components/pageIntro";
import Image from "next/image";

export default function About() {
  return (
    <>
      <NewPageHero
        IntroImage={"/assets/images/about/safari-gc80a8c477_1920.jpg"}
        IntroText={"About Us"}
      />
      <div className="background-brown">
        <section>
          <PageAboutIntro
            SubHeading={"About Us"}
            Heading={"Divine Travel Nest"}
            MainText={
              "Divine Travel Nest was established out of commitment to provide a sustainable safari tour services around east Africa, with awesome and unforgettable experience."
            }
            AboutImage={"/assets/images/zebras-g81046a2ea_1920.jpg"}
          />
        </section>

        <section class="sec sec-1">
          <div class="container">
            <div className="about__intro">
              <div className="row">
                <div className="col-md">
                  <div className="heading">
                    <div className="heading__large">
                      <h1>Our Manifesto</h1>
                    </div>
                  </div>
                  <p className="text-white">
                    As an upcoming tour and travel hospitality company, we will
                    focus on immersing our guests in many fascinating
                    environments. Giving them a wide range of tour packages to
                    choose from offering the freedom of customizing and Guiding
                    them through each expansive private concession. Enabling our
                    guest to Create intimate encounters with nature and culture
                    in Africa.
                  </p>
                </div>
                <div className="col-md">
                  <div className="about_image_container">
                    <div className="unset_img">
                      <Image
                        src="/assets/images/about/lions-g1d5a4291f_1920.jpg"
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
        </section>

        <section class="sec sec-2">
          <div class="container">
            <div className="about__intro">
              <div className="row">
                <div className="col-md">
                  <div className="about_image_container">
                    <div className="unset_img">
                      <Image
                        src="/assets/images/about/flaming-g5103a61d3_1920.jpg"
                        fill
                        priority
                        alt="Elephants"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md">
                  <div className="heading">
                    <div className="heading__large">
                      <h1>Our Vision</h1>
                    </div>
                  </div>
                  <p className="text-white">
                    To be an exemplar safari tours and travel company in kenya
                    that ensures safety and respectability, customer
                    satisfaction while being environmental-consciousness. and
                    engage in conservation programs to ensure sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec sec-3">
          <div className="container">
            <div className="about__intro">
              <div className="row">
                <div className="col-md">
                  <div className="heading">
                    <div className="heading__large">
                      <h1>Our Mission</h1>
                    </div>
                  </div>
                  <p className="text-white">
                    To be an exemplar safari tours and travel company in kenya
                    that ensures safety and respectability, customer
                    satisfaction while being environmental-consciousness. and
                    engage in conservation programs to ensure sustainability.
                  </p>
                </div>
                <div className="col-md">
                  <div className="about_image_container">
                    <div className="unset_img">
                      <Image
                        src="/assets/images/about/flaming-g5103a61d3_1920.jpg"
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
        </section>
      </div>
    </>
  );
}
