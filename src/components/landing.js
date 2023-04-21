import Image from "next/image";
import { UnderlineEffect } from "./uiElements";

const imageComponent = (
  <Image
    src="/assets/images/hero-pattern.png"
    priority
    fill
    object-fit="cover"
    alt="Elephants"
  />
);

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-main">
          <div className="hero__pattern right_up">{imageComponent}</div>
          <div className="hero__pattern left__down ">{imageComponent}</div>
          <div className="video__wrapper">
            <video autoPlay muted loop>
              <source
                src="/assets/videos/Thomson Safaris.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        <div className="hero__introduction">
          <div className="content-box container">
            <h1>Creating memorable experience</h1>
            <UnderlineEffect />
          </div>
        </div>
      </div>
    </>
  );
}
