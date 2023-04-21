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
            AboutImage={"/assets/images/about/birds-g7c9bbe33f_1920.jpg"}
            ClassName={"text-for-bright-bg"}
          />
        </section>

        <div className="sec sec-1 py-5">
          <div className="container">
            <div className="about__intro">
              <div className="row">
                <div className="col-md">
                  <div className="heading">
                    <div className="heading__large pt-1">
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
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sec sec-2 py-5">
          <div className="container">
            <div className="about__intro">
              <div className="row">
                <div className="col-md">
                  <div className="about_image_container">
                    <div className="unset_img">
                      <Image
                        src="/assets/images/about/flaming-g5103a61d3_1920.jpg"
                        fill
                        priority
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md">
                  <div className="heading">
                    <div className="heading__large pt-1">
                      <h1>Our Vision</h1>
                    </div>
                  </div>
                  <p className="text-white">
                    To be an exemplar safari tours and travel company in kenya
                    that ensures sustainability, Environmental conservation,
                    customer satisfaction while being
                    environmental-consciousness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec sec-3 py-5">
          <div className="container">
            <div className="about__intro">
              <div className="row">
                <div className="col-md">
                  <div className="heading">
                    <div className="heading__large pt-1">
                      <h1>Our Mission</h1>
                    </div>
                  </div>
                  <p className="text-white">
                    To be an exemplar safari tours and travel company in kenya
                    that ensures sustainability, Environmental conservation,
                    customer satisfaction while being
                    environmental-consciousness.
                  </p>
                </div>
                <div className="col-md">
                  <div className="about_image_container">
                    <div className="unset_img">
                      <Image
                        src="/assets/images/about/giraffe-g4408903d9_1920.jpg"
                        fill
                        priority
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="why-chose-us bg-secondary ">
        <div className="about__intro">
          <div className="container">
            <div className="heading text-white d-lg-none d-xl-none">
              <div className="heading__small">
                <h3>Travel with purpose</h3>
              </div>
              <div className="heading__large">
                <h1>Why Choose Divine Travel Nest</h1>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-lg-8">
                <div className="h-100 d-flex justify-content-center ">
                  <div className="heading_container">
                    <div className="heading_wrapper">
                      <div className="heading text-white d-none d-lg-block d-xl-block ">
                        <div className="heading__small">
                          <h3>Travel with purpose</h3>
                        </div>
                        <div className="heading__large">
                          <h1>Why Choose Divine Travel Nest</h1>
                        </div>
                      </div>
                      <ul class="boldlist pt-3">
                        <li>
                          <h3>Customizied tours and itinaries</h3>
                          <p>We offer</p>
                        </li>
                        <li>
                          <h3>Sustainable tours and travel</h3>
                          <p>
                            we are focused on conservation and community
                            empowerment programmes in able to protect and
                            conserve nature.
                          </p>
                        </li>
                        <li>
                          <h3>Sustainable tours and travel</h3>
                          <p>
                            we are focused on conservation and community
                            empowerment programmes in able to protect and
                            conserve nature.
                          </p>
                        </li>
                        <li>
                          <h3>Guranted Emergency evacuation.</h3>
                          <p>To add appropriate content here</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="intro_image_container">
                  <div className="intro_image">
                    <div className="unset_img">
                      <Image
                        src="/assets/images/cheetahs-g28f32fd2c_1920.jpg"
                        fill
                        priority
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
