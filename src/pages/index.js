import AboutIntro from "@/components/intro";
import Hero from "@/components/landing";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.css";
import FeaturedDestinations from "@/components/featuredDestinations";
import Banner from "@/components/advert";
import Categories from "@/components/categories";
import Image from "next/image";
import PhonePage from "@/components/phoneHero";

export default function Home() {
  return (
    <>
      <div
        id="hero"
        className="d-none d-md-block d-md-block d-lg-block d-xl-block"
      >
        <Hero />
      </div>
      <div className="hero_section_mobile d-lg-none d-xl-none">
        <PhonePage />
      </div>

      <section id="about_intro">
        <AboutIntro />
        <div className="footer_section_image d-none d-md-block d-lg-block d-xl-block">
          <div className="unset_img">
            <Image
              src="/assets/images/footerA.png"
              fill
              object-fit="cover"
              priority
              alt="backgroundimage"
            />
          </div>
        </div>
      </section>

      <section id="featured_destinations">
        <FeaturedDestinations />
        <div className="footer_section_image d-none d-md-block d-lg-block d-xl-block">
          <div className="unset_img">
            <Image
              src="/assets/images/Art.png"
              fill
              object-fit="cover"
              priority
              alt="backgroundimage"
            />
          </div>
        </div>
      </section>

      <div className="banner_img">
        <Banner />
      </div>

      <section id="categories">
        <Categories />
        <div className="footer_section_image d-none d-md-block d-lg-block d-xl-block">
          <div className="unset_img">
            <Image
              src="/assets/images/footerimgB.png"
              fill
              object-fit="cover"
              priority
              alt="backgroundimage"
            />
          </div>
        </div>
      </section>
    </>
  );
}
