import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { flushSync } from "react-dom";
import imageByIndex from "./imageByIndex";
//import { PrevButton, NextButton } from "./emblaCarouselArrowsButtons";
import Image from "next/image";

const TWEEN_FACTOR = 1.2;

const MobileCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const [tweenValues, setTweenValues] = useState([]);
  //const [carouselIndex, setCarouselIndex] = useState(1);

  //   const scrollPrev = useCallback(
  //     () => emblaApi && emblaApi.scrollPrev(),
  //     [emblaApi]
  //   );
  //   const scrollNext = useCallback(
  //     () => emblaApi && emblaApi.scrollNext(),
  //     [emblaApi]
  //   );

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    //const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    //setCarouselIndex(Math.floor((progress * 100) / (slides.length * 4)));

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
      <div className="container-fluid">
        {/* <div className="">
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
        </div> */}

        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((index) => (
                <div className="embla__slide" key={index}>
                  <div className="embla__slide__content">
                    <div className="embla__slide__carousel_img">
                      <div className="unset_img">
                        <Image
                          src={imageByIndex(index)}
                          fill
                          priority
                          object-fit="cover"
                          alt="backgroundimage"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileCarousel;
