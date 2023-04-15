import MobileCarousel from "./mobilehero";

export default function PhonePage() {
  const OPTIONS = {
    inViewThreshold: 0,
    dragFree: true,
  };
  const SLIDE_COUNT = 4;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div className="container-fluid">
      <div className="sandbox__carousel">
        <MobileCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
}
