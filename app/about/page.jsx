"use client";

import { useEffect } from "react";

import { motion as a, useScroll, useTransform } from "framer-motion";

import Link from "next/link";

import Transition from "../../components/common/Transition";
import Nav from "../../components/Nav";
import PageHeader from "../../components/common/PageHeader";
import Lenis from "lenis";

import Marquee from "react-fast-marquee";

const AboutPage = () => {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const footerCtaTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    ["200px", "-0px"]
  );
  const footerCtaButtonTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    ["350px", "-50px"]
  );
  return (
    <Transition>
      <main>
        <Nav />
        <header className="ml-[1.25rem] lg:ml-[7.5rem] mt-[5rem] margin__setter">
          <PageHeader headerText="About me" />
        </header>
        <section className="margin__setter">
          <p className="pc mt-[5rem] text-2xl lg:text-3xl xl:text-4xl lg:ml-[40%]">
            <span className="opacity-0">_____</span>I am passionate about
            transforming design concepts into functional products that users can
            enjoy. Leveraging my skills to create exceptional websites for
            clients is incredibly rewarding.
            <br />
            <br />
            My journey began with Python, which initially posed a challenge.
            This experience led me to explore HTML, sparking my interest in
            coding and web development. Since then, I have concentrated on
            front-end development, particularly with the Next.js framework.
            <br />
            <br />
            As my programming knowledge grew, I revisited Python and ended up as a workshop leader at ExCode, the UK’s largest student-run Python bootcamp.
            In addition to my professional pursuits, I enjoy skiing, trading
            cryptocurrencies, and going to the gym.
          </p>
        </section>

        <section className="mt-[5rem] lg:mt-[10rem] my-[5rem] margin__setter">
          <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 text-lg lg:gap-4 gap-2">
            <div className="text-center">
              <p className="text-[6rem] hc lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] accent__col_text mb-[1.25rem]">
                3
              </p>
              <p className=" pc">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-[6rem] hc lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] accent__col_text mb-[1.25rem]">
                2.5
              </p>
              <p className=" pc">Years of Coding Experience</p>
            </div>
            <div className="text-center">
              <p className="text-[6rem] hc lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] accent__col_text mb-[1.25rem]">
                1
              </p>
              <p className=" pc">Bootcamps Taught</p>
            </div>
            <div className="text-center">
              <p className="text-[6rem] hc lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] accent__col_text mb-[1.25rem]">
                5
              </p>
              <p className=" pc">Coding Languages & Frameworks</p>
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
              <button className="hvr flex gap-1 pc p-12 lg:p-14 xl:p-16 rounded-[100%] ic font-medium text-xl lg:text-2xl xl:text-3xl">
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
      </main>
    </Transition>
  );
};

export default AboutPage;
