import Image from "next/image";
//import { Animated } from "react-animated-css";
import { Button } from "./uiElements";

export default function AboutIntro() {
  return (
    <div className="about__intro ">
      <div className="container">
        <div className="animate__animated animate__fadeInUp heading text-for-bright-bg d-lg-none d-xl-none">
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
                <div className="animate__animated animate__fadeInUp ">
                  <div className="heading text-for-bright-bg d-none d-lg-block d-xl-block ">
                    <div className="heading__small">
                      <h3>We are Picturesque</h3>
                    </div>
                    <div className="heading__large">
                      <h1>Experience serenity inspired by the land</h1>
                    </div>
                  </div>
                  <p className="text-black">
                    Divine Travel Nest (DTN) is a tour company that was
                    established in Kenya to provide splendid and suistainable
                    safari tour services around eastern Africa, with an
                    impressive and memorable experience. We focus on customized
                    safari tours for our clients including wildife, camping,
                    adventures, honeymoon and work related conferences.
                  </p>
                  <Button LinkName={"More about us"} LinkAddress={"/about"} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="intro_image_container animate__animated animate__fadeInUp">
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
