"use client";

import { useState, useEffect } from "react";
import { slideUp } from "./anim";
import { opacity } from "./anim";
import { motion as a } from "framer-motion";

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const loaderWords = ["Services", "Work", "About", "Contact", "Jones"];

  useEffect(() => {
    if (index == loaderWords.length - 1) return;

    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  return (
    <a.div
      className="min-h-[100dvh] bg-[#112511] flex items-center justify-center z-[99]"
      variants={slideUp}
      initial="initial"
      exit="exit"
    >
      <p className="font-medium hc">William.</p>
      <a.p
        className="pc"
        variants={opacity}
        initial="initial"
        animate="enter"
      >
        {loaderWords[index]}
      </a.p>
    </a.div>
  );
};

export default Preloader;
