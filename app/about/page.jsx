"use client";

import { useEffect } from "react";

import Transition from "../../components/common/Transition";
import Nav from "../../components/Nav";
import PageHeader from "../../components/common/PageHeader";
import Lenis from "lenis";

import {
  motion as a,
  useScroll,
  useTransform,
} from "framer-motion";

import Image from "next/image"
import Link from "next/link"
import AboutImage from "../../public/Images/about__page.png"

import EndCta from "../../components/common/EndCta";


const AboutPage = () => {

  const { scrollYProgress } = useScroll();
  const imageTransform = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", "150px"]
  );

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Transition>
      <main>
        <Nav />
        <header className="ml-[1.25rem] lg:ml-[7.5rem] mt-[5rem] margin__setter">
          <PageHeader headerText="About me" extraCss="" />
        </header>
        <section className="padding__setter relative">
          <p className="pc mt-[5rem] text-2xl lg:text-3xl lg:ml-[40%] lg:pb-[10rem]">
            <span className="opacity-0">_____</span>I am passionate about
            transforming design concepts into functional products that users can
            enjoy. Leveraging my skills to turn client and personal projects into a reality is very rewarding.
          </p>
        </section>
        <a.div className="lg:hidden left-0 bottom-0"
          style={{ y: imageTransform }}
          >
            <Image 
              src={AboutImage}
              width={400}
              height="auto"
              placeholder="blur"
              className="opacity-90 "
            />
          </a.div>

        <section className="relative padding__setter l__bg py-[5rem] 3xl:py-[10rem] z-10 overflow-y-hidden">

        <a.div className="hidden lg:block lg:absolute lg:left-0 lg:bottom-0"
          style={{ y: imageTransform }}
        >
          <Image 
            src={AboutImage}
            width={400}
            height="auto"
            placeholder="blur"
            className="opacity-90 3xl:w-[500px] 3xl:h-[auto]"
          />
        </a.div>
          <p className="pc text-2xl lg:text-3xl lg:ml-[40%]">
            
            My journey really began with learning HTML soon followed by CSS sparking my interest in
            coding and web development. I have a passion for design and enjoy building things therefore, I concentrated on
            front-end development. Seeing the wide application of the React framework, I chose to learn the Next.js framework.
            <br />
            <br />
            As my knowledge grew I chose to learn Python and ended up working as a workshop leader at <Link className="underline transition-all duration-200 ease-in-out hover:opacity-50" target="_blank" href={"https://excode.co.uk/"}>ExCode</Link>, the UK’s largest student-run Python bootcamp in 
            parallel with my studies.
            In addition to my professional pursuits, I enjoy skiing, trading
            cryptocurrencies, and going to the gym.
          </p>
        </section>

        <section className="mt-[5rem] lg:mt-[10rem] my-[5rem] margin__setter z-[10]">
          <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 text-lg lg:gap-4 gap-2">
            <div className="text-center">
              <p className="text-[6rem] hc lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] accent__col_text mb-[1.25rem]">
                5
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

        <EndCta 
            initialCtaTranslate="200px"
            endCtaTranslate="-50px"

            initialButtonTranslate="300px"
            endButtonTranslate="-100px"
        />
      </main>
    </Transition>
  );
};

export default AboutPage;
