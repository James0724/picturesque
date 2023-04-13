import Image from "next/image";

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
    <div className="hero">
      <div className="hero__pattern right_up">{imageComponent}</div>
      <div className="hero__pattern left__down d-none d-lg-block d-xl-block">
        {imageComponent}
      </div>
      <div className="video__wrapper">
        <video autoPlay muted loop>
          <source src="/assets/videos/Thomson Safaris.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero__introduction">
        <div className="content-box">
          <div className="content-box__title">
            <div className="top">Picturesque Beyond Words</div>
            <div className="bottom" aria-hidden="true">
              Picturesque Beyond Words
            </div>
          </div>
          {/* <div className="content-box__text ">
            <blockquote>
              <p>Capture Lasting Memories on An African Safari</p>
              <cite>Abraham Lincoln</cite>
            </blockquote> 
          </div>
         <div className="content-box__btn">
            <a href="!#" className="float-end btn btn-primary">
              Start Your Adventure
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
