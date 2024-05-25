"use client";

import {
  // AnimatePresence,
  motion as a,
  useScroll,
  useTransform,
} from "framer-motion";

import Marquee from "react-fast-marquee";
import PageHeader from "../common/PageHeader"

import Link from "next/link"

const EndCta = ({ initialCtaTranslate, endCtaTranslate, initialButtonTranslate, endButtonTranslate }) => {
  const { scrollYProgress } = useScroll();

  const footerCtaTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [initialCtaTranslate, endCtaTranslate]
  );
  const footerCtaButtonTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [initialButtonTranslate, endButtonTranslate]
  );
  return (
    <section className="relative py-[7.5rem] 2xl:py-[10rem]">
      <div className="z-[-10]">
        <Marquee>
          <p className="pc text-[16rem] lg:text-[22.5rem] xl:text-[30rem] leading-[.85] overflow-y-hidden opacity-[0.05] uppercase">
            Let's Talk Let's Talk Let's Talk Let's Talk
          </p>
          <span className="opacity-0">___</span>
        </Marquee>
      </div>
      <a.div
        className="absolute top-[-10%] mt-[10rem] lg:w-[70%] xl:w-[60%] lg:ml-[10rem] ml-[1.25rem] mb-[2.5rem]"
        style={{ y: footerCtaTranslate }}
      >
        <PageHeader headerText="Let's work together." />
      </a.div>
      <a.div
        className="z-[99] absolute top-[60%] flex items-center gap-4 lg:ml-[20%] ml-[2.5rem] mt-[5rem]"
        style={{ y: footerCtaButtonTranslate }}
      >
        <Link href={"/contact"}>
          <button className=" shadow-2xl hvr flex gap-1 pc p-12 lg:p-14 xl:p-16 rounded-[100%] ic font-medium text-xl lg:text-2xl xl:text-3xl">
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
  );
};

export default EndCta;
