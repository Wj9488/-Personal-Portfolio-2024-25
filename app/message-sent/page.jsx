"use client";

import { useEffect } from "react";
import Nav from "../../components/Nav";
import Transition from "../../components/common/Transition";
import Marquee from "react-fast-marquee";

import Lenis from "lenis";

const MessageSent = () => {
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
        <section className="relative z-[-10] min-h-[70dvh] flex items-center justify-center mt-[5rem]">
          <div>
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl lg:text-8xl xl:text-9xl">
              Message Sent
            </h1>
            <Marquee>
              <p className="pc text-[30rem] leading-[.85] overflow-y-hidden opacity-5 uppercase">
                Message Sent Message Sent Message Sent Message Sent
              </p>
              <span className="opacity-0">___</span>
            </Marquee>
          </div>
        </section>
      </main>
    </Transition>
  );
};

export default MessageSent;
