import AboutIntro from "@/components/intro";
import Hero from "@/components/landing";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.css";
import FeaturedDestinations from "@/components/featuredDestinations";
import Banner from "@/components/advert";
import Categories from "@/components/categories";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about_intro">
        <AboutIntro />
        <div className="footer_section_image">
          <div className="unset_img">
            <Image
              src="/assets/images/footerA.png"
              fill
              alt="backgroundimage"
            />
          </div>
        </div>
      </section>

      <section id="featured_destinations">
        <FeaturedDestinations />
        <div className="footer_section_image">
          <div className="unset_img">
            <Image
              src="/assets/images/footerimgB.png"
              fill
              alt="backgroundimage"
            />
          </div>
        </div>
      </section>

      <section id="section_breaker">
        <Banner />
      </section>
      <section id="categories">
        <Categories />
        <div className="footer_section_image">
          <div className="unset_img">
            <Image src="/assets/images/Art.png" fill alt="backgroundimage" />
          </div>
        </div>
      </section>
    </>
  );
}
