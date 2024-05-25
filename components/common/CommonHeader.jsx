"use client";

import { motion as a, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import localFont from "next/font/local"

const Telegraf = localFont({
  src: [
    {
      path: "./ComponentFonts/PPTelegraf-Regular.otf",
      weight: "600"
    },
  ]
})

const CommonHeader = ({ headerText, extraCss }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  const words = headerText.split(" ");

  const variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <h1
      ref={ref}
      className={`${Telegraf.className} text-[3.5rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[7rem] leading-[1] my-[2.5rem] ${extraCss}`}
    >
      {words.map((word, index) => (
        <a.span
          key={index}
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.25, delay: 0.5 + index * 0.1 }}
          style={{ display: "inline-block" }}
        >
          {word}&nbsp;
        </a.span>
      ))}
    </h1>
  );
};

export default CommonHeader;
