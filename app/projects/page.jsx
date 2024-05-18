"use client";

import { useEffect } from "react";

import Transition from "../../components/common/Transition";
import Nav from "../../components/Nav";
import Project from "../../components/common/Project";
import PageHeader from "../../components/common/PageHeader";
import Lenis from "lenis";

import TetherCMS from "../../public/Images/cms__thumb.png";
import Portfolio from "../../public/Images/pp__thumb.png";
import Kind from "../../public/Images/kind__thumb.png";
import Birdlime from "../../public/Images/birdlime__thumb.png";
import StrongWords from "../../public/Images/strong_words__thumb.png";
import FrenchForAll from "../../public/Images/french_for_all__thumb.png";
import Array from "../../public/Images/array__thumb.png";
import ThousandLines from "../../public/Images/thousand_lines__thumb.png";
import Excode from "../../public/Images/excode__thumb.png";
import Finance from "../../public/Images/finance__thumb.png";
import Marquee from "react-fast-marquee";
import EndCta from "../../components/common/EndCta";

const ProjectsPage = () => {

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
        <section className="margin__setter mt-[5rem]">
          <div className="ml-[1.25rem] lg:ml-[7.5rem] flex">
            <PageHeader headerText="My Projects" />
            <sup className="text-base pc">x8</sup>
          </div>
          <p className="lg:w-[25%] lg:mt-[5rem] mt-[2.5rem] ml-[20%] lg:ml-[40%] pc">
            All my projects including design, development, ideas I'm working on
            and University Projects.
          </p>
        </section>
        <section className="margin__setter mt-[5rem] pc">
        {/* <div className="b__top mt-[2.5rem]">
              <Project
                imageSrc={TetherCMS}
                projectTitle="Tether CMS"
                projectDate="2024"
                projectLabel="Idea"
                projectLink="/idea/cms"
              />
            </div> */}
            <div className="b__top">
              <Project
                imageSrc={Portfolio}
                projectTitle="Personal Portfolio"
                projectDate="2024"
                projectLabel="Design & Code"
                projectLink="#current_website"
              />
            </div>
            {/* <div className="b__top">
              <Project
                imageSrc={Kind}
                projectTitle="Kind Snacks Case Analysis"
                projectDate="2024"
                projectLabel="University Project"
                projectLink="/project/kind-snacks"
              />
            </div> */}
            <div className="b__top">
              <Project
                imageSrc={Finance}
                projectTitle="Finance For Managers"
                projectDate="2023"
                projectLabel="Design & Code"
                projectLink="https://finance.william.services"
              />
            </div>
            <div className="b__top">
              <Project
                imageSrc={Excode}
                projectTitle="Excode"
                projectDate="2023"
                projectLabel="Work Experience"
                projectLink="/experience/excode"
              />
            </div>
            <div className="b__top">
              <Project
                imageSrc={Birdlime}
                projectTitle="Birdlime Media"
                projectDate="2023"
                projectLabel="Code"
                projectLink="https://birdlimemedia.co.uk"
              />
            </div>
            <div className="b__top">
              <Project
                imageSrc={ThousandLines}
                projectTitle="Thousand Lines Internship"
                projectDate="2023"
                projectLabel="Work Experience"
                projectLink="/experience/thousand-lines"
              />
            </div>
            <div className="b__top">
              <Project
                imageSrc={StrongWords}
                projectTitle="Strong Words"
                projectDate="2023"
                projectLabel="Design & Code"
                projectLink="https://strong-words.co.uk"
              />
            </div>
            <div className="b__top">
              <Project
                imageSrc={Array}
                projectTitle="Array Internship"
                projectDate="2023"
                projectLabel="Work Experience"
                projectLink="/experience/array"
              />
            </div>
            <div className="b__top b__bottom">
              <Project
                imageSrc={FrenchForAll}
                projectTitle="French For All"
                projectDate="2023"
                projectLabel="Design & Code"
                projectLink="https://french-lesson.com"
              />
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

export default ProjectsPage;
