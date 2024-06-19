"use client"

import PageHeader from "../common/PageHeader"
import Transition from "./Transition"
import Nav from "../Nav"
import { motion as a, useScroll, useTransform } from "framer-motion";
import EndCta from "../common/EndCta"
import Lenis from "lenis";

import { useEffect } from "react"

const ShowcasePageTemplate = ({headingText, mainText, experienceType, experienceDuration, experienceRole}) => {
  const { scrollYProgress } = useScroll();

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
    <Nav />
    <main className="">

        <header className="my-[5rem] 3xl:my-[10rem] margin__setter ml-[1.25rem] lg:ml-[7.5rem]">
            <PageHeader headerText={headingText}/>
        </header>
        <section className="margin__setter">
          <div className="lg:flex items-center gap-4 lg:ml-[40%]">
            <div className="flex items-center gap-2 mb-2 lg:mb-0">
              <p className="pc opacity-50">Type:{" "}</p>
              <p className="pc font-medium">{experienceType}</p>
            </div>
            <div className="flex items-center gap-2 mb-2 lg:mb-0">
              <p className="pc opacity-50">Role:{" "}</p>
              <p className="pc font-medium">{experienceRole}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="pc opacity-50">Duration:{" "}</p>
              <p className="pc font-medium">{experienceDuration}</p>
            </div>
          </div>`  `
          <p className="pc mt-[2.5rem] text-2xl lg:text-3xl lg:ml-[40%]" dangerouslySetInnerHTML={{ __html: mainText }}>
          </p>
        </section>
        <div className="3xl:mt-[10rem]">
          <EndCta 
              initialCtaTranslate="125px"
              endCtaTranslate="-50px"

              initialButtonTranslate="175px"
              endButtonTranslate="-100px"
          />
        </div>
    </main>
    </Transition>
  )
}

export default ShowcasePageTemplate