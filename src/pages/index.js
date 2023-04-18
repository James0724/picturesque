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
      <div id="hero">
        <Hero />
      </div>
      <div className="background-brown">
        <section id="about-intro">
          <AboutIntro />
          <div className="footer_section_image d-none d-md-block d-lg-block d-xl-block">
            <div className="unset_img">
              <Image
                src="/assets/images/aboutfooter.png"
                fill
                object-fit="cover"
                priority
                alt="backgroundimage"
              />
            </div>
          </div>
        </section>
      </div>

      <section id="featured-tours">
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

      <div className="banner_img pb-5">
        <Banner />
      </div>
      <div className="background-brown">
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
      </div>
    </>
  );
}
