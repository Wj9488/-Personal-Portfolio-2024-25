"use client"

import { motion as a } from 'framer-motion';

import localFont from "next/font/local"

const Telegraf = localFont({
  src: [
    {
      path: "./ComponentFonts/PPTelegraf-Regular.otf",
      weight: "600"
    },
  ]
})

const LargeHeader = ({ headerText, extraCss }) => {
  const words = headerText.split(' ');

  const variants = {
    hidden: { y: 30, opacity: 0},
    visible: { y: 0, opacity: 1}
  };

  return (
    <h1 className={`${Telegraf.className} pt-3 text-[5rem] lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem] leading-[.8] overflow-y-hidden pb-[1.5rem] ${extraCss}`}>
      {words.map((word, index) => (
        <a.span
          key={index}
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.5, delay: 0.75 + index * 0.1 }}
          style={{ display: 'inline-block' }}
        >
          {word}&nbsp;
        </a.span>
      ))}
    </h1>
  );
};

export default LargeHeader;
