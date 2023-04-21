import Image from "next/image";
import { UnderlineEffect } from "./uiElements";

export const NewPageHero = ({ IntroImage, IntroText }) => {
  const imageComponent = (
    <Image
      src="/assets/images/hero-pattern.png"
      priority
      fill
      object-fit="cover"
      alt="Elephants"
    />
  );
  return (
    <div className="pagehero ">
      <div className="hero__pattern right_up">{imageComponent}</div>
      <div className="hero__pattern left__down ">{imageComponent}</div>

      <div className="hero-image-bg">
        <Image
          src={IntroImage}
          priority
          fill
          object-fit="cover"
          alt="Elephants"
        />
      </div>
      <div className="hero-content">
        <div className="container h-100 d-flex align-item-center">
          <div className="row align-items-center">
            <div className="col-lg-5 mx-auto text-center">
              <h1
                className="heading-text mb-2 aos-init aos-animate"
                data-aos="fade-up"
              >
                {IntroText}
              </h1>
              <div className="pd-2 pb-5">
                <UnderlineEffect />
              </div>
              <p
                class="text-white aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Divine Travel Nest was established out of commitment to provide
                a sustainable safari tour services around east Africa, with
                awesome and unforgettable experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
