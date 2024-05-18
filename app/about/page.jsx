"use client";

import { useEffect } from "react";

import Transition from "../../components/common/Transition";
import Nav from "../../components/Nav";
import PageHeader from "../../components/common/PageHeader";
import Lenis from "lenis";

import EndCta from "../../components/common/EndCta";


const AboutPage = () => {

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
          <PageHeader headerText="About me" />
        </header>
        <section className="margin__setter">
          <p className="pc mt-[5rem] text-2xl lg:text-3xl lg:ml-[40%]">
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
              <p className="text-[6rem] pc lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] accent__col_text mb-[1.25rem]">
                3
              </p>
              <p className=" pc">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-[6rem] pc lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] accent__col_text mb-[1.25rem]">
                2.5
              </p>
              <p className=" pc">Years of Coding Experience</p>
            </div>
            <div className="text-center">
              <p className="text-[6rem] pc lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] accent__col_text mb-[1.25rem]">
                1
              </p>
              <p className=" pc">Bootcamps Taught</p>
            </div>
            <div className="text-center">
              <p className="text-[6rem] pc lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] accent__col_text mb-[1.25rem]">
                5
              </p>
              <p className=" pc">Coding Languages & Frameworks</p>
            </div>
          </div>
        </section>

        <EndCta 
            initialCtaTranslate="150px"
            endCtaTranslate="-50px"

            initialButtonTranslate="200px"
            endButtonTranslate="-100px"
        />
      </main>
    </Transition>
  );
};

export default AboutPage;
