import Image from "next/image";

export default function PageAboutIntro({
  SubHeading,
  Heading,
  MainText,
  AboutImage,
  ClassName,
}) {
  return (
    <div className="about__intro">
      <div className="container">
        <div className={`heading ${ClassName} d-lg-none d-xl-none`}>
          <div className="heading__small">
            <h3>{SubHeading}</h3>
          </div>
          <div className="heading__large">
            <h1>{Heading}</h1>
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-lg-8">
            <div className="h-100 d-flex justify-content-center ">
              <div className="heading_container">
                <div className="heading_wrapper">
                  <div
                    className={`heading ${ClassName} d-none d-lg-block d-xl-block `}
                  >
                    <div className="heading__small">
                      <h3>{SubHeading}</h3>
                    </div>
                    <div className="heading__large">
                      <h1>{Heading}</h1>
                    </div>
                  </div>
                  <p className="text-black">{MainText}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="intro_image_container">
              <div className="intro_image">
                <div className="unset_img">
                  <Image src={AboutImage} fill priority alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
