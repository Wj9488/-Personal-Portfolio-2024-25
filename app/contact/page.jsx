"use client";

import { useEffect } from "react";

import { motion as a, useScroll, useTransform } from "framer-motion";

import Link from "next/link";

import Transition from "@/components/common/Transition";
import Nav from "@/components/Nav";
import PageHeader from "../../components/common/PageHeader";
import Lenis from "lenis";
import GMTClock from "../../components/GMTClock"

import Marquee from "react-fast-marquee";

const ContactPage = () => {
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
    ["600px", "-50px"]
  );

  const formAnim = {
    initial: { opacity: 0, y: 5},
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: .8, 
        duration: .75, 
      }
    }
  }

  return (
    <Transition>
      <main>
        <Nav />
        <section className="margin__setter mt-[5rem] ">
        <div className="ml-[1.25rem] lg:ml-[7.5rem]">
          <PageHeader headerText="Contact me" />
        </div>
        </section>

        <section className="margin__setter my-[10rem]">
        <div className="lg:flex items-start justify-between">
            <GMTClock />
          <a.div className="lg:w-1/2 w-full lg:mt-0 mt-[5rem]"
            initial="initial"
            animate="animate"
            variants={formAnim}
          >
          <form class="target__form" action="https://formsubmit.io/send/ee2f7dc4-1dec-4100-81c0-054138a44eb8" method="POST">
              <input type="hidden" name="_redirect" id="name" value="https://william.services/message-sent"/>
              <p class="my-[1.25rem] pc">Your Name <sup>*</sup></p>
              <input class="accent__col_placeholder rounded-2xl bg-transparent py-2 px-4 text-lg border b" placeholder="Name..." required name="name" type="text" id="name"/>
              <p class="my-[1.25rem] pc">Your Email <sup>*</sup></p>
              <input class="accent__col_placeholder rounded-2xl bg-transparent py-2 px-4 text-lg border b" name="email" required placeholder="email@example.com" type="email" id="email"/>
              <p class="my-[1.25rem] pc">Your Message <sup>*</sup></p>
              <textarea class="accent__col_placeholder rounded-2xl text-lg py-2 px-4 bg-transparent border b" required placeholder="Message..." name="comment" id="comment" rows="3"></textarea>
              <input name="_formsubmit_id" type="text" style={{display:"none"}}/>
              <input class="hvr p-10 global__bg rounded-[100%] ic font-medium flex gap-1 text-xl hvr px-4 cta__border mt-[1.25rem] w-[fit-content] hover:cursor-pointer" type="submit" value="Send Message"/>
          </form>
          </a.div>
        </div>
      </section>
      </main>
    </Transition>
  )
}

export default ContactPage