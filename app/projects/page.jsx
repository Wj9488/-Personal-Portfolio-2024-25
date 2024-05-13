"use client";

import { useEffect } from "react";

import {
  motion as a,
  useScroll,
  useTransform,
} from "framer-motion";

import Link from "next/link"

import Transition from "@/components/common/Transition";
import Nav from "@/components/Nav";
import Project from "@/components/common/Project";
import PageHeader from "../../components/common/PageHeader";
import Lenis from "lenis";

import HomePageImage from "../../public/Images/w__home_2.jpg";
import Marquee from "react-fast-marquee";

const ProjectsPage = () => {
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
        <section className="margin__setter mt-[5rem]">
          <div className="ml-[1.25rem] lg:ml-[7.5rem] flex">
            <PageHeader headerText="My Projects" />
            <sup className="text-base pc">x11</sup>
          </div>
          <p className="lg:w-[25%] lg:mt-[5rem] mt-[2.5rem] ml-[20%] lg:ml-[40%] pc">
            All my projects including design, development, ideas I'm working on
            and University Projects.
          </p>
        </section>
        <section className="margin__setter pc">
          <div className="b__top mt-[5rem]">
            <Project
              imageSrc={HomePageImage}
              projectTitle="French For All"
              projectDate="2024"
              projectLabel="Design & Development"
              projectLink="https://french-lesson.com"
            />
          </div>
          <div className="b__top">
            <Project
              imageSrc={HomePageImage}
              projectTitle="Strong Words"
              projectDate="2023"
              projectLabel="Design & Development"
              projectLink="https://french-lesson.com"
            />
          </div>
          <div className="b__top">
            <Project
              imageSrc={HomePageImage}
              projectTitle="Finance for Managers"
              projectDate="2023"
              projectLabel="Design & Development"
              projectLink="https://french-lesson.com"
            />
          </div>
          <div className="b__top">
            <Project
              imageSrc={HomePageImage}
              projectTitle="Strong Words"
              projectDate="2023"
              projectLabel="Design & Development"
              projectLink="https://french-lesson.com"
            />
          </div>
          <div className="b__top">
            <Project
              imageSrc={HomePageImage}
              projectTitle="Finance for Managers"
              projectDate="2023"
              projectLabel="Design & Development"
              projectLink="https://french-lesson.com"
            />
          </div>
          <div className="b__top">
            <Project
              imageSrc={HomePageImage}
              projectTitle="Strong Words"
              projectDate="2023"
              projectLabel="Design & Development"
              projectLink="https://french-lesson.com"
            />
          </div>
          <div className="b__top">
            <Project
              imageSrc={HomePageImage}
              projectTitle="Finance for Managers"
              projectDate="2023"
              projectLabel="Design & Development"
              projectLink="https://french-lesson.com"
            />
          </div>
          <div className="b__top">
            <Project
              imageSrc={HomePageImage}
              projectTitle="Strong Words"
              projectDate="2023"
              projectLabel="Design & Development"
              projectLink="https://french-lesson.com"
            />
          </div>
          <div className="b__top">
            <Project
              imageSrc={HomePageImage}
              projectTitle="Finance for Managers"
              projectDate="2023"
              projectLabel="Design & Development"
              projectLink="https://french-lesson.com"
            />
          </div>
          <div className="b__top b__bottom">
            <Project
              imageSrc={HomePageImage}
              projectTitle="The Convo"
              projectDate="2023"
              projectLabel="Design & Development"
              projectLink="https://french-lesson.com"
            />
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
      </main>
    </Transition>
  );
};

export default ProjectsPage;
