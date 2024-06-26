"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import Link from "next/link";
import { motion as a } from "framer-motion";
import { opacity } from "./common/Pre-Loader/anim";

const Nav = () => {
  const pathname = usePathname();  
  const pathMap = {
    "/projects": "Projects",
    "/about": "About",
    "/contact": "Contact",
    "/experience/thousand-lines": "Thousand-Lines",
    "/experience/excode": "Excode",
    "/experience/array": "Array",
  };

  const getDisplayWord = (path) => pathMap[path] || "Jones";

  const [currentWord, setCurrentWord] = useState(getDisplayWord(pathname));

  useEffect(() => {
    setCurrentWord(getDisplayWord(pathname));
  }, [pathname]);

  return (
    <nav className="padding__setter z-[10] ic__bg flex items-center justify-between my-2 transition-colors duration-1000 ease-in-out">
      <div className="rounded-xl z-10">
        <Link className="lg:text-lg lg:font-normal flex items-center" href={"/"}>
          <p className="font-medium hc">William.</p>
          <a.p
            className="font-medium pc"
            variants={opacity}
            initial="initial"
            animate="enter"
          >
            {currentWord}
          </a.p>
        </Link>
      </div>
      <div className="hidden md:flex">
        <ul className="z-10 flex items-center justify-between gap-4 lg:gap-8 xl:gap-10 ">
          <li className="lg:text-lg lg:my-[0rem] my-1">
            <Link
              className="pc hover:opacity-50 transition-all duration-200"
              href={"/projects"}
            >
              Projects
            </Link>
          </li>
          <li className="lg:text-lg ">
            <Link
              className="pc hover:opacity-50 transition-all duration-200"
              href={"/about"}
            >
              About
            </Link>
          </li>
          <li className="lg:text-lg ">
            <Link
              className="hc hover:opacity-50 transition-all duration-200 font-medium"
              href={"/contact"}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
