"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// import Preloader from "@/components/common/Pre-Loader/PreLoader";
import {
  // AnimatePresence,
  motion as a,
  useScroll,
  useTransform,
} from "framer-motion";

import Lenis from "lenis";

import Nav from "@/components/Nav";
import PageHeader from "@/components/common/PageHeader";
import CommonHeader from "@/components/common/CommonHeader";
import AbsoluteText from "@/components/common/absoluteText";
import AnimatedImage from "@/components/common/AnimatedImage";
import Project from "@/components/common/Project";
import Cta from "@/components/common/cta";

import Marquee from "react-fast-marquee";

import HomePageImage from "../public/Images/w__home_2.jpg";
import TetherCMS from "../public/Images/cms__thumb.png";
import Portfolio from "../public/Images/pp__thumb.png";
import Kind from "../public/Images/kind__thumb.png";
import StrongWords from "../public/Images/strong_words__thumb.png";
import FrenchForAll from "../public/Images/french_for_all__thumb.png";
import Array from "../public/Images/array__thumb.png";
import ThousandLines from "../public/Images/thousand_lines__thumb.png";
import Excode from "../public/Images/excode__thumb.png";
import Birdlime from "../public/Images/birdlime__thumb.png";
import Finance from "../public/Images/finance__thumb.png";

import Transition from "@/components/common/Transition";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const ImageTranslate = useTransform(scrollYProgress, [0, 1], ["10%", "-25%"]);
  const CtaTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    ["150px", "-100px"]
  );
  const projectSectionTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    ["325px", "-100px"]
  );
  const footerCtaTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    ["200px", "-0px"]
  );
  const footerCtaButtonTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    ["600px", "-50px"]
  );

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  // console.log(isLoading)

//  useEffect(() => {
//     document.body.style.overflow = isLoading ? "hidden" : "auto";
//   }, [isLoading]);



  useEffect(() => {
    // if (!sessionStorage.getItem("hasLoadedOnce")) {
    //   setIsLoading(true);
    //   sessionStorage.setItem("hasLoadedOnce", "true");

    //   setTimeout(() => {
    //     setIsLoading(false);
    //     window.scrollTo(0, 0);
    //   }, 2000);
    // }

    // console.log("inside the use effect:", isLoading)

    const checkScreenSize = () => {
      setVisible(window.innerWidth > 800);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      // Ensure scrolling is enabled when component unmounts
      document.body.style.overflow = "auto";
    };
  }, []);

  const workExperienceData = {
    experiences: [
      {
        companyName: "Exeter Entrepreneurs Society",
        position: "Python Workshop Leader",
        period: "Sept 2023 - Nov 2023",
      },
      {
        companyName: "Array",
        position: "Design & Web Dev Intern",
        period: "May 2023 - July 2023",
      },
      {
        companyName: "Thousand Lines",
        position: "Web Dev Intern",
        period: "May 2023 - July 2023",
      },
    ],
  };

  return (
    <Transition>
      <div>{visible && <AbsoluteText />}</div>
      <main className="">
        {/* <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence> */}
        <Nav />
        <div>
          <header className="margin__setter">
            <div className="mt-[5rem]">
              <PageHeader headerText="Creative front end developer." />
            </div>
            <p className="pc mt-[2.5rem] text-[] text-4xl lg:ml-[40%]">
              <span className="opacity-0">_____</span>I help small businesses
              and professional stand out from competitors with a fast, dynamic
              and modern
              <br />
              website.
            </p>
          </header>

          <section className="">
            <div className="lg:flex lg:ml-[40%] mx-auto w-[95%] items-end lg:w-full lg:mr-[2%] lg:gap-[2rem]">
              <a.div className="lg:order-2" style={{ y: ImageTranslate }}>
                <AnimatedImage
                  src={HomePageImage}
                  width="400"
                  height="600"
                  className="w-[full] h-[auto] xl:w-[400px] xl:h-[600px] 2xl:w-[550px] 2xl:h-[auto] rounded mt-[2.5rem] mb-[2.5rem] lg:my-[2.5rem] z-[5]"
                />
              </a.div>
              <p className="pc mb-[5rem] lg:w-[25%] xl:w-[30%] 2xl:w-[25%] lg:order-1">
                I'm a bilingual English and French creative front-end developer
                studying business and management at Exeter University.
                <br />
                <br />
                Starting in 2021, I’ve amassed over 2 years of experience
                working on both personal projects and client projects alongside
                agencies or freelancing.
              </p>
            </div>
          </section>

          <section className="margin__setter pc">
            <CommonHeader headerText="Work Experience" />
            <div className="lg:ml-[40%] mt-[5rem]">
              <div className="">
                <div className="grid grid-cols-1 grid-rows-3 my-[2.5rem]">
                  {workExperienceData.experiences.map((experience, index) => (
                    <div
                      key={index}
                      className="b__bottom lg:grid lg:grid-cols-3 gap-4 grid-rows-1 items-end py-[1rem]"
                    >
                      <div className="">
                        <p className="opacity-50 mb-2 text-base">
                          Company Name
                        </p>
                        <p>{experience.companyName}</p>
                      </div>
                      <div className="">
                        <p className="opacity-50 my-2 text-base">Position</p>
                        <p>{experience.position}</p>
                      </div>
                      <div className="">
                        <p className="opacity-50 my-2 text-base">Period</p>
                        <p>{experience.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <a.div style={{ y: CtaTranslate }}>
              <Cta linkPath="/about" text="About me" extraCss="shadow-2xl" />
            </a.div>
          </section>

          <a.section className="padding__setter pt-[5rem] pb-[10rem] mb-[5rem] shadow-2xl ic bg-[#f7f7f7]"
            style={{ y: projectSectionTranslate }}
          >
            <CommonHeader headerText="Projects, Experiences and Ideas" extraCss="ic" />
            {/* <div className="ic__b_top mt-[2.5rem]">
              <Project
                imageSrc={TetherCMS}
                projectTitle="Tether CMS"
                projectDate="2024"
                projectLabel="Idea"
                projectLink="/idea/cms"
              />
            </div> */}
            <div className="ic__b_top">
              <Project
                imageSrc={Portfolio}
                projectTitle="Personal Portfolio"
                projectDate="2024"
                projectLabel="Design & Code"
                projectLink="#current_website"
              />
            </div>
            {/* <div className="ic__b_top">
              <Project
                imageSrc={Kind}
                projectTitle="Kind Snacks Case Analysis"
                projectDate="2024"
                projectLabel="University Project"
                projectLink="/project/kind-snacks"
              />
            </div> */}
            <div className="ic__b_top">
              <Project
                imageSrc={Finance}
                projectTitle="Finance For Managers"
                projectDate="2024"
                projectLabel="Design & Code"
                projectLink="https://finance.william.services"
              />
            </div>
            <div className="ic__b_top">
              <Project
                imageSrc={Excode}
                projectTitle="Excode"
                projectDate="2023"
                projectLabel="Work Experience"
                projectLink="/experience/excode"
              />
            </div>
            <div className="ic__b_top">
              <Project
                imageSrc={Birdlime}
                projectTitle="Birdlime Media"
                projectDate="2023"
                projectLabel="Code"
                projectLink="https://birdlimemedia.co.uk/"
              />
            </div>
            <div className="ic__b_top">
              <Project
                imageSrc={ThousandLines}
                projectTitle="Thousand Lines Internship"
                projectDate="2023"
                projectLabel="Work Experience"
                projectLink="/experience/thousand-lines"
              />
            </div>
            <div className="ic__b_top">
              <Project
                imageSrc={StrongWords}
                projectTitle="Strong Words"
                projectDate="2023"
                projectLabel="Design & Code"
                projectLink="https://strong-words.co.uk"
              />
            </div>
            <div className="ic__b_top">
              <Project
                imageSrc={Array}
                projectTitle="Array Internship"
                projectDate="2023"
                projectLabel="Work Experience"
                projectLink="/experience/array"
              />
            </div>
            <div className="ic__b_top ic__b_bottom">
              <Project
                imageSrc={FrenchForAll}
                projectTitle="French For All"
                projectDate="2023"
                projectLabel="Design & Code"
                projectLink="https://french-lesson.com"
              />
            </div>
          </a.section>

          <section className="margin__setter mt-[5rem]">
          <div className="lg:w-3/4">
            <CommonHeader
              headerText="Current Skillset"
            />
          </div>

          <div className="mt-[5rem] grid grid-cols-2 lg:gap-12 gap-4 lg:grid-cols-4 grid-rows-1 text-lg py-[1rem] pc">
            <div>
              <p className="opacity-50 mb-2 lg:text-lg text-sm">
                Coding Languages
              </p>
              <p className="">
                HTML 5
                <br />
                CSS
                <br />
                Javascript
                <br />
                Python
                <br />
                Typescript
              </p>
            </div>
            <div>
              <p className="opacity-50 mb-2 lg:text-lg text-sm">Frameworks</p>
              <p className="">
                React
                <br />
                Next Js
                <br />
                Tailwind CSS
                <br />
                SCSS
              </p>
            </div>
            <div>
              <p className="opacity-50 mb-2 lg:text-lg text-sm">Animation</p>
              <p className="">
                GSAP
                <br />
                Framer-Motion
              </p>
            </div>
            <div>
              <p className="opacity-50 mb-2 lg:text-lg text-sm">
                Microsoft Office
              </p>
              <p className="">
                Outlook
                <br />
                Excel
                <br />
                Powerpoint
                <br />
                Word
                <br />
                Power Automate
              </p>
            </div>
          </div>
        </section>

          <section className="relative py-[5rem]">
            <div className="z-[-10]">
              <Marquee>
                <p className="pc text-6xl lg:text-7xl xl:text-9xl overflow-y-hidden opacity-5">
                  Let's Talk Let's Talk Let's Talk Let's Talk
                </p>
                <span className="opacity-0">___</span>
              </Marquee>
              <Marquee direction="right" speed={40}>
                <p className="pc text-6xl lg:text-7xl xl:text-9xl overflow-y-hidden opacity-5">
                  Let's Talk Let's Talk Let's Talk Let's Talk
                </p>
                <span className="opacity-0">___</span>
              </Marquee>
              <Marquee>
                <p className="pc text-6xl lg:text-7xl xl:text-9xl overflow-y-hidden opacity-5">
                  Let's Talk Let's Talk Let's Talk Let's Talk
                </p>
                <span className="opacity-0">___</span>
              </Marquee>
              <Marquee direction="right" speed={40}>
                <p className="pc text-6xl lg:text-7xl xl:text-9xl overflow-y-hidden opacity-5">
                  Let's Talk Let's Talk Let's Talk Let's Talk
                </p>
                <span className="opacity-0">___</span>
              </Marquee>
              <Marquee>
                <p className="pc text-6xl lg:text-7xl xl:text-9xl overflow-y-hidden opacity-5">
                  Let's Talk Let's Talk Let's Talk Let's Talk
                </p>
                <span className="opacity-0">___</span>
              </Marquee>
            </div>
            <a.div
              className="absolute top-[-20%] lg:top-[-10%] xl:top-[-5%] mt-[10rem] lg:w-[70%] xl:w-[60%] lg:ml-[10rem] ml-[1.25rem] mb-[2.5rem]"
              style={{ y: footerCtaTranslate }}
            >
              <PageHeader headerText="Let's work together." />
            </a.div>
            <a.div
              className="z-[99] absolute top-[50%] flex items-center gap-4 lg:ml-[20%] ml-[2.5rem] mt-[5rem]"
              style={{ y: footerCtaButtonTranslate }}
            >
              <Link href={"/contact"}>
                <button className="hvr flex gap-1 pc p-12 lg:p-14 xl:p-16 global__bg rounded-[100%] ic font-medium text-xl lg:text-2xl xl:text-3xl">
                  Get Started
                  <svg
                    className="xl:h-[35px] xl:w-[35px] lg:h-[30px] lg:w-[30px] h-[25px] w-[25px]"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.7364 17.1966L17.2612 17.2029L17.2674 8.47078L6.34444 19.3938L5.28981 18.3391L16.2128 7.41615L7.48068 7.42243L7.48696 5.9472H18.7364V17.1966Z"
                      className="svgFill"
                    />
                  </svg>
                </button>
              </Link>
            </a.div>
          </section>
        </div>
      </main>
    </Transition>
  );
}
