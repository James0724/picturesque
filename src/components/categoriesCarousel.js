import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { flushSync } from "react-dom";
import { PrevButton, NextButton } from "./emblaCarouselArrowsButtons";
import Image from "next/image";

const TWEEN_FACTOR = 1.2;

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [tweenValues, setTweenValues] = useState([]);
  const [carouselIndex, setCarouselIndex] = useState(1);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setCarouselIndex(Math.floor((progress * 100) / (slides.length * 4)));

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      if (!emblaApi.slidesInView().includes(index)) return 0;
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target().get();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      return diffToTarget * (-1 / TWEEN_FACTOR) * 100;
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();

    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <>
      <div className="container">
        <div className="heading d-lg-none d-xl-none">
          <div className="heading__small">
            <h3>We are Picturesque</h3>
          </div>
          <div className="heading__large">
            <h1>Experience serenity inspired by the land</h1>
          </div>
        </div>
        <div className="row pb-5 overflow-hidden ">
          <div className="col-md-8">
            <div className="heading_container">
              <div className="heading_wrapper">
                <div className="heading d-none d-lg-block d-xl-block ">
                  <div className="heading__small">
                    <h3>Our Experiences</h3>
                  </div>
                  <div className="heading__large">
                    <h1>Experience untamed adventures</h1>
                  </div>
                </div>
                <p className="intro_text">
                  Awaken your adventurous side with experiences you will
                  remember for a lifetime. with us you will experience a wide
                  range of activities while immerseing yourself in breathtaking
                  views in each of our safari destinations.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 controls pt-3 pb-3">
            <div className="float-bottom">
              <div className="row align-items-center w-100">
                <div className="embla__control_btns col-3 d-flex justify-content-center">
                  <PrevButton onClick={scrollPrev} />
                </div>
                <div className="embla__control_btns col-6 d-flex justify-content-center">
                  <h1 className="embla__carousel__index">
                    0 {carouselIndex + 1} <strong>/</strong> 0 {slides.length}
                  </h1>
                </div>
                <div className="embla__control_btns col-3 d-flex justify-content-center">
                  <NextButton onClick={scrollNext} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__content__wrapper">
                  <h1 className="embla__carousel__index">0 {index + 1}</h1>
                  <div className="unset_img">
                    <Image
                      src="/assets/images/elephants.jpg"
                      fill
                      alt="backgroundimage"
                    />
                  </div>
                </div>
                <div className="embla__slide__text w-100">
                  {/* <h1 className="embla__heading pt-5 pb-2">
                    Marine Park Safaris
                  </h1> */}
                  {/* <p className="intro-text pt-2 pb-2">
                    Get closer to thrilling marine wildlife, you can also take a
                    swim with them!
                  </p> */}
                  <a href="/the-setting" className="button intro_btn pt-3">
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
                      <div className="button-text">Marine Park Safaris</div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
