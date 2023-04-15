import EmblaCarousel from "./categoriesCarousel";

export default function Categories() {
  const OPTIONS = {
    inViewThreshold: 0,
    dragFree: true,
    align: "start",
  };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div className="experiences">
      <div className="container-fluid">
        <div className="sandbox__carousel">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>

        <div className="carousel"></div>
      </div>
    </div>
  );
}
